import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import { Filter, Map as MapIcon, Info, MapPin, Navigation, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { collection, getDocs, query, limit, collectionGroup, where, QueryConstraint } from 'firebase/firestore';
import { doctorSalaryDb } from '@/lib/firebase-doctor-salary';
import { degreeSpecialties } from '@/lib/degreeMapping';
import { districtsByState } from '@/lib/districtMapping';
// Static state capital placeholder data removed — only real Firebase data is shown
import { calculateMapStatistics } from '@/lib/mapStatistics';
import DetailedStats from '@/components/DetailedStats';
import MapComments from '@/components/MapComments';
import type { SalaryData } from '@/data/types';
import { countries, getCurrencySymbol } from '@/lib/countryData';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Fix for default marker icon
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DoctorMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [selectedDegree, setSelectedDegree] = useState<string>("All");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mapData, setMapData] = useState<SalaryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showAd, setShowAd] = useState(false);

  // Legacy collections — only used as fallback if salary_records is empty
  const legacyCollections = [
    "MBBS", "MD", "MS",
    "General Surgery", "Ophthalmology", "Orthopedics", "Otorhinolaryngology",
    "Anesthesiology", "Community Medicine", "Dermatology", "Emergency Medicine",
    "Internal Medicine", "Microbiology", "Pathology", "Pediatrics", "Radiology",
    "DM", "MCh", "Cardiology", "Neurology", "Gastroenterology", "Nephrology", "Urology", "Neurosurgery",
    "GP or Freelance"
  ];

  /**
   * Map a doc from the NEW `salary_records` collection to SalaryData.
   * The new schema stores clean, pre-normalized data.
   */
  const mapNewDocToSalaryData = (doc: any): SalaryData | null => {
    const data = doc.data();
    if (!data.latitude || !data.longitude) return null;

    return {
      id: doc.id,
      lat: typeof data.latitude === 'number' ? data.latitude : parseFloat(data.latitude),
      lng: typeof data.longitude === 'number' ? data.longitude : parseFloat(data.longitude),
      hospital: data.hospitalName || data.workplace || 'Unknown Hospital',
      location: [data.district, data.state].filter(Boolean).join(', '),
      state: data.state || '',
      district: data.district || '',
      salary: data.averageSalary ? `₹${Number(data.averageSalary).toLocaleString()}` : 'N/A',
      specialty: data.specialty || 'General',
      degree: data.degree || 'MBBS',
      notes: data.notes,
      // Metrics (new camelCase schema)
      quality_of_life: data.qualityOfLife,
      toxicity: data.toxicity,
      work_hecticity: data.workHecticity,
      average_salary: data.averageSalary,
      lowest_salary: data.lowestSalary,
      highest_salary: data.highestSalary,
      // Degree-specific salaries (carried over for popup display)
      mbbs_average_salary: data.mbbs_average_salary,
      md_average_salary: data.md_average_salary,
      ms_average_salary: data.ms_average_salary,
      dm_average_salary: data.dm_average_salary,
      mch_average_salary: data.mch_average_salary,
      // Additional metrics
      outsider_harassment: data.outsiderHarassment,
      entrance_coaching_feasibility: data.entranceCoachingFeasibility,
      preparation_to_go_abroad: data.preparationToGoAbroad,
      patient_density: data.patientDensity,
      doctor_density: data.doctorDensity,
      job_vacancy_density: data.jobVacancyDensity,
      pharma_rep_density: data.pharmaRepDensity,
      schooling_for_kids: data.schoolingForKids,
      internet: data.internet,
      cost: data.cost,
      country: data.country || 'India',
      currency: data.currency
    };
  };

  /**
   * Map a doc from the LEGACY multi-collection schema to SalaryData.
   * Handles all the inconsistencies (string coords, varying field names, etc.)
   */
  const mapLegacyDocToSalaryData = (doc: any): SalaryData | null => {
    const data = doc.data();
    if (!data.latitude || !data.longitude) return null;

    return {
      id: doc.id,
      lat: parseFloat(data.latitude),
      lng: parseFloat(data.longitude),
      hospital: (data.workplace || data.hospital || data.hospital_name || data.name || 'Unknown Hospital').trim(),
      location: `${(data.district || '').trim()}, ${(data.state || '').trim()}`.replace(/^, /, ''),
      state: (data.state || '').trim(),
      district: (data.district || '').trim(),
      salary: `${data.salary || data.average_salary || 'N/A'}`.trim(),
      specialty: (data.specialty || 'General').trim(),
      degree: (data.degree || 'MBBS').trim(),
      notes: data.comments || data.notes,
      quality_of_life: data.quality_of_life,
      toxicity: data.toxicity,
      work_hecticity: data.work_hecticity,
      average_salary: data.average_salary,
      lowest_salary: data.lowest_salary,
      highest_salary: data.highest_salary,
      mbbs_average_salary: data.mbbs_average_salary,
      md_average_salary: data.md_average_salary,
      ms_average_salary: data.ms_average_salary,
      dm_average_salary: data.dm_average_salary,
      mch_average_salary: data.mch_average_salary,
      outsider_harassment: data.outsider_harassment,
      entrance_coaching_feasibility: data.entrance_coaching_feasibility,
      preparation_to_go_abroad: data.preparation_to_go_abroad,
      patient_density: data.patient_density,
      doctor_density: data.doctor_density,
      job_vacancy_density: data.job_vacancy_density,
      pharma_rep_density: data.pharma_rep_density,
      schooling_for_kids: data.schooling_for_kids,
      internet: data.internet,
      cost: data.cost,
      country: data.country || 'India',
      currency: data.currency
    };
  };

  /**
   * PRIMARY DATA FETCHER — queries the flat `salary_records` collection.
   * Falls back to the legacy multi-collection approach if salary_records is empty.
   */
  const fetchFilteredData = async () => {
    setLoading(true);
    setShowAd(true);
    // Auto-hide ad after 5 seconds
    setTimeout(() => setShowAd(false), 5000);

    console.group('🗺️ [DoctorMap] fetchFilteredData START');
    console.log('Active Filters:', {
      country: selectedCountry,
      degree: selectedDegree,
      specialty: selectedSpecialty,
      state: selectedState,
      district: selectedDistrict,
      workplace: selectedWorkplace,
      searchQuery
    });

    try {
      // ──── Try the new flat salary_records collection first ────
      const results = await fetchFromSalaryRecords();

      if (results.length > 0) {
        console.log(`✅ salary_records returned ${results.length} results (new schema)`);
        setMapData(results);
      } else {
        // ──── Fallback to legacy multi-collection approach ────
        console.warn('⚠️ salary_records returned 0 results — falling back to legacy collections');
        const legacyResults = await fetchFromLegacyCollections();
        console.log(`📦 Legacy fallback returned ${legacyResults.length} results`);
        setMapData(legacyResults);
      }

    } catch (error) {
      console.error("Error fetching filtered data:", error);
      setMapData([]);
    } finally {
      setLoading(false);
      console.groupEnd();
    }
  };

  /**
   * NEW: Single-query fetch from the flat `salary_records` collection.
   * All filtering is done server-side via Firestore where() clauses.
   */
  const fetchFromSalaryRecords = async (): Promise<SalaryData[]> => {
    const constraints: QueryConstraint[] = [];

    // Country filter
    if (selectedCountry !== "All") {
      constraints.push(where("country", "==", selectedCountry));
    }

    // State filter
    if (selectedState !== "All") {
      constraints.push(where("state", "==", selectedState));
    }

    // District filter
    if (selectedDistrict !== "All") {
      constraints.push(where("district", "==", selectedDistrict));
    }

    // Degree filter
    if (selectedDegree !== "All") {
      constraints.push(where("degree", "==", selectedDegree));
    }

    // Specialty filter
    if (selectedSpecialty !== "All") {
      constraints.push(where("specialty_lower", "==", selectedSpecialty.toLowerCase().trim()));
    }

    // Workplace filter (now server-side thanks to normalized _lower field!)
    if (selectedWorkplace !== "All") {
      constraints.push(where("workplace_lower", "==", selectedWorkplace.toLowerCase().trim()));
    }

    // Search query — uses searchTokens array
    if (searchQuery.trim()) {
      // Note: Firestore only allows ONE array-contains per query.
      // We use the first token for the server filter, and apply additional tokens client-side.
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/);
      constraints.push(where("searchTokens", "array-contains", tokens[0]));
    }

    // Always limit to prevent excessive reads
    constraints.push(limit(500));

    console.log(`🔍 salary_records query with ${constraints.length} constraints`);

    const salaryRef = collection(doctorSalaryDb, 'salary_records');
    const q = query(salaryRef, ...constraints);
    const snapshot = await getDocs(q);

    console.log(`  📄 salary_records: ${snapshot.size} docs returned`);

    let results: SalaryData[] = [];
    snapshot.forEach((docSnap) => {
      const mapped = mapNewDocToSalaryData(docSnap);
      if (mapped) results.push(mapped);
    });

    // Multi-token search: if user searched "aiims delhi", the server filtered on "aiims";
    // now we client-side filter for "delhi" too.
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/);
      if (tokens.length > 1) {
        const additionalTokens = tokens.slice(1);
        const beforeCount = results.length;
        results = results.filter(item => {
          const searchable = `${item.hospital} ${item.state} ${item.district} ${item.specialty} ${item.degree}`.toLowerCase();
          return additionalTokens.every(t => searchable.includes(t));
        });
        console.log(`  🔎 Multi-token client filter: ${beforeCount} → ${results.length}`);
      }
    }

    return results;
  };

  /**
   * LEGACY FALLBACK: Multi-collection fetch from the old schema.
   * Kept for backward compatibility during migration transition.
   */
  const fetchFromLegacyCollections = async (): Promise<SalaryData[]> => {
    let allResults: SalaryData[] = [];

    // Helper to apply legacy filters
    const applyLegacyFilters = (baseQuery: any) => {
      let q = baseQuery;
      if (selectedDistrict !== "All") {
        q = query(q, where("searchKeywords", "array-contains", selectedDistrict));
      } else if (selectedState !== "All") {
        q = query(q, where("searchKeywords", "array-contains", selectedState));
      } else if (selectedCountry !== "All" && selectedCountry !== "India") {
        q = query(q, where("country", "==", selectedCountry));
      }
      return q;
    };

    // 1. Fetch from metrics
    try {
      let metricsQuery = applyLegacyFilters(collection(doctorSalaryDb, 'metrics'));
      if (selectedState === "All" && selectedDistrict === "All" && selectedCountry === "All") {
        metricsQuery = query(metricsQuery, limit(100));
      }
      const metricsSnapshot = await getDocs(metricsQuery);
      metricsSnapshot.forEach((doc) => {
        const mapped = mapLegacyDocToSalaryData(doc);
        if (mapped) allResults.push(mapped);
      });
    } catch (e) {
      console.warn("Legacy metrics query failed:", e);
    }

    // 2. Fetch from degree collections
    for (const colName of legacyCollections) {
      try {
        let degreeQuery: any;
        try {
          degreeQuery = applyLegacyFilters(collectionGroup(doctorSalaryDb, colName));
        } catch {
          degreeQuery = applyLegacyFilters(collection(doctorSalaryDb, colName));
        }

        if (selectedState === "All" && selectedDistrict === "All" && selectedCountry === "All" && selectedDegree === "All") {
          degreeQuery = query(degreeQuery, limit(50));
        }

        const snapshot = await getDocs(degreeQuery);
        snapshot.forEach((doc) => {
          const mapped = mapLegacyDocToSalaryData(doc);
          if (mapped && !allResults.some(r => r.id === mapped.id)) {
            allResults.push(mapped);
          }
        });
      } catch {
        // Silently skip failed collections in legacy mode
      }
    }

    // Client-side India filter for legacy data
    if (selectedCountry === "India") {
      allResults = allResults.filter(item => !item.country || item.country === "India");
    }

    return allResults;
  };

  useEffect(() => {
    fetchFilteredData();
  }, []); // Initial load only

  useEffect(() => {
    // Reset specialty when degree changes
    setSelectedSpecialty("All");
  }, [selectedDegree]);

  useEffect(() => {
    // Reset district when state changes
    setSelectedDistrict("All");
  }, [selectedState]);

  const availableSpecialties = selectedDegree !== "All" && degreeSpecialties[selectedDegree]
    ? degreeSpecialties[selectedDegree]
    : [];

  const availableDistricts = selectedState !== "All" && districtsByState[selectedState]
    ? districtsByState[selectedState]
    : [];

  const availableWorkplaces = Array.from(new Set(mapData.map(item => item.hospital))).sort();

  // ──── Client-side filtering ────
  // With the new schema, server-side filtering handles most cases.
  // Client-side filtering is now MINIMAL — only needed for:
  //   1. Workplace matching (only in legacy mode, since new schema filters server-side)
  //   2. Multi-token search refinement (handled above in fetchFromSalaryRecords)
  //
  // For the legacy fallback path, we still do degree/specialty/state/district matching client-side.
  const filteredData = mapData.filter(item => {
    // Search match (local text search for responsiveness on already-loaded data)
    const matchesSearch = searchQuery === "" ||
      item.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.state && item.state.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.district && item.district.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.specialty && item.specialty.toLowerCase().includes(searchQuery.toLowerCase()));

    // Degree match
    const degreeMatch = selectedDegree === "All" ||
      (item.degree || '').toLowerCase().trim() === selectedDegree.toLowerCase().trim();

    // Specialty match
    const specialtyMatch = selectedSpecialty === "All" ||
      (item.specialty || '').toLowerCase().trim() === selectedSpecialty.toLowerCase().trim();

    // Location match
    const stateMatch = selectedState === "All" || item.state === selectedState;
    const districtMatch = selectedDistrict === "All" || item.district === selectedDistrict;

    // Workplace match
    const workplaceMatch = selectedWorkplace === "All" || item.hospital === selectedWorkplace;

    return degreeMatch && specialtyMatch && stateMatch && districtMatch && workplaceMatch && matchesSearch;
  });

  console.log(`🔎 Client-side filter: ${mapData.length} total → ${filteredData.length} displayed`);

  // Calculate statistics from filtered data using the utility
  const stats = calculateMapStatistics(filteredData);

  // Helper component to update map view
  const MapUpdater = ({ data }: { data: SalaryData[] }) => {
    const map = useMap();

    useEffect(() => {
      if (data.length > 0) {
        const bounds = L.latLngBounds(data.map(item => [item.lat, item.lng]));
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      }
    }, [data, map]);

    return null;
  };

  // Group data by location for markers
  const groupedData = filteredData.reduce((acc, item) => {
    const key = `${item.lat},${item.lng}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, SalaryData[]>);

  /**
   * REUSABLE SIDEBAR CONTENT
   */
  const SidebarContent = () => (
    <>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search hospitals..."
            className="pl-9 bg-slate-50 border-slate-200 focus:ring-medical-blue/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 text-slate-700 font-semibold">
            <Filter className="w-4 h-4" />
            <h3>Filters</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Country</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="All">All Countries</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>{country.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Degree</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
              >
                <option value="All">All Degrees</option>
                {Object.keys(degreeSpecialties).map((degree) => (
                  <option key={degree} value={degree}>{degree}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Specialty</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                disabled={selectedDegree === "All"}
              >
                <option value="All">
                  {selectedDegree === "All" ? "Select degree first" : "All Specialties"}
                </option>
                {availableSpecialties.map((specialty) => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">State</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="All">All States</option>
                {Object.keys(districtsByState).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">District</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={selectedState === "All"}
              >
                <option value="All">
                  {selectedState === "All" ? "Select state first" : "All Districts"}
                </option>
                {availableDistricts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Workplace</label>
              <select
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                value={selectedWorkplace}
                onChange={(e) => setSelectedWorkplace(e.target.value)}
              >
                <option value="All">All Workplaces</option>
                {availableWorkplaces.map((workplace) => (
                  <option key={workplace} value={workplace}>{workplace}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <DetailedStats
            stats={stats}
            currencySymbol={selectedCountry !== "All" ? getCurrencySymbol(selectedCountry) : "₹"}
          />
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 flex-shrink-0 space-y-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] sticky bottom-0 z-10">
        <Button
          variant="outline"
          className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 gap-2 mb-2"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare className="w-4 h-4" />
          {showComments ? "Back to Map" : "View Community Comments"}
        </Button>

        <Button
          className="w-full bg-medical-blue hover:bg-medical-blue-dark shadow-md active:scale-[0.98] transition-all font-semibold py-6"
          onClick={fetchFilteredData}
          disabled={loading || showComments}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Updating Map...</span>
            </div>
          ) : "Apply Filters"}
        </Button>
      </div>
    </>
  );

  const HospitalDetailCard = ({ items }: { items: SalaryData[] }) => {
    const mainItem = items[0];
    return (
      <div className="p-2 space-y-3">
        {/* Header */}
        <div className="border-b border-slate-100 pb-2">
          <h3 className="font-bold text-base text-slate-900 leading-tight">{mainItem.hospital}</h3>
          <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-medical-blue" /> {mainItem.location}
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-3 pb-2">
          {items.map((item, index) => (
            <div key={item.id} className={index > 0 ? "pt-3 border-t border-slate-100" : ""}>
              {/* Salary Info */}
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 mb-2 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                    {item.degree} • {item.specialty}
                  </div>
                  <div className="text-sm font-black text-medical-blue">
                    {item.salary}
                  </div>
                </div>

                {/* Detailed Salary Breakdown if available */}
                {(item.mbbs_average_salary || item.md_average_salary || item.ms_average_salary) && (
                  <div className="mt-2 pt-2 border-t border-slate-200 grid grid-cols-2 gap-x-2 gap-y-1">
                    {item.mbbs_average_salary && (
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-slate-500">MBBS</span>
                        <span className="font-bold text-slate-900">₹{item.mbbs_average_salary.toLocaleString()}</span>
                      </div>
                    )}
                    {item.md_average_salary && (
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-slate-500">MD</span>
                        <span className="font-bold text-slate-900">₹{item.md_average_salary.toLocaleString()}</span>
                      </div>
                    )}
                    {item.ms_average_salary && (
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-slate-500">MS</span>
                        <span className="font-bold text-slate-900">₹{item.ms_average_salary.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-1.5">
                {item.quality_of_life !== undefined && (
                  <div className="text-center bg-green-50/50 p-1 rounded-md border border-green-100">
                    <div className="text-[7px] text-green-600 font-bold uppercase">QoL</div>
                    <div className="text-[10px] font-black text-green-700">{item.quality_of_life}</div>
                  </div>
                )}
                {item.toxicity !== undefined && (
                  <div className="text-center bg-red-50/50 p-1 rounded-md border border-red-100">
                    <div className="text-[7px] text-red-600 font-bold uppercase">Toxic</div>
                    <div className="text-[10px] font-black text-red-700">{item.toxicity}</div>
                  </div>
                )}
                {item.work_hecticity !== undefined && (
                  <div className="text-center bg-orange-50/50 p-1 rounded-md border border-orange-100">
                    <div className="text-[7px] text-orange-600 font-bold uppercase">Hectic</div>
                    <div className="text-[10px] font-black text-orange-700">{item.work_hecticity}</div>
                  </div>
                )}
              </div>

              {/* Notes */}
              {item.notes && (
                <div className="mt-2 text-[9px] text-slate-600 italic bg-blue-50/30 p-2 rounded-lg border border-blue-100 flex gap-1.5 leading-snug">
                  <Info className="w-3 h-3 flex-shrink-0 text-blue-500" />
                  <span>{item.notes}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="pt-2 border-t border-slate-100 flex justify-end items-center bg-white">
          <Button variant="outline" size="sm" className="h-7 text-[9px] text-blue-600 flex items-center gap-1 px-2 py-0" asChild>
            <a
              href={`https://www.google.com/maps?q=${mainItem.lat},${mainItem.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-3 h-3" /> Navigate
            </a>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-120px)] h-[calc(100vh-80px)] w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-2xl relative">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-96 bg-white border-r border-slate-200 flex-col relative h-full">
        <div className="p-6 border-b border-slate-100 flex-shrink-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-medical-blue flex items-center justify-center">
              <MapIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">MedAcc Maps</h2>
          </div>
        </div>
        <SidebarContent />
      </div>

      {/* Mobile Floating Controls */}
      <div className="lg:hidden absolute top-4 left-4 right-4 z-[500] pointer-events-none space-y-2">
        <div className="flex gap-2">
          {/* Mobile Search Bar Trigger */}
          <div className="flex-1 pointer-events-auto bg-white/95 backdrop-blur shadow-lg rounded-full flex items-center px-4 py-2 border border-slate-200 animate-in fade-in slide-in-from-top-4 duration-500">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <span className="text-sm text-slate-500 truncate">
              {searchQuery || "Search hospitals..."}
            </span>
          </div>

          {/* Mobile Filter Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="pointer-events-auto bg-medical-blue hover:bg-medical-blue-dark shadow-lg rounded-full animate-in fade-in slide-in-from-top-4 duration-700">
                <Filter className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[85%] max-w-sm">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-medical-blue" />
                  Map Filters
                </SheetTitle>
              </SheetHeader>
              <div className="h-full flex flex-col pt-2">
                <SidebarContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Quick Summary Pill */}
        <div className="pointer-events-auto mx-auto w-fit bg-slate-900/80 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5 animate-in fade-in zoom-in duration-1000">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Showing {filteredData.length} records
        </div>
      </div>

      {/* Floating Pill for desktop results count could go here if needed, but keeping mobile one below */}

      {/* Mobile Floating Comments Toggle */}
      <div className="lg:hidden absolute bottom-24 right-4 z-[500]">
        <Button
          size="icon"
          className="bg-white hover:bg-slate-50 text-slate-700 shadow-xl rounded-full border border-slate-200"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? <MapIcon className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        </Button>
      </div>

      <div className="flex-1 relative z-0 h-full overflow-hidden bg-white">
        {showComments ? (
          <div className="h-full overflow-y-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="p-4 lg:p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Community Feedback</h2>
                  <p className="text-sm text-slate-500">Insights and reports from medical professionals</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowComments(false)} className="text-medical-blue">
                  Back to Map
                </Button>
              </div>
              <MapComments />
            </div>
          </div>
        ) : (
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater data={filteredData} />
            {Object.entries(groupedData).map(([key, items]) => {
              const mainItem = items[0];
              return (
                <Marker
                  key={key}
                  position={[mainItem.lat, mainItem.lng]}
                >
                  <Popup className="glass-popup" minWidth={220} maxWidth={320}>
                    <div className="w-full max-w-[calc(100vw-60px)] sm:max-w-xs max-h-[320px] overflow-y-auto custom-scrollbar pr-1">
                      <HospitalDetailCard items={items} />
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}

        {/* Desktop Map Overlay Info removed to prevent obstruction */}
      </div>

      {/* JSOPEX India Advertisement Popup */}
      {showAd && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-medical-blue/20 p-8 max-w-sm w-full mx-4 animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500 pointer-events-auto relative">
            <button
              onClick={() => setShowAd(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              ×
            </button>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center shadow-inner">
                <MapIcon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-medical-blue uppercase tracking-[0.2em]">Sponsorship</span>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">HOSPEX India</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Pioneering medical excellence across the subcontinent. Join the future of healthcare technology.
              </p>
              <div className="w-full pt-2">
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-medical-blue animate-[progress_5s_linear_forwards]" />
                </div>
                <p className="text-[9px] text-slate-400 mt-2 uppercase tracking-tight">Closing in 5 seconds</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Global animation for the ad progress bar
const styles = `
@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}
`;
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default DoctorMap;

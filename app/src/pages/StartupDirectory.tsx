import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  DollarSign, 
  Calendar, 
  ArrowUpRight, 
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

// Types
interface Startup {
  id: string;
  name: string;
  description: string;
  employeeCount: string;
  arr: string;
  location: string;
  sector: 'Bio' | 'Biomedical' | 'Biotech' | 'Biomedicolegal' | 'Healthcare';
  foundingYear: number;
  website: string;
}

// Mock Data
const STARTUPS: Startup[] = [
  {
    id: '1',
    name: 'Color Health',
    description: 'A healthcare platform and operating system that aims to make large-scale health initiatives easier to scale and implement through software and infrastructure.',
    employeeCount: '500-1000',
    arr: '$100M+',
    location: 'Burlingame, CA',
    sector: 'Healthcare',
    foundingYear: 2013,
    website: 'https://www.color.com'
  },
  {
    id: '2',
    name: 'Benchling',
    description: 'Cloud-based platform for biotechnology research and development, providing tools for DNA editing, experiment tracking, and collaboration.',
    employeeCount: '1000+',
    arr: '$100M+',
    location: 'San Francisco, CA',
    sector: 'Biotech',
    foundingYear: 2012,
    website: 'https://www.benchling.com'
  },
  {
    id: '3',
    name: 'Freenome',
    description: 'Developing accurate and non-invasive disease screening products to proactively treat cancer using a multiomics platform.',
    employeeCount: '500-1000',
    arr: '$50M-$100M',
    location: 'South San Francisco, CA',
    sector: 'Biotech',
    foundingYear: 2014,
    website: 'https://www.freenome.com'
  },
  {
    id: '4',
    name: 'BillionToOne',
    description: 'Precision diagnostics company that makes molecular diagnostics accurate, efficient, and accessible for all.',
    employeeCount: '200-500',
    arr: '$10M-$50M',
    location: 'Menlo Park, CA',
    sector: 'Biomedical',
    foundingYear: 2016,
    website: 'https://www.billiontoone.com'
  },
  {
    id: '5',
    name: 'Scipher Medicine',
    description: 'Precision immunology company matching patients with their most effective therapy using a blood test.',
    employeeCount: '200-500',
    arr: '$10M-$50M',
    location: 'Waltham, MA',
    sector: 'Healthcare',
    foundingYear: 2014,
    website: 'https://www.sciphermedicine.com'
  },
  {
    id: '6',
    name: 'Generate:Biomedicines',
    description: 'Using generative AI to create entirely new protein therapeutics from scratch to treat complex diseases.',
    employeeCount: '200-500',
    arr: '$10M-$50M',
    location: 'Somerville, MA',
    sector: 'Biotech',
    foundingYear: 2018,
    website: 'https://generatebiomedicines.com'
  },
  {
    id: '7',
    name: 'Monte Rosa Therapeutics',
    description: 'Developing a portfolio of novel small molecule precision medicines that employ the body\'s natural mechanisms to degrade disease-causing proteins.',
    employeeCount: '100-200',
    arr: '$1M-$10M',
    location: 'Boston, MA',
    sector: 'Biomedical',
    foundingYear: 2018,
    website: 'https://www.monterosatx.com'
  },
  {
    id: '8',
    name: 'Viome Life Sciences',
    description: 'Digitizing human biology to prevent and reverse chronic diseases using mRNA analysis and AI.',
    employeeCount: '100-200',
    arr: '$10M-$50M',
    location: 'Bellevue, WA',
    sector: 'Healthcare',
    foundingYear: 2016,
    website: 'https://www.viome.com'
  },
  {
    id: '9',
    name: 'Insilico Medicine',
    description: 'End-to-end artificial intelligence-driven pharma-technology company with a mission to accelerate drug discovery.',
    employeeCount: '200-500',
    arr: '$10M-$50M',
    location: 'New York, NY',
    sector: 'Biotech',
    foundingYear: 2014,
    website: 'https://insilico.com'
  },
  {
    id: '10',
    name: 'LegalBio',
    description: 'Specialized legal platform for biotechnology patents and regulatory compliance automation.',
    employeeCount: '10-50',
    arr: '$1M-$10M',
    location: 'London, UK',
    sector: 'Biomedicolegal',
    foundingYear: 2021,
    website: '#'
  },
  {
    id: '11',
    name: 'BioTrace Medical',
    description: 'Developing temporary pacing leads for transcatheter aortic valve replacement procedures.',
    employeeCount: '50-100',
    arr: '$5M-$20M',
    location: 'San Carlos, CA',
    sector: 'Biomedical',
    foundingYear: 2014,
    website: '#'
  },
  {
    id: '12',
    name: 'Ginkgo Bioworks',
    description: 'The organism company. We design custom microbes for customers across multiple markets.',
    employeeCount: '500-1000',
    arr: '$100M+',
    location: 'Boston, MA',
    sector: 'Bio',
    foundingYear: 2008,
    website: 'https://www.ginkgobioworks.com'
  },
  {
    id: '13',
    name: 'BeiGene',
    description: 'A global biotechnology company specializing in discovering and developing innovative oncology treatments.',
    employeeCount: '1000+',
    arr: '$100M+',
    location: 'Cambridge, MA',
    sector: 'Biotech',
    foundingYear: 2010,
    website: 'https://www.beigene.com'
  },
  {
    id: '14',
    name: 'Iovance Biotherapeutics',
    description: 'Pioneering a transformative approach to cancer treatment by harnessing the natural human immune system.',
    employeeCount: '500-1000',
    arr: '$50M-$100M',
    location: 'San Carlos, CA',
    sector: 'Biotech',
    foundingYear: 2007,
    website: 'https://www.iovance.com'
  },
  {
    id: '15',
    name: 'Rhizome',
    description: 'AI drug discovery company focused on bringing drugs to market by understanding regulatory thinking.',
    employeeCount: '10-50',
    arr: '$1M-$10M',
    location: 'San Francisco, CA',
    sector: 'Biotech',
    foundingYear: 2023,
    website: 'https://rhizome.bio'
  },
  {
    id: '16',
    name: 'Anto',
    description: 'Building a foundation model for microbial communities to make the gut microbiome computable.',
    employeeCount: '10-50',
    arr: '<$1M',
    location: 'San Francisco, CA',
    sector: 'Biotech',
    foundingYear: 2023,
    website: 'https://anto.bio'
  },
  {
    id: '17',
    name: 'Ring Therapeutics',
    description: 'Gene therapy company using Commensal Viruses to create a new class of vector called Anellovectors.',
    employeeCount: '50-100',
    arr: '$10M-$50M',
    location: 'Cambridge, MA',
    sector: 'Biotech',
    foundingYear: 2017,
    website: 'https://ringtherapeutics.com'
  },
  {
    id: '18',
    name: 'Grow Group',
    description: 'Biopharmaceutical company exclusively working on delivering cannabis-based medicines.',
    employeeCount: '100-200',
    arr: '$10M-$50M',
    location: 'London, UK',
    sector: 'Healthcare',
    foundingYear: 2017,
    website: 'https://growgroupplc.com'
  },
  {
    id: '19',
    name: 'Seed Health',
    description: 'Microbiome science company pioneering applications of microbes to improve human and planetary health.',
    employeeCount: '100-200',
    arr: '$50M-$100M',
    location: 'Los Angeles, CA',
    sector: 'Healthcare',
    foundingYear: 2015,
    website: 'https://seed.com'
  },
  {
    id: '20',
    name: 'Multus',
    description: 'Creating the key ingredients to make cultivated meat affordable and profitable for everyone.',
    employeeCount: '10-50',
    arr: '$1M-$10M',
    location: 'London, UK',
    sector: 'Biotech',
    foundingYear: 2019,
    website: 'https://multus.bio'
  },
  {
    id: '21',
    name: 'Detect',
    description: 'Developing innovative tests for early cancer detection using proprietary blood-based technology.',
    employeeCount: '50-100',
    arr: '$1M-$10M',
    location: 'Guilford, CT',
    sector: 'Biomedical',
    foundingYear: 2020,
    website: 'https://detect.com'
  },
  {
    id: '22',
    name: 'SOPHiA GENETICS',
    description: 'Data-driven medicine software company using AI to assist with patient decision-making.',
    employeeCount: '1000+',
    arr: '$100M+',
    location: 'Saint-Sulpice, Switzerland',
    sector: 'Healthcare',
    foundingYear: 2011,
    website: 'https://sophiagenetics.com'
  },
  {
    id: '23',
    name: 'Hera',
    description: 'Developing MetriDx to replace invasive laparoscopy for diagnosis, combining molecular diagnostics and qPCR.',
    employeeCount: '10-50',
    arr: '<$1M',
    location: 'San Antonio, TX',
    sector: 'Biomedical',
    foundingYear: 2023,
    website: '#'
  }
];

const SECTORS = ['All', 'Bio', 'Biomedical', 'Biotech', 'Biomedicolegal', 'Healthcare'];
const EMPLOYEE_RANGES = ['All', '1-10', '10-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
const ARR_RANGES = ['All', '<$1M', '$1M-$10M', '$10M-$50M', '$50M-$100M', '$100M+'];
const LOCATIONS = ['All', ...Array.from(new Set(STARTUPS.map(s => s.location))).sort()];

const StartupDirectory = () => {
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedEmployees, setSelectedEmployees] = useState('All');
  const [selectedARR, setSelectedARR] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [foundingYearRange, setFoundingYearRange] = useState([2000, 2025]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Logic
  const filteredStartups = useMemo(() => {
    return STARTUPS.filter(startup => {
      const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSector = selectedSector === 'All' || startup.sector === selectedSector;
      const matchesEmployees = selectedEmployees === 'All' || startup.employeeCount === selectedEmployees;
      const matchesARR = selectedARR === 'All' || startup.arr === selectedARR;
      const matchesLocation = selectedLocation === 'All' || startup.location === selectedLocation;
      const matchesYear = startup.foundingYear >= foundingYearRange[0] && startup.foundingYear <= foundingYearRange[1];

      return matchesSearch && matchesSector && matchesEmployees && matchesARR && matchesLocation && matchesYear;
    });
  }, [searchTerm, selectedSector, selectedEmployees, selectedARR, selectedLocation, foundingYearRange]);

  // Reset Filters
  const resetFilters = () => {
    setSelectedSector('All');
    setSelectedEmployees('All');
    setSelectedARR('All');
    setSelectedLocation('All');
    setFoundingYearRange([2000, 2025]);
    setSearchTerm('');
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sector Filter */}
      <div className="space-y-2">
        <Label>Sector</Label>
        <Select value={selectedSector} onValueChange={setSelectedSector}>
          <SelectTrigger>
            <SelectValue placeholder="Select Sector" />
          </SelectTrigger>
          <SelectContent>
            {SECTORS.map(sector => (
              <SelectItem key={sector} value={sector}>{sector}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <Label>Location</Label>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            {LOCATIONS.map(location => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Employee Size Filter */}
      <div className="space-y-2">
        <Label>Employee Size</Label>
        <Select value={selectedEmployees} onValueChange={setSelectedEmployees}>
          <SelectTrigger>
            <SelectValue placeholder="Select Size" />
          </SelectTrigger>
          <SelectContent>
            {EMPLOYEE_RANGES.map(range => (
              <SelectItem key={range} value={range}>{range}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ARR Filter */}
      <div className="space-y-2">
        <Label>ARR (Annual Recurring Revenue)</Label>
        <Select value={selectedARR} onValueChange={setSelectedARR}>
          <SelectTrigger>
            <SelectValue placeholder="Select ARR" />
          </SelectTrigger>
          <SelectContent>
            {ARR_RANGES.map(range => (
              <SelectItem key={range} value={range}>{range}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Founding Year Filter */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label>Founding Year</Label>
          <span className="text-sm text-slate-500">{foundingYearRange[0]} - {foundingYearRange[1]}</span>
        </div>
        <Slider
          defaultValue={[2000, 2025]}
          value={foundingYearRange}
          onValueChange={(val) => setFoundingYearRange(val)}
          min={2000}
          max={2025}
          step={1}
          className="py-4"
        />
      </div>

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue to-medical-teal pt-32 pb-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display">Global Startup Directory</h1>
            <p className="text-xl text-white/90">
              Discover the world's most innovative Bio, Biomedical, and Healthcare startups.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Sheet */}
          <div className="lg:hidden mb-4">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Startups</SheetTitle>
                  <SheetDescription>Refine your search parameters</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-medical-blue">
                <Filter className="h-5 w-5" />
                <h3 className="font-semibold text-lg">Filters</h3>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search by name, description, or location..."
                className="pl-10 h-12 text-lg shadow-sm border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Results Count */}
            <div className="mb-6 text-slate-500">
              Showing {filteredStartups.length} results
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              <AnimatePresence mode="popLayout">
                {filteredStartups.map((startup) => (
                  <motion.div
                    key={startup.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-slate-100">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center text-medical-blue mb-4 group-hover:scale-110 transition-transform">
                            <Building2 className="h-6 w-6" />
                          </div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                            {startup.sector}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-slate-900">{startup.name}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                          {startup.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-medical-teal" />
                          <span>{startup.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-medical-teal" />
                          <span>{startup.employeeCount} employees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-medical-teal" />
                          <span>{startup.arr} ARR</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-medical-teal" />
                          <span>Founded {startup.foundingYear}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-4 border-t border-slate-50">
                        <a 
                          href={startup.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-medical-blue hover:text-medical-blue-dark font-medium flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                        >
                          Visit Website <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredStartups.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">No startups found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                <Button variant="link" onClick={resetFilters} className="mt-4 text-medical-blue">
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Submit Startup CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-teal/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold font-display">Are we missing your startup?</h2>
                <p className="text-slate-300 text-lg">
                  Join our growing directory of innovative companies. Submit your startup details to be featured and reach investors, partners, and talent.
                </p>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8">
                  Submit Startup
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StartupDirectory;

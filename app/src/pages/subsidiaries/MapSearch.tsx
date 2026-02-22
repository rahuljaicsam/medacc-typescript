import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { MapPin } from 'lucide-react';
import DoctorMap from '@/components/DoctorMap';

const MapSearch = () => (
  <SubsidiaryLayout
    title="Map Search"
    subtitle="Engine for Doctors"
    description="A powerful search engine designed specifically for doctors to find resources, clinics, and opportunities worldwide."
    icon={MapPin}
    color="text-red-500"
    bg="bg-red-50"
    textColor="text-red-600"
  >
    <DoctorMap />
  </SubsidiaryLayout>
);

export default MapSearch;

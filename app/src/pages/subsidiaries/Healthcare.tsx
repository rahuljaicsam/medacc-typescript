import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Building2, Stethoscope, Activity, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Healthcare = () => (
  <SubsidiaryLayout
    title="Healthcare"
    subtitle="For Hospitals & Clinics"
    description="Specialized services for hospitals and clinics, focusing on operational efficiency, patient experience, and digital transformation."
    icon={Building2}
    color="text-rose-500"
    bg="bg-rose-50"
    textColor="text-rose-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Operational Efficiency</h3>
          <p className="text-slate-600">Optimize workflows, reduce wait times, and improve resource utilization within your healthcare facility.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
            <Stethoscope className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Clinical Excellence</h3>
          <p className="text-slate-600">Implement evidence-based protocols and quality improvement initiatives to enhance patient care.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
            <ClipboardList className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Transformation</h3>
          <p className="text-slate-600">Modernize your hospital with integrated EHR systems, telemedicine capabilities, and smart infrastructure.</p>
        </div>
      </div>

      <div className="bg-rose-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Transform Your Facility</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Elevate the standard of care and operational performance of your hospital or clinic.</p>
        <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg rounded-xl">
          Consult Experts
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default Healthcare;

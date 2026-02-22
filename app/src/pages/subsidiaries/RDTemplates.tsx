import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { FlaskConical, Microscope, FileSpreadsheet, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RDTemplates = () => (
  <SubsidiaryLayout
    title="R&D Templates"
    subtitle="For Founders"
    description="Research and development templates to streamline your scientific processes, documentation, and grant applications."
    icon={FlaskConical}
    color="text-lime-500"
    bg="bg-lime-50"
    textColor="text-lime-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
            <Microscope className="w-6 h-6 text-lime-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Lab Protocols</h3>
          <p className="text-slate-600">Standardized templates for experimental protocols, ensuring reproducibility and compliance.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
            <FileSpreadsheet className="w-6 h-6 text-lime-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Grant Proposals</h3>
          <p className="text-slate-600">Winning grant writing templates for NIH, NSF, and other major funding bodies.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
            <ClipboardCheck className="w-6 h-6 text-lime-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance Docs</h3>
          <p className="text-slate-600">Essential documentation templates for ISO 13485, FDA submissions, and CE marking.</p>
        </div>
      </div>

      <div className="bg-lime-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Accelerate Discovery</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Focus on the science while we handle the structure. Streamline your R&D workflow today.</p>
        <Button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-6 text-lg rounded-xl">
          Download Templates
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default RDTemplates;

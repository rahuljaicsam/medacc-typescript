import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Shield, Lock, FileCheck, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CyberSecurity = () => (
  <SubsidiaryLayout
    title="Cyber Security"
    subtitle="Quality Tools"
    description="Essential cybersecurity tools and compliance checklists to protect patient data and ensure regulatory adherence."
    icon={Shield}
    color="text-teal-500"
    bg="bg-teal-50"
    textColor="text-teal-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Data Encryption</h3>
          <p className="text-slate-600">End-to-end encryption protocols to secure sensitive patient health information (PHI) at rest and in transit.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <FileCheck className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">HIPAA Compliance</h3>
          <p className="text-slate-600">Automated auditing and reporting tools to ensure your software meets all HIPAA and GDPR regulatory standards.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <EyeOff className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Vulnerability Scanning</h3>
          <p className="text-slate-600">Continuous security monitoring and vulnerability assessment to identify and patch potential threats.</p>
        </div>
      </div>

      <div className="bg-teal-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Protect What Matters Most</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Build trust with your patients by ensuring their private data is always secure.</p>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl">
          Secure Your Platform
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default CyberSecurity;

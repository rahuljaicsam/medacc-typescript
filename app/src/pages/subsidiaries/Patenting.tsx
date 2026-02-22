import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Handshake, FileText, Scale, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Patenting = () => (
  <SubsidiaryLayout
    title="Patenting"
    subtitle="Regulatory Compliance"
    description="Expert guidance on intellectual property protection, patent filing, and navigating the complex regulatory landscape."
    icon={Handshake}
    color="text-yellow-500"
    bg="bg-yellow-50"
    textColor="text-yellow-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Patent Filing</h3>
          <p className="text-slate-600">Comprehensive support for drafting and filing provisional and non-provisional patent applications.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
            <Scale className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">IP Strategy</h3>
          <p className="text-slate-600">Develop a robust intellectual property strategy to protect your innovations and maximize their value.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">International Protection</h3>
          <p className="text-slate-600">Guidance on filing PCT applications and navigating international patent laws.</p>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Secure Your Innovation</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Protect your hard work and ideas with our expert legal and patent services.</p>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg rounded-xl">
          Start Filing
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default Patenting;

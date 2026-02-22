import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Plane, Briefcase, Home, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RetireImmigrate = () => (
  <SubsidiaryLayout
    title="Retire & Immigrate"
    subtitle="For Doctors"
    description="Comprehensive support for medical professionals looking to retire or immigrate, including legal, financial, and logistical assistance."
    icon={Plane}
    color="text-green-500"
    bg="bg-green-50"
    textColor="text-green-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Assistance</h3>
          <p className="text-slate-600">Expert guidance on visa applications, licensing requirements, and legal documentation for your destination country.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Career Transition</h3>
          <p className="text-slate-600">Find new job opportunities or consulting roles in your new location with our specialized job board.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Home className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Relocation Support</h3>
          <p className="text-slate-600">Full-service relocation packages including housing search, school placement, and settling-in services.</p>
        </div>
      </div>

      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Start Your New Chapter</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Let us handle the complexities of your move so you can focus on your future.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl">
          Get Consultation
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default RetireImmigrate;

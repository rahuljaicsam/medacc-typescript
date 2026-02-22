import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Building, BarChart, Users, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CRMSales = () => (
  <SubsidiaryLayout
    title="CRM & Sales"
    subtitle="For Founders"
    description="Customized CRM solutions and sales strategies to help healthcare founders manage relationships and drive revenue growth."
    icon={Building}
    color="text-medical-blue"
    bg="bg-medical-blue/10"
    textColor="text-medical-blue"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-medical-blue" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Patient Relationship Management</h3>
          <p className="text-slate-600">Specialized CRM tools designed to manage patient interactions, appointments, and follow-ups effectively.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center mb-4">
            <BarChart className="w-6 h-6 text-medical-blue" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Sales Pipeline</h3>
          <p className="text-slate-600">Visualize and optimize your sales process from lead generation to closing deals with healthcare providers.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center mb-4">
            <PhoneCall className="w-6 h-6 text-medical-blue" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Outreach Automation</h3>
          <p className="text-slate-600">Automate your email and communication workflows to engage with potential clients and partners at scale.</p>
        </div>
      </div>

      <div className="bg-medical-blue/5 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Grow Your Business</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Streamline your sales operations and build lasting relationships with your customers.</p>
        <Button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 text-lg rounded-xl">
          Get CRM Solution
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default CRMSales;

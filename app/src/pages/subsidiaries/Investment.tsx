import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Wallet, TrendingUp, PieChart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Investment = () => (
  <SubsidiaryLayout
    title="Investment"
    subtitle="Portfolio for Doctors"
    description="Tailored investment strategies and portfolio management services designed specifically for medical professionals."
    icon={Wallet}
    color="text-amber-500"
    bg="bg-amber-50"
    textColor="text-amber-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Strategies</h3>
          <p className="text-slate-600">Customized investment plans focusing on high-growth opportunities in healthcare and biotechnology sectors.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <PieChart className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Management</h3>
          <p className="text-slate-600">Professional management of your assets ensuring diversification and risk mitigation.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Wealth Protection</h3>
          <p className="text-slate-600">Strategies to preserve your wealth through tax-efficient planning and estate management.</p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Secure Your Financial Future</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Expert advice tailored to the unique financial needs of medical professionals.</p>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl">
          Schedule Assessment
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default Investment;

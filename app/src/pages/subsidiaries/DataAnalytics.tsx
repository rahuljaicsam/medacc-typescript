import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataAnalytics = () => (
  <SubsidiaryLayout
    title="Data Analytics"
    subtitle="Tool Kit"
    description="Advanced analytics tools and dashboards to help you make data-driven decisions and track key performance indicators."
    icon={BarChart3}
    color="text-indigo-500"
    bg="bg-indigo-50"
    textColor="text-indigo-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Patient Outcomes</h3>
          <p className="text-slate-600">Visualize treatment efficacy and patient recovery trends with comprehensive reporting tools.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Business Intelligence</h3>
          <p className="text-slate-600">Monitor clinic performance, revenue growth, and operational efficiency in real-time.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
            <PieChart className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Predictive Modeling</h3>
          <p className="text-slate-600">Leverage AI to forecast patient demand and optimize resource allocation.</p>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Unlock Your Data's Potential</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Transform raw data into actionable insights that drive your healthcare organization forward.</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl">
          Explore Analytics
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default DataAnalytics;

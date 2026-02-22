import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Palette, Smartphone, Layout, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UXUIDesign = () => (
  <SubsidiaryLayout
    title="UX-UI Design"
    subtitle="Templates for Founders"
    description="Professional design templates and UI/UX services to help healthcare startups create intuitive and engaging user experiences."
    icon={Palette}
    color="text-pink-500"
    bg="bg-pink-50"
    textColor="text-pink-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
            <Smartphone className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile-First Design</h3>
          <p className="text-slate-600">Responsive and mobile-optimized designs ensuring seamless access for patients and providers on the go.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
            <Layout className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Ready-to-Use Templates</h3>
          <p className="text-slate-600">Accelerate your launch with our library of pre-built UI kits specifically crafted for health tech applications.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
            <PenTool className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Branding</h3>
          <p className="text-slate-600">Stand out with unique branding and visual identity design services tailored to your company's mission.</p>
        </div>
      </div>

      <div className="bg-pink-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Design That Cares</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Create user experiences that build trust and engagement with your patients.</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-xl">
          Browse Templates
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default UXUIDesign;

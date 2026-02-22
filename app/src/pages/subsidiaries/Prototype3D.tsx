import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Box, Printer, Scan, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Prototype3D = () => (
  <SubsidiaryLayout
    title="3D Prototype"
    subtitle="Template Kit"
    description="Rapid prototyping tools and 3D modeling templates to bring your medical device concepts to life quickly and effectively."
    icon={Box}
    color="text-purple-500"
    bg="bg-purple-50"
    textColor="text-purple-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Printer className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">3D Printing Services</h3>
          <p className="text-slate-600">High-quality 3D printing services for creating tangible models of your medical device prototypes.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Scan className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">CAD Modeling</h3>
          <p className="text-slate-600">Expert CAD design and modeling services to transform your sketches into precise digital prototypes.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <FileCode className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Template Library</h3>
          <p className="text-slate-600">Access a library of pre-designed 3D models and components to speed up your prototyping process.</p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">From Concept to Reality</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Visualize and test your medical innovations with our advanced prototyping solutions.</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl">
          Start Prototyping
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default Prototype3D;

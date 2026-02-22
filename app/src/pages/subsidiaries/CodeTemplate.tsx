import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Code, Terminal, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodeTemplate = () => (
  <SubsidiaryLayout
    title="Code Template"
    subtitle="Tool Kit for Founders"
    description="Pre-built code templates and starter kits for healthcare applications, ensuring best practices and faster development cycles."
    icon={Code}
    color="text-cyan-500"
    bg="bg-cyan-50"
    textColor="text-cyan-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Frontend Starters</h3>
          <p className="text-slate-600">React and Next.js boilerplates pre-configured with Tailwind CSS, authentication, and healthcare-specific UI components.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
            <Server className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Backend Services</h3>
          <p className="text-slate-600">Secure API templates (Node.js, Python) with HIPAA-compliant data handling patterns built-in.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Database Schemas</h3>
          <p className="text-slate-600">Optimized database models for patient records, appointments, and medical data storage.</p>
        </div>
      </div>

      <div className="bg-cyan-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Code Faster, Scale Better</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Skip the boilerplate and focus on building unique features for your health tech product.</p>
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
          Get Templates
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default CodeTemplate;

import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Search, UserCheck, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TalentFinder = () => (
  <SubsidiaryLayout
    title="Talent Finder"
    subtitle="Best in Biotech"
    description="A dedicated platform to connect healthcare startups with top-tier talent in biotechnology, medicine, and engineering."
    icon={Search}
    color="text-violet-500"
    bg="bg-violet-50"
    textColor="text-violet-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <UserCheck className="w-6 h-6 text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Vetted Professionals</h3>
          <p className="text-slate-600">Access a curated pool of pre-screened candidates with verified credentials in healthcare and life sciences.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Specialized Roles</h3>
          <p className="text-slate-600">Find experts for niche roles like bioinformatics, clinical trial management, and regulatory affairs.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Executive Search</h3>
          <p className="text-slate-600">Headhunting services to help you find the perfect Chief Medical Officer (CMO) or CTO for your startup.</p>
        </div>
      </div>

      <div className="bg-violet-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Build Your Dream Team</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">The right team is your most valuable asset. Find the talent that will drive your vision forward.</p>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-xl">
          Find Talent
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default TalentFinder;

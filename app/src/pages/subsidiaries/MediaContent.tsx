import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Video, Film, Mic, PlaySquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MediaContent = () => (
  <SubsidiaryLayout
    title="Media Content"
    subtitle="Custom for Founders"
    description="High-quality media production services, including video, animation, and content creation, tailored for healthcare branding."
    icon={Video}
    color="text-orange-500"
    bg="bg-orange-50"
    textColor="text-orange-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <Film className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Video Production</h3>
          <p className="text-slate-600">Professional video shoots for clinic tours, doctor interviews, and patient testimonials.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <PlaySquare className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Medical Animation</h3>
          <p className="text-slate-600">3D and 2D animations to explain complex medical procedures and device mechanisms clearly.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <Mic className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Podcasts & Audio</h3>
          <p className="text-slate-600">Full-service podcast production to establish thought leadership in the healthcare community.</p>
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tell Your Story</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Engage your audience with compelling visual and audio content that resonates.</p>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl">
          Start Creating
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default MediaContent;

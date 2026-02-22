import SubsidiaryLayout from '@/components/SubsidiaryLayout';
import { Users, MessagesSquare, Calendar, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Networking = () => (
  <SubsidiaryLayout
    title="Networking"
    subtitle="Community for Founders"
    description="Connect with like-minded entrepreneurs, share insights, and build valuable relationships within the healthcare ecosystem."
    icon={Users}
    color="text-blue-500"
    bg="bg-blue-50"
    textColor="text-blue-600"
  >
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <MessagesSquare className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Exclusive Forums</h3>
          <p className="text-slate-600">Participate in private discussions, seek advice, and share your startup journey with a verified community of founders.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Founder Events</h3>
          <p className="text-slate-600">Get access to exclusive networking events, webinars, and meetups with industry leaders and investors.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Handshake className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Mentor Matching</h3>
          <p className="text-slate-600">Find experienced mentors who can guide you through the challenges of building a healthcare startup.</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Join the Community</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Become part of a thriving ecosystem of healthcare innovators and entrepreneurs.</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
          Join Network
        </Button>
      </div>
    </div>
  </SubsidiaryLayout>
);

export default Networking;

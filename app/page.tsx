import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import PropertyGrid from '@/components/PropertyGrid';
import PropertyDetails from '@/components/PropertyDetails';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      <Navbar />
      <div className="flex-1 flex overflow-hidden max-w-[1700px] mx-auto w-full p-8 gap-10">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pb-8 scrollbar-hide pr-2">
          <PropertyGrid />
        </main>
        <aside className="w-[440px] flex-shrink-0 overflow-y-auto bg-white rounded-3xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100/30 h-[calc(100vh-120px)] sticky top-8 scrollbar-hide">
          <PropertyDetails />
        </aside>
      </div>
    </div>
  );
}

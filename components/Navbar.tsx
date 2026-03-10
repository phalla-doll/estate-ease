import { Search, MessageSquare, Bell, ChevronDown, X, Home } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="bg-slate-900 text-white p-2.5 rounded-lg">
          <Home size={22} />
        </div>
        <span className="text-xl font-medium tracking-tight">EstateEase</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
        <a href="#" className="text-blue-600 bg-blue-50 px-5 py-2 rounded-md font-medium">Buy</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Rent</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Favorites</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Help</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Services</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Blog</a>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-4 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search Anything..." 
            className="pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200 w-72 transition-all"
          />
          <button className="absolute right-4 text-slate-400 hover:text-slate-600">
            <X size={16} />
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2.5 border border-slate-100 rounded-md hover:bg-slate-50 transition-colors text-slate-600">
            <MessageSquare size={18} />
          </button>
          <button className="p-2.5 border border-slate-100 rounded-md hover:bg-slate-50 transition-colors text-slate-600 relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-3 ml-2 pl-5 border-l border-slate-100 cursor-pointer hover:opacity-80 transition-opacity">
          <Image src="https://picsum.photos/seed/user/40/40" alt="User" width={40} height={40} className="rounded-md object-cover" referrerPolicy="no-referrer" />
          <div className="hidden xl:block">
            <p className="text-sm font-medium text-slate-900">John Doe</p>
            <p className="text-xs text-slate-500">doe@gmail.com</p>
          </div>
          <ChevronDown size={16} className="text-slate-400 ml-1" />
        </div>
      </div>
    </nav>
  );
}

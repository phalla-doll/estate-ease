import { MapPin, Banknote, LayoutGrid, Home, Layers, X } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-fit">
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <h2 className="text-[16px] font-medium text-slate-900 tracking-tight">Custom Filter</h2>
        <button className="text-[13px] text-blue-600 font-medium hover:text-blue-700 transition-colors">Clear all</button>
      </div>

      {/* Location */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between bg-[#F8F9FA] px-4 py-2.5 rounded-full border border-slate-100 mb-5">
          <div className="flex items-center gap-3 text-slate-700">
            <MapPin size={16} className="text-slate-500" />
            <span className="text-[14px] font-medium">Location</span>
          </div>
          <button className="w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-sm transition-colors">
            <X size={14} />
          </button>
        </div>
        <div className="space-y-3.5 px-1">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Jakarta, Indonesia</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Semarang, Indonesia</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between bg-[#F8F9FA] px-4 py-2.5 rounded-full border border-slate-100 mb-5">
          <div className="flex items-center gap-3 text-slate-700">
            <Banknote size={16} className="text-slate-500" />
            <span className="text-[14px] font-medium">Price Range</span>
          </div>
          <button className="w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-sm transition-colors">
            <X size={14} />
          </button>
        </div>
        <div className="space-y-3.5 px-1">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Under $1,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">$1,000 - $15,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">More Than $15,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Custom</span>
          </label>
          
          <div className="pt-3 pb-1">
            <div className="flex justify-between text-xs text-slate-400 mb-2.5 font-medium">
              <span>$10K</span>
              <span>$50K</span>
            </div>
            <div className="relative h-1 bg-slate-100 rounded-full">
              <div className="absolute left-1/4 right-1/4 h-full bg-blue-600 rounded-full"></div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-blue-600 border-2 border-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-blue-600 border-2 border-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Land Area */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between bg-[#F8F9FA] px-4 py-2.5 rounded-full border border-slate-100 mb-5">
          <div className="flex items-center gap-3 text-slate-700">
            <LayoutGrid size={16} className="text-slate-500" />
            <span className="text-[14px] font-medium">Land Area</span>
          </div>
          <button className="w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-sm transition-colors">
            <X size={14} />
          </button>
        </div>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input type="text" placeholder="Min" className="w-full bg-white border border-slate-200 rounded-full py-2 pl-4 pr-10 text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400">sq ft</span>
          </div>
          <div className="relative flex-1">
            <input type="text" placeholder="Max" className="w-full bg-white border border-slate-200 rounded-full py-2 pl-4 pr-10 text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400">sq ft</span>
          </div>
        </div>
      </div>

      {/* Type Of Place */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between bg-[#F8F9FA] px-4 py-2.5 rounded-full border border-slate-100 mb-5">
          <div className="flex items-center gap-3 text-slate-700">
            <Home size={16} className="text-slate-500" />
            <span className="text-[14px] font-medium">Type Of Place</span>
          </div>
          <button className="w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-sm transition-colors">
            <X size={14} />
          </button>
        </div>
        <div className="space-y-3.5 px-1">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Single Family Home</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Condo/Townhouse</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Apartment</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Bungalow</span>
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div className="p-5">
        <div className="flex items-center justify-between bg-[#F8F9FA] px-4 py-2.5 rounded-full border border-slate-100 mb-5">
          <div className="flex items-center gap-3 text-slate-700">
            <Layers size={16} className="text-slate-500" />
            <span className="text-[14px] font-medium">Amenities</span>
          </div>
          <button className="w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-sm transition-colors">
            <X size={14} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button className="px-5 py-2 bg-blue-600 text-white text-[14px] rounded-full font-medium hover:bg-blue-700 transition-colors">Garden</button>
          <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-[14px] rounded-full font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">Gym</button>
          <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-[14px] rounded-full font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">Garage</button>
        </div>
      </div>
    </div>
  );
}

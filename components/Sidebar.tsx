import { MapPin, Banknote, LayoutGrid, Home, Layers, X } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-[280px] flex-shrink-0 flex flex-col gap-6">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">Custom Filter</h2>
        <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors">Clear all</button>
      </div>

      {/* Location */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100/50">
          <div className="flex items-center gap-3 text-slate-700">
            <MapPin size={18} className="text-slate-400" />
            <span className="text-[15px] font-medium">Location</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="space-y-3 px-2">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-blue-600 rounded bg-blue-600 checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Jakarta, Indonesia</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Semarang, Indonesia</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100/50">
          <div className="flex items-center gap-3 text-slate-700">
            <Banknote size={18} className="text-slate-400" />
            <span className="text-[15px] font-medium">Price Range</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="space-y-3 px-2">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Under $1,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">$1,000 - $15,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">More Than $15,000</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-full bg-white checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Custom</span>
          </label>
          
          <div className="pt-4 px-2 pb-2">
            <div className="flex justify-between text-xs text-slate-500 mb-3 font-semibold px-1">
              <span>$10K</span>
              <span>$50K</span>
            </div>
            <div className="relative h-1.5 bg-slate-200 rounded-full">
              <div className="absolute left-1/4 right-1/4 h-full bg-blue-600 rounded-full"></div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 border-[3px] border-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 border-[3px] border-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Land Area */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100/50">
          <div className="flex items-center gap-3 text-slate-700">
            <LayoutGrid size={18} className="text-slate-400" />
            <span className="text-[15px] font-medium">Land Area</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-3 px-1">
          <div className="relative flex-1">
            <input type="text" placeholder="Min" className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-[15px] font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">sq ft</span>
          </div>
          <div className="relative flex-1">
            <input type="text" placeholder="Max" className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-[15px] font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">sq ft</span>
          </div>
        </div>
      </div>

      {/* Type Of Place */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100/50">
          <div className="flex items-center gap-3 text-slate-700">
            <Home size={18} className="text-slate-400" />
            <span className="text-[15px] font-medium">Type Of Place</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="space-y-3 px-2">
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-blue-600 rounded bg-blue-600 checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Single Family Home</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Condo/Townhouse</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-blue-600 rounded bg-blue-600 checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" defaultChecked />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Apartment</span>
          </label>
          <label className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[15px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Bungalow</span>
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100/50">
          <div className="flex items-center gap-3 text-slate-700">
            <Layers size={18} className="text-slate-400" />
            <span className="text-[15px] font-medium">Amenities</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2.5 px-1">
          <button className="px-5 py-2.5 bg-blue-600 text-white text-[15px] rounded-full font-semibold shadow-sm hover:bg-blue-700 transition-colors">Garden</button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-[15px] rounded-full font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors">Gym</button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-[15px] rounded-full font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors">Garage</button>
        </div>
      </div>
    </div>
  );
}

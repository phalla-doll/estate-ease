import Image from 'next/image';
import { MapPin, Bed, Bath, Maximize, Car, DoorOpen, Utensils } from 'lucide-react';

export default function PropertyDetails() {
  return (
    <div className="flex flex-col h-full">
      {/* Images */}
      <div className="grid grid-cols-3 gap-3.5 mb-8">
        <div className="col-span-2 relative h-[240px] rounded-xl overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/house3/600/400" 
            alt="Main" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-3.5">
          <div className="relative flex-1 rounded-xl overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/room1/300/200" 
              alt="Room 1" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative flex-1 rounded-xl overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/room2/300/200" 
              alt="Room 2" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-[24px] font-medium text-slate-900 tracking-tight">Midnight Ridge Villa</h2>
          <div className="flex items-center text-slate-500 text-[15px] font-medium mt-2.5">
            <MapPin size={16} className="mr-1.5 text-blue-600" />
            440 Thamrin Jakarta, Indonesia
          </div>
        </div>
        <div className="text-right">
          <div className="font-medium text-[26px] text-slate-900 tracking-tight">$ 452.00<span className="text-[15px] font-medium text-slate-400">/month</span></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 mb-8">
        <button className="flex-1 pb-3.5 text-[15px] font-medium text-slate-900 border-b-2 border-blue-600">Overview</button>
        <button className="flex-1 pb-3.5 text-[15px] font-medium text-slate-400 hover:text-slate-600 transition-colors">Reviews</button>
        <button className="flex-1 pb-3.5 text-[15px] font-medium text-slate-400 hover:text-slate-600 transition-colors">About</button>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-[16px] font-medium text-slate-900 mb-3.5">Description :</h3>
        <p className="text-[14.5px] text-slate-500 leading-relaxed font-medium">
          Welcome to Midnight Ridge Villa 🏡 Experience a peaceful escape at Midnight Ridge Villa, a modern retreat set on a quiet hillside with stunning views of valleys and starry nights.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-3.5 mb-10">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <DoorOpen size={18} className="text-slate-400" /> 6 Rooms
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <Bed size={18} className="text-slate-400" /> 4 Beds
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <Bath size={18} className="text-slate-400" /> 2 Baths
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <Utensils size={18} className="text-slate-400" /> 2 Kitchen
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <Maximize size={18} className="text-slate-400" /> 2.820 sqft
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100/50 rounded-lg text-[14.5px] text-slate-700 font-medium">
          <Car size={18} className="text-slate-400" /> 1 Garage
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 py-3.5 bg-blue-50 text-blue-600 font-medium text-[15px] rounded-lg hover:bg-blue-100 transition-colors">
          Contact Agent
        </button>
        <button className="flex-1 py-3.5 bg-blue-600 text-white font-medium text-[15px] rounded-lg hover:bg-blue-700 transition-colors">
          Order Now
        </button>
      </div>

      {/* Map */}
      <div className="relative h-[200px] rounded-xl overflow-hidden mt-auto border border-slate-100">
        <Image 
          src="https://picsum.photos/seed/map/600/300" 
          alt="Map" 
          fill 
          className="object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        {/* Map overlay elements to simulate the UI */}
        <div className="absolute inset-0 bg-slate-50/40 backdrop-blur-[1px]"></div>
        
        {/* Map Pins */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="absolute top-1/4 right-1/5 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>

        {/* Selected Map Pin Info */}
        <div className="absolute top-[30%] left-[30%] bg-white p-2.5 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center gap-3 max-w-[220px] border border-slate-100">
          <div className="relative w-12 h-10 rounded-md overflow-hidden flex-shrink-0">
            <Image src="https://picsum.photos/seed/house3/100/80" alt="Thumb" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="min-w-0 pr-2">
            <p className="text-[11px] font-medium text-slate-900 truncate tracking-tight">Midnight Ridge Villa</p>
            <p className="text-[9px] font-medium text-slate-500 truncate mt-0.5">440 Thamrin Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { MapPin, Star, Bookmark } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Dream House Reality',
    location: 'Evergreen 14 Jakarta, Indonesia',
    price: 367.00,
    rating: 4.9,
    reviews: 5,
    type: 'Home',
    image: 'https://picsum.photos/seed/house1/600/400',
    active: false,
  },
  {
    id: 2,
    title: 'Atap Langit Homes',
    location: 'Edelweis City Jakarta, Indonesia',
    price: 278.00,
    rating: 4.7,
    reviews: 5,
    type: 'Apartment',
    image: 'https://picsum.photos/seed/house2/600/400',
    active: false,
  },
  {
    id: 3,
    title: 'Midnight Ridge Villa',
    location: '440 Thamrin Jakarta, Indonesia',
    price: 452.00,
    rating: 4.8,
    reviews: 5,
    type: 'Villa',
    image: 'https://picsum.photos/seed/house3/600/400',
    active: true,
  },
  {
    id: 4,
    title: 'Unity Urban Homes',
    location: 'Forest City Jakarta, Indonesia',
    price: 278.00,
    rating: 4.7,
    reviews: 5,
    type: 'Home',
    image: 'https://picsum.photos/seed/house4/600/400',
    active: false,
  },
  {
    id: 5,
    title: 'Dream House',
    location: 'Evergreen 15 Jakarta, Indonesia',
    price: 367.00,
    rating: 4.9,
    reviews: 5,
    type: 'Apartment',
    image: 'https://picsum.photos/seed/house5/600/400',
    active: false,
  },
  {
    id: 6,
    title: 'Lalaland Thick Villa',
    location: 'Forest Land Jakarta, Indonesia',
    price: 278.00,
    rating: 4.7,
    reviews: 5,
    type: 'Villa',
    image: 'https://picsum.photos/seed/house6/600/400',
    active: false,
  },
];

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {properties.map((property) => (
        <div 
          key={property.id} 
          className={`bg-white rounded-3xl overflow-hidden shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${property.active ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-100'}`}
        >
          <div className="relative h-[220px] w-full p-3.5">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src={property.image} 
                alt={property.title} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-slate-700 shadow-sm">
                {property.type}
              </div>
            </div>
          </div>
          
          <div className="p-5 pt-2">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-[19px] tracking-tight">{property.title}</h3>
                <div className="flex items-center text-slate-500 text-[13px] font-medium mt-1.5">
                  <MapPin size={14} className="mr-1.5 text-blue-600" />
                  {property.location}
                </div>
              </div>
              <button className={`p-2.5 rounded-full transition-colors ${property.active ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                <Bookmark size={18} className={property.active ? 'fill-current' : ''} />
              </button>
            </div>
            
            <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-100/80">
              <div className="font-bold text-[22px] text-slate-900 tracking-tight">
                $ {property.price.toFixed(2)}<span className="text-[14px] font-medium text-slate-400">/month</span>
              </div>
              <div className="flex items-center gap-1.5 text-[14px] font-bold text-slate-700">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                {property.rating}<span className="text-slate-400 font-medium">/{property.reviews}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

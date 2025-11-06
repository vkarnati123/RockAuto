import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredItems = [
  {
    id: 1,
    title: 'Premium Brake Kits',
    description: 'Up to 30% off',
    image: 'https://images.unsplash.com/photo-1750019487267-47568f388dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHBhZHN8ZW58MXx8fHwxNzYwNzgzMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgColor: '#e8f4f8',
  },
  {
    id: 2,
    title: 'Engine Components',
    description: 'Performance Upgrades',
    image: 'https://images.unsplash.com/photo-1758381358962-efc41be53986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBwYXJ0c3xlbnwxfHx8fDE3NjA5MDcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgColor: '#f8e8e8',
  },
  {
    id: 3,
    title: 'Suspension Systems',
    description: 'Smooth Ride Guaranteed',
    image: 'https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdXNwZW5zaW9ufGVufDF8fHx8MTc2MDkwNzE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgColor: '#e8f8e8',
  },
  {
    id: 4,
    title: 'Premium Batteries',
    description: 'Long-lasting Power',
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc2MDgyODg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgColor: '#f8f8e8',
  },
  {
    id: 5,
    title: 'Oil Filters & More',
    description: 'Quality Maintenance',
    image: 'https://images.unsplash.com/photo-1657644049321-4c3aa2e8aba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzYwOTA3MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgColor: '#f0e8f8',
  },
];

export function FeaturedCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5;

  const handleNext = () => {
    if (startIndex + itemsToShow < featuredItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = featuredItems.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative">
      {/* Divider line above */}
      <div className="h-[3px] bg-[#6366f1] mb-8 rounded-full" style={{ width: '498px' }} />

      <div className="flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="shrink-0 p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8 rotate-0 text-gray-700" />
        </button>

        {/* Carousel Items */}
        <div className="flex gap-6 flex-1 overflow-hidden">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="w-[280px] h-[120px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all cursor-pointer flex-shrink-0"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white mb-1">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= featuredItems.length}
          className="shrink-0 p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Divider line below */}
      <div className="h-[3px] bg-[#6366f1] mt-8 rounded-full" style={{ width: '498px' }} />
    </div>
  );
}

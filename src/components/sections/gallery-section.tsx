'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryItems, projectDetails } from '@/data/portfolio-data';
import { ImageModal } from '@/components/ui/image-modal';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    category: string;
    projectDetails?: any;
  } | null>(null);

  // Get unique categories
  const categories = [
    'All',
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  // Filter items based on active category
  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Handle image click with project details
  const handleImageClick = (item: any) => {
    setSelectedImage({
      url: item.image,
      title: item.title,
      category: item.category,
      projectDetails: projectDetails[item.title as keyof typeof projectDetails],
    });
  };

  return (
    <section id='gallery' className='py-20 bg-[#17171a]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Gallery
        </h2>

        {/* Category filters */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all
                ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white/80'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='relative group overflow-hidden rounded-lg bg-[#121210] border border-white/10 cursor-pointer'
              onClick={() => handleImageClick(item)}
            >
              <div className='aspect-video relative overflow-hidden'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                <div className='p-4'>
                  <h3 className='text-lg font-medium text-white'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-white/70'>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal with Project Details */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.title || ''}
        category={selectedImage?.category || ''}
        projectDetails={selectedImage?.projectDetails}
      />
    </section>
  );
}

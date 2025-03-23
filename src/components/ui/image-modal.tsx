'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  title,
}: ImageModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
      onClick={onClose}
    >
      <div
        className='relative max-w-4xl w-full bg-[#121210] rounded-lg overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors'
          onClick={onClose}
        >
          <X className='h-6 w-6' />
        </button>

        <div className='relative w-full h-[80vh]'>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            fill
            className='object-contain'
          />
        </div>

        <div className='p-4 bg-[#121210]'>
          <h3 className='text-lg font-medium text-white'>{title}</h3>
        </div>
      </div>
    </div>
  );
}

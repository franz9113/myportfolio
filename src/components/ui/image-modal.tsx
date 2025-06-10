'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Award, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  category?: string;
  projectDetails?: {
    role?: string;
    tools?: string[];
    year?: string;
    overview?: string;
    contribution?: string;
    challenges?: string;
    links?: Array<{ label: string; url: string }>;
  };
}

export function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  category,
  projectDetails,
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

  // Check if we have meaningful project details
  const hasProjectDetails =
    projectDetails &&
    (projectDetails.role ||
      projectDetails.overview ||
      projectDetails.contribution ||
      projectDetails.challenges ||
      (projectDetails.tools && projectDetails.tools.length > 0) ||
      (projectDetails.links && projectDetails.links.length > 0));

  // Get category icon and info
  const getCategoryInfo = (cat: string) => {
    switch (cat) {
      case 'Certificates':
        return {
          icon: <Award className='h-16 w-16 text-primary mx-auto mb-4' />,
          badge: 'Certificate',
          description:
            'This certificate represents a significant milestone in my professional development and technical expertise.',
          note: 'Click and zoom on the image to view the certificate details and verification information.',
        };
      case 'Mobile Application':
        return {
          icon: <Smartphone className='h-16 w-16 text-primary mx-auto mb-4' />,
          badge: 'Mobile App',
          description:
            'This mobile application showcases my skills in mobile development and user interface design.',
          note: 'Detailed project information will be added soon. Feel free to contact me for more details about this project.',
        };
      case 'Web Development':
        return {
          icon: <Globe className='h-16 w-16 text-primary mx-auto mb-4' />,
          badge: 'Web Project',
          description:
            'This web development project demonstrates my expertise in creating responsive and functional web applications.',
          note: 'Detailed project information will be added soon. Feel free to contact me for more details about this project.',
        };
      case 'Software Development':
        return {
          icon: <Code className='h-16 w-16 text-primary mx-auto mb-4' />,
          badge: 'Software Project',
          description:
            'This software development project highlights my problem-solving skills and technical expertise.',
          note: 'Detailed project information will be added soon. Feel free to contact me for more details about this project.',
        };
      default:
        return {
          icon: <Code className='h-16 w-16 text-primary mx-auto mb-4' />,
          badge: 'Project',
          description:
            'This project showcases my technical skills and creative problem-solving abilities.',
          note: 'Detailed project information will be added soon. Feel free to contact me for more details about this project.',
        };
    }
  };

  const categoryInfo = getCategoryInfo(category || '');

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
      onClick={onClose}
    >
      <div
        className='relative max-w-5xl w-full bg-[#121210] rounded-lg overflow-hidden max-h-[90vh] flex flex-col'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors'
          onClick={onClose}
        >
          <X className='h-6 w-6' />
        </button>

        <div className='grid md:grid-cols-2 gap-0'>
          {/* Image Section */}
          <div className='relative w-full h-[40vh] md:h-[60vh]'>
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={title}
              fill
              className='object-contain'
            />
          </div>

          {/* Details Section */}
          <div className='p-6 overflow-y-auto max-h-[60vh] bg-[#17171a]'>
            {hasProjectDetails ? (
              // Project Details Layout
              <>
                <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>

                {projectDetails.year && (
                  <p className='text-sm text-muted-foreground mb-4'>
                    Year: {projectDetails.year}
                  </p>
                )}

                {projectDetails.role && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-primary mb-1'>
                      Role
                    </h4>
                    <p className='text-sm'>{projectDetails.role}</p>
                  </div>
                )}

                {projectDetails.tools && projectDetails.tools.length > 0 && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-primary mb-1'>
                      Tools
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {projectDetails.tools.map((tool, index) => (
                        <Badge
                          key={index}
                          variant='secondary'
                          className='text-xs'
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {projectDetails.overview && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-primary mb-1'>
                      Overview
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {projectDetails.overview}
                    </p>
                  </div>
                )}

                {projectDetails.contribution && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-primary mb-1'>
                      My Contribution
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {projectDetails.contribution}
                    </p>
                  </div>
                )}

                {projectDetails.challenges && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-primary mb-1'>
                      Challenges & Outcomes
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {projectDetails.challenges}
                    </p>
                  </div>
                )}

                {projectDetails.links && projectDetails.links.length > 0 && (
                  <div className='mt-6'>
                    <Separator className='mb-4' />
                    <div className='flex flex-wrap gap-2'>
                      {projectDetails.links.map((link, index) => (
                        <Button
                          key={index}
                          variant='outline'
                          size='sm'
                          className='text-xs'
                          asChild
                        >
                          <a
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-3 w-3 mr-1' />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Category-specific Layout for items without project details
              <div className='flex flex-col items-center justify-center h-full text-center'>
                <div className='mb-6'>
                  {categoryInfo.icon}
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {title}
                  </h3>
                  <Badge
                    variant='outline'
                    className='text-primary border-primary'
                  >
                    {categoryInfo.badge}
                  </Badge>
                </div>

                <div className='space-y-4 text-muted-foreground'>
                  <p className='text-sm'>{categoryInfo.description}</p>
                  <p className='text-sm'>{categoryInfo.note}</p>
                </div>

                <div className='mt-8 p-4 bg-[#121210] rounded-lg border border-primary/20'>
                  <p className='text-xs text-muted-foreground'>
                    <span className='text-primary font-medium'>Category:</span>{' '}
                    {category}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';

export function AboutSection() {
  return (
    <section id='about' className='py-20 bg-[#17171a]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About Me
        </h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center overflow-hidden'>
            {personalInfo.profileImage ? (
              <Image
                src={personalInfo.profileImage || '/placeholder.svg'}
                alt={personalInfo.name}
                width={300}
                height={300}
                className='rounded-full object-cover'
              />
            ) : (
              <div className='h-32 w-32 text-primary'>FJ</div>
            )}
          </div>
          <div>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className='text-lg mb-6 text-muted-foreground'>
                {paragraph}
              </p>
            ))}
            <div className='flex gap-4'>
              {/* <Button variant='outline' size='icon' asChild>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-5 w-5' />
                </a>
              </Button> */}
              <Button variant='outline' size='icon' asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className='h-5 w-5' />
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

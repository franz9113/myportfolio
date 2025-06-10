import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';

export function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-[#121210]'>
      <div className='container mx-auto px-4 max-w-3xl text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Get In Touch</h2>

        <p className='text-lg text-muted-foreground mb-10 max-w-2xl mx-auto'>
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll do my best to get back to
          you!
        </p>

        {/* Social Icons */}
        <div className='flex justify-center gap-4 mb-10'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full h-12 w-12'
            asChild
          >
            <a href={`mailto:${personalInfo.email}`} aria-label='Email'>
              <Mail className='h-5 w-5' />
            </a>
          </Button>

          {/* <Button
            variant='outline'
            size='icon'
            className='rounded-full h-12 w-12'
            asChild
          >
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </a>
          </Button> */}

          <Button
            variant='outline'
            size='icon'
            className='rounded-full h-12 w-12'
            asChild
          >
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-5 w-5' />
            </a>
          </Button>
        </div>

        {/* Email Button */}
        <Button size='lg' className='px-8' asChild>
          <a href={`mailto:${personalInfo.email}`}>Send me an email</a>
        </Button>
      </div>
    </section>
  );
}

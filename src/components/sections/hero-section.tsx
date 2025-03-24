import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalInfo } from '@/data/portfolio-data';

export function HeroSection() {
  return (
    <section className='container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center'>
      <Badge className='mb-4'>Available for hire</Badge>
      <h1 className='text-4xl md:text-6xl font-bold mb-6'>
        Hi, I&apos;m{' '}
        <span className='text-primary'>{personalInfo.name.split(' ')[0]}</span>
        <br />
        {personalInfo.role}
      </h1>
      <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mb-8'>
        I build responsive, accessible web applications with modern technologies
      </p>
      <div className='flex gap-4'>
        <Button size='lg'>
          View My Work
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
        <Button variant='outline' size='lg'>
          Contact Me
        </Button>
      </div>
    </section>
  );
}

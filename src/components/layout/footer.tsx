import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className='py-8 border-t border-white/10 bg-[#17171a]'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-muted-foreground'>
          © {new Date().getFullYear()} Junior Developer Portfolio. All rights
          reserved.
        </p>
        <div className='flex justify-center gap-4 mt-4'>
          {/* <Button variant='ghost' size='icon'>
            <Github className='h-5 w-5' />
          </Button> */}
          <Button variant='ghost' size='icon'>
            <Mail className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon'>
            <Linkedin className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </footer>
  );
}

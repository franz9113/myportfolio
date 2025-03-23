import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolio-data';

export function ProjectsSection() {
  return (
    <section id='projects' className='py-20 bg-[#17171a]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My Projects
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='bg-[#121210] border-white/10 overflow-hidden flex flex-col'
            >
              <div className='h-48 relative overflow-hidden'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className='text-muted-foreground'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-wrap gap-2'>
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant='secondary'>
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className='mt-auto flex gap-2'>
                <Button variant='outline' size='sm' className='flex-1' asChild>
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Demo
                  </a>
                </Button>
                <Button variant='outline' size='sm' className='flex-1' asChild>
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='mr-2 h-4 w-4' />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

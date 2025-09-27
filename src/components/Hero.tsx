import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBackground from '@/assets/herobgm.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-section absolute inset-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-left max-w-4xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 transition-bounce">
              <span className="gradient-text" >AKIB</span>
              <br />
              <span className="text-foreground" style={{color:'black'}} >KITTUR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl">
  Passionate about creating innovative solutions and building scalable applications 
  with modern technologies
</p>

          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth px-8 py-3"
            >
              View My Projects
            </Button>
           <Button
  variant="outline"
  size="lg"
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/akresume.pdf"; // Make sure the file is in public/
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="mr-2 h-5 w-5" />
  Download Resume
</Button>

          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
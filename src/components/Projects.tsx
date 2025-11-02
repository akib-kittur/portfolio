import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Astute - Real time monitoring system",
      description: "Advanced real-time monitoring system with live data visualization, automated alerts, and comprehensive analytics dashboard for system performance tracking.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/akib-kittur/hackvyuha-21",
      demo: "https://github.com/akib-kittur/hackvyuha-21",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Study spark - AI support study materials",
      description: "AI-powered educational platform that generates personalized study materials, practice questions, and learning paths tailored to individual student needs.",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      github: "https://github.com/akib-kittur/study-spark-ai-32",
      demo: "https://github.com/akib-kittur/study-spark-ai-32",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop"
    },
    {
      title: "Set-Time: Watches branded website",
      description: "Elegant e-commerce website for luxury watch brands featuring product catalogs, detailed specifications, and seamless shopping experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
      github: "https://github.com/akib-kittur/Set-time",
      demo: "https://github.com/akib-kittur/Set-time",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=250&fit=crop"
    },
    {
      title: "Plant disease detection - Using Python ML AI",
      description: "Machine learning application for detecting plant diseases through image analysis, helping farmers identify and treat crop issues early.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Scikit-learn"],
      github: "https://github.com/akib-kittur/Plant_disease_detection",
      demo: "https://github.com/akib-kittur/Plant_disease_detection",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in 
            full-stack development, mobile apps, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden hover:scale-105 transition-bounce group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
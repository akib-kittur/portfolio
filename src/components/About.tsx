import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, techs: ['React', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Backend', icon: Database, techs: ['Node.js', 'Python', 'Express', 'MongoDB'] },
    { category: 'Tools', icon: Code, techs: ['Git', 'AWS', 'Figma'] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enthusiastic and motivated fresher with expertise in MERN stack, AI, Python and data science. Seeking a challenging 
role in a dynamic organization to apply my technical skills in developing innovative software solutions. Eager to 
contribute to meaningful projects while continuously learning and growing professionally
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
             Final-year BCA student with hands-on experience in full-stack development using the MERN stack. Achieved recognition through multiple certifications in coding contests and successful participation in various inter-college hackathons. Adept at building scalable web applications, problem-solving, and working in collaborative environments. Actively seeking opportunities to apply technical expertise and contribute to innovative projects in the IT industry.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly learning new technologies and best practices, with a particular 
              interest in Software Development, cloud computing, and devops.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">What I Do</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
               Develop custom solutions for businesses or startups
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Contribute to software development teams as a full-stack/web developer
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Apply problem-solving skills in technical interviews, internships, or research projects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
               Bring energy, innovation, and coding expertise to projects that need rapid prototyping
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="glass-card border-0 hover:scale-105 transition-bounce">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to 
                say hello, I'd love to hear from you. Drop me a message and I'll get back 
                to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">akibkittur4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 7019431427</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Belagavi, Karnataka</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/akib-kittur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-bounce" />
              </a>
              <a 
                href="https://www.linkedin.com/in/akib-kittur-717396219/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-bounce" />
              </a>
              <a 
                href="akibkittur4@gmail.com"
                className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-bounce" />
              </a>
            </div>
          </div>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="bg-input border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-input border-border focus:border-primary transition-smooth"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project discussion"
                    className="bg-input border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-input border-border focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
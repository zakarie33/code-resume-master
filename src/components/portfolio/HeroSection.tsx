import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full-Stack Software Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating elegant solutions to complex problems. 
                Specialized in modern web technologies and cloud architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-accent transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:scale-110 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional workspace" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "TaskFlow Pro",
    description: "A comprehensive project management platform with real-time collaboration, analytics dashboard, and team productivity tracking.",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    liveDemo: "https://taskflow-pro-demo.com",
    github: "https://github.com/alexchen/taskflow-pro"
  },
  {
    title: "EcoCommerce",
    description: "Sustainable e-commerce platform featuring carbon footprint tracking, eco-friendly product recommendations, and green shipping options.",
    image: project2,
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    liveDemo: "https://ecocommerce-demo.com",
    github: "https://github.com/alexchen/ecocommerce"
  },
  {
    title: "DataViz Analytics",
    description: "Advanced data visualization dashboard for business intelligence with interactive charts, predictive analytics, and automated reporting.",
    image: project3,
    technologies: ["Python", "Django", "D3.js", "Redis", "Docker"],
    liveDemo: "https://dataviz-analytics-demo.com",
    github: "https://github.com/alexchen/dataviz-analytics"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
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
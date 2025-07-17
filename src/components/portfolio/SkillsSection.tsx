import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      "JavaScript", "TypeScript", "Python", "Java", "Go", "SQL", "HTML/CSS"
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Database,
    skills: [
      "React", "Next.js", "Node.js", "Express", "Django", "FastAPI", "Vue.js"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx", "Linux"
    ]
  },
  {
    title: "Tools & Databases",
    icon: Wrench,
    skills: [
      "Git", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "GraphQL", "REST APIs"
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-accent transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
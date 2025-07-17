import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital experiences with clean code and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience 
              building scalable web applications. I love turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me contributing to open-source projects, 
              mentoring junior developers, or exploring the latest tech trends. 
              I believe in writing clean, maintainable code and following best practices.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Bring:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Problem-solving mindset and attention to detail
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Strong communication and collaboration skills
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Continuous learning and adaptation to new technologies
                </li>
              </ul>
            </div>
          </div>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
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
        </div>
      </div>
    </section>
  );
};
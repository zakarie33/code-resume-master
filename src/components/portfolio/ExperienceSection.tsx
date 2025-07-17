import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    duration: "2022 - Present",
    description: "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines reducing deployment time by 60%.",
    achievements: ["Increased system performance by 40%", "Led team of 5 developers", "Implemented automated testing"]
  },
  {
    title: "Software Developer",
    company: "StartupX",
    duration: "2020 - 2022",
    description: "Built scalable web applications using React and Node.js. Collaborated with product teams to deliver features that increased user engagement by 35%.",
    achievements: ["Developed 15+ features", "Reduced bug reports by 50%", "Optimized database queries"]
  },
  {
    title: "Junior Developer",
    company: "WebDev Agency",
    duration: "2019 - 2020",
    description: "Developed responsive websites and web applications for various clients. Gained experience in modern JavaScript frameworks and agile development practices.",
    achievements: ["Delivered 20+ client projects", "100% client satisfaction rate", "Learned full-stack development"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    duration: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude."
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "MongoDB Certified Developer",
  "Certified Kubernetes Administrator"
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary rounded-lg">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-semibold">{edu.school}</p>
                    <Badge variant="outline" className="w-fit">{edu.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive rounded-lg">
                  <Award className="h-5 w-5 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
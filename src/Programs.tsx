import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Code, Database, Bot, Cpu, LineChart, Shield, Cloud, Smartphone, Blocks } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "AI & Machine Learning",
      description: "Master the fundamentals of AI, machine learning algorithms, and deep learning",
      duration: "24 weeks",
      level: "Intermediate",
      price: "$8,999",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["Python", "TensorFlow", "PyTorch", "Neural Networks"],
      category: "ai"
    },
    {
      title: "Full Stack Development",
      description: "Become a complete developer with modern web technologies and frameworks",
      duration: "32 weeks",
      level: "Beginner to Advanced",
      price: "$9,999",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      category: "development"
    },
    {
      title: "Database Management & Big Data",
      description: "Learn to handle large-scale data systems and modern databases",
      duration: "16 weeks",
      level: "Intermediate",
      price: "$6,999",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["SQL", "NoSQL", "Hadoop", "Spark"],
      category: "data"
    },
    {
      title: "ChatBot Development",
      description: "Build intelligent conversational AI systems and chatbots",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$5,999",
      icon: <Bot className="h-6 w-6 text-primary" />,
      skills: ["NLP", "DialogFlow", "RASA", "Bot Framework"],
      category: "ai"
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Master cloud platforms and modern deployment practices",
      duration: "20 weeks",
      level: "Advanced",
      price: "$7,999",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      category: "infrastructure"
    },
    {
      title: "Cybersecurity & AI",
      description: "Learn to implement AI-powered security solutions",
      duration: "28 weeks",
      level: "Advanced",
      price: "$10,999",
      icon: <Shield className="h-6 w-6 text-primary" />,
      skills: ["Security AI", "Threat Detection", "Network Security"],
      category: "security"
    },
    {
      title: "Data Analytics & Visualization",
      description: "Transform data into actionable insights",
      duration: "16 weeks",
      level: "Intermediate",
      price: "$6,499",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      skills: ["Tableau", "Power BI", "Python", "R"],
      category: "data"
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications",
      duration: "20 weeks",
      level: "Intermediate",
      price: "$7,499",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      category: "development"
    },
    {
      title: "Blockchain & Web3",
      description: "Develop decentralized applications and smart contracts",
      duration: "24 weeks",
      level: "Advanced",
      price: "$9,499",
      icon: <Blocks className="h-6 w-6 text-primary" />,
      skills: ["Solidity", "Web3.js", "Smart Contracts"],
      category: "blockchain"
    },
    {
      title: "Edge Computing & IoT",
      description: "Build AI solutions for edge devices and IoT systems",
      duration: "16 weeks",
      level: "Advanced",
      price: "$7,999",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["IoT Protocols", "Edge AI", "Embedded Systems"],
      category: "infrastructure"
    }
  ];


  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  const filterPrograms = (category: string) => {
    if (category === 'all') {
      setFilteredPrograms(programs);
    } else {
      const filtered = programs.filter(program => program.category === category);
      setFilteredPrograms(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground responsive-grid">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Career with Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of technology programs designed to prepare you for the future of tech.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={filterPrograms}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-muted/50">
            {["all", "ai", "development", "data", "infrastructure", "security", "blockchain"].map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {program.icon}
                    </div>
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration: {program.duration}</span>
                      <span className="font-bold text-primary">{program.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button
                    className="w-full"
                    onClick={() => navigate(`/programs/${program.title.toLowerCase().replace(/ /g, '-')}`)}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/apply')}
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;

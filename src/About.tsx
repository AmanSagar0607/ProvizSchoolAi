import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, BriefcaseIcon, Newspaper } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Our Story",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      content: "Founded in 2020, Proviz School of AI has grown from a small startup to a leading institution in AI education. Our journey is marked by continuous innovation and a commitment to excellence in teaching artificial intelligence.",
      link: "/about/story"
    },
    {
      title: "Become a Mentor",
      icon: <Users className="h-6 w-6 text-primary" />,
      content: "Share your expertise and help shape the next generation of AI professionals. Join our network of industry experts and make a real impact on students' careers.",
      link: "/about/mentor"
    },
    {
      title: "Join Our Team",
      icon: <BriefcaseIcon className="h-6 w-6 text-primary" />,
      content: "We're always looking for talented individuals who share our passion for AI education. Explore career opportunities at Proviz School of AI.",
      link: "/careers"
    },
    {
      title: "Press Inquiries",
      icon: <Newspaper className="h-6 w-6 text-primary" />,
      content: "For media inquiries and press information, please contact our communications team at press@proviz.ai",
      link: "/press"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Empowering the next generation of AI innovators through world-class education and mentorship.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{section.content}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(section.link)}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join our community of learners and industry experts. Transform your career with cutting-edge AI education.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                onClick={() => navigate('/programs')}
              >
                Explore Programs
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

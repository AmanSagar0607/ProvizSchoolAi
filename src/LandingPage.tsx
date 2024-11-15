import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { API_BASE_URL } from './config/api';
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  ChevronRight,
  Code,
  Cpu,
  Globe,
  GraduationCap,
  LineChart,
  Rocket,
  Users,
} from 'lucide-react'

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    statement: ''
  })

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsOpen(false);
        setFormData({ name: '', email: '', phone: '', statement: '' });
        alert('Application submitted successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to submit application: ${errorData.message || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Proviz School of AI</span>
            </div>
            <div className="hidden md:flex space-x-4">
              {/* Navigation Buttons */}
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/programs')}>Programs</Button>
              <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/contact')}>Contact</Button>
              <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>Admin</Button>
            </div>
            {/* Apply Now Button */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="default">Apply Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Apply to Proviz School of AI</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to start your journey in AI education.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statement">Personal Statement</Label>
                    <Textarea
                      id="statement"
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      placeholder="Tell us about your interest in AI..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Master the Future of AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the next generation of AI innovators. Learn from industry experts and build cutting-edge solutions with our comprehensive AI education programs.
          </p>
          <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            Explore Programs <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose Proviz School of AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "Cutting-edge Curriculum",
                description: "Stay ahead with our constantly updated, industry-aligned AI and machine learning courses."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals and AI researchers with years of practical experience."
              },
              {
                icon: <LineChart className="h-10 w-10 text-primary" />,
                title: "Career Growth",
                description: "95% of our graduates secure positions in leading tech companies within 6 months."
              }
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   {/* Programs Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Our Programs
    </h2>
    <Tabs defaultValue="fundamentals" className="w-full">
    <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-32 md:mb-4 xl:mb-4 gap-3 bg-muted/50">
  <TabsTrigger className="sm:text-xs md:text-base" value="fundamentals">AI Fundamentals</TabsTrigger>
  <TabsTrigger className="sm:text-xs md:text-base" value="machine-learning">Machine Learning</TabsTrigger>
  <TabsTrigger className="sm:text-xs md:text-base" value="deep-learning">Deep Learning</TabsTrigger>
  <TabsTrigger className="sm:text-xs md:text-base" value="ai-ethics">AI Ethics</TabsTrigger>
</TabsList>

      {[ 
        {
          value: "fundamentals",
          title: "AI & Machine Learning Fundamentals",
          icon: <Code className="h-6 w-6 text-primary" />,
          duration: "12 weeks",
          level: "Beginner",
          description: "Master the basics of AI, including Python programming, statistics, and introductory machine learning concepts."
        },
        {
          value: "machine-learning",
          title: "Advanced Machine Learning",
          icon: <Brain className="h-6 w-6 text-primary" />,
          duration: "16 weeks",
          level: "Intermediate",
          description: "Dive deep into various machine learning algorithms, feature engineering, and model optimization techniques."
        },
        {
          value: "deep-learning",
          title: "Deep Learning Specialization",
          icon: <Rocket className="h-6 w-6 text-primary" />,
          duration: "20 weeks",
          level: "Advanced",
          description: "Explore neural networks, computer vision, natural language processing, and generative AI models."
        },
        {
          value: "ai-ethics",
          title: "AI Ethics & Governance",
          icon: <Globe className="h-6 w-6 text-primary" />,
          duration: "8 weeks",
          level: "All Levels",
          description: "Understand the ethical implications and governance frameworks for AI systems in various industries."
        }
      ].map((program) => (
        <TabsContent key={program.value} value={program.value}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-primary">{program.icon}</div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">{program.title}</CardTitle> {/* Adjusted text size */}
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">{program.duration}</Badge>
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{program.description}</p> {/* Adjusted text size */}
              <Button variant="outline" className="w-full sm:w-auto">Learn More</Button> {/* Button width adjusted */}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "AI Engineer at Tech Corp",
                content: "The practical approach to learning AI at Proviz helped me transition from a traditional software role to an AI engineering position."
              },
              {
                name: "Sarah Johnson",
                role: "ML Research Scientist",
                content: "The deep learning specialization provided me with the theoretical foundation and practical skills needed for my research career."
              },
              {
                name: "Michael Park",
                role: "AI Startup Founder",
                content: "The network I built at Proviz was invaluable. The instructors and fellow students became my first employees and advisors."
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-5">
                  <p className="text-muted-foreground mb-3">"{testimonial.content}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Join Proviz School of AI today and transform your career with cutting-edge AI education.
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Apply Now
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold">Proviz School of AI</span>
              </div>
              <p className="text-muted-foreground">
                Empowering the next generation of AI innovators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Fundamentals</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>AI Ethics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Proviz School of AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
import React from "react";
import { motion } from "framer-motion";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Brain,
  Code,
  Cpu,
  Globe,
  LineChart,
  Rocket,
  Users,
  Phone,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left md:w-1/2"
            >
              <Badge variant="secondary" className="mb-4">
                Job Guarantee
              </Badge>
              <h1 className="font-heading text-4xl font-bold mb-4">
  AI Engineering Bootcamp
</h1>
<span className="font-display text-2xl text-primary mb-6">
  Become an AI Engineer. Land a job or your money back.
</span>
              <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground flex items-center gap-2">
  <CheckCircle className="text-primary h-5 w-5" />
  Build AI engineering skills and master deep learning techniques through our 100% online project-based curriculum
</p>
<p className="text-lg text-muted-foreground flex items-center gap-2">
  <CheckCircle className="text-primary h-5 w-5" />
  Get 1-on-1 mentorship + coaching to fast-track your career as an AI engineer
</p>
<p className="text-lg text-muted-foreground flex items-center gap-2">
  <CheckCircle className="text-primary h-5 w-5" />
  Graduate from our AI engineering course in 6 months, part-time
</p>
                <p className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  NEW! AI for Data Professionals learning units
                </p>
              </div>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 py-6"
                onClick={() => setIsOpen(true)}
              >
                Apply Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
                alt="Data Scientist learning AI"
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Program Overview Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Overview", "Curriculum", "Mentorship + Career Services", "Job Guarantee", "Admissions", "Tuition"].map((item) => (
        <Button
          key={item}
          variant="outline"
          className="rounded-full hover:bg-primary hover:text-primary-foreground"
        >
          {item}
        </Button>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
  An AI engineering bootcamp on your schedule, backed by our Job Guarantee
</h2>
<p className="text-lg text-muted-foreground mb-8">
  Launch your AI engineering career in just 6 months part-time. Our flexible, human-guided curriculum featuring advanced specialization means you can learn when you want with support as you need it.
</p>
        
        <div className="flex flex-col gap-8">
          {[
            {
              title: "Build job-ready, in-demand skills",
              description: "Build job-ready skills with 28 mini-projects and 3 capstones and an advanced specialization project that suits your career goals."
            },
            {
              title: "Get real human support at every step",
              description: "Work 1-on-1 with an expert mentor, industry career coach and student advisor when you need guidance from course start to new job."
            },
            {
              title: "Backed by our Job Guarantee",
              description: "We believe in you and our program, so if you don't land a data science job or you'll receive a full refund."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Ready to Start Your AI Journey?</h3>
        <div className="space-y-6">
          <p className="text-lg">Schedule a free consultation call with our admissions team</p>
          <div className="flex items-center gap-3 text-primary">
            <Phone className="h-5 w-5" />
            <span className="text-lg font-semibold">+1 415 966 2533</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => setIsOpen(true)}
              className="w-full"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full"
            >
              Download Syllabus
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="lg"
            className="w-full"
          >
            Request Info
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Company Showcase Section */}
      <section className="py-12 bg-background border-t border-b">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl md:text-2xl text-muted-foreground mb-12">
            Our AI courses graduates have been hired by:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
              alt="Microsoft"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
              alt="Meta"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
              alt="NVIDIA"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </section>
      

{/* Key Statistics Section */}
<section className="py-16 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {[
        {
          stat: "89%",
          label: "Job Placement Rate",
          description: "Of graduates land jobs within 12 months"
        },
        {
          stat: "+$25K",
          label: "Salary Increase",
          description: "Average salary boost after graduation"
        },
        {
          stat: "6 Months",
          label: "Course Duration",
          description: "Part-time, flexible learning schedule"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-lg bg-background shadow-lg"
        >
          <h3 className="text-4xl font-bold text-primary mb-2">{item.stat}</h3>
          <h4 className="text-xl font-semibold mb-2">{item.label}</h4>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Why Choose Section */}
<section className="py-16 bg-muted/50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Why Choose Proviz School of AI?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Cpu className="h-10 w-10 text-primary" />,
          title: "Cutting-edge Curriculum",
          description: "Stay ahead with our constantly updated, industry-aligned AI and machine learning courses"
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "1-on-1 Expert Mentorship",
          description: "Get personalized guidance from industry professionals with years of practical experience"
        },
        {
          icon: <Brain className="h-10 w-10 text-primary" />,
          title: "Job Guarantee",
          description: "Land a job within 6 months of graduation or get your money back"
        },
        {
          icon: <Code className="h-10 w-10 text-primary" />,
          title: "Project-Based Learning",
          description: "Build a professional portfolio with real-world projects and capstone assignments"
        },
        {
          icon: <LineChart className="h-10 w-10 text-primary" />,
          title: "Career Growth",
          description: "95% of our graduates secure positions in leading tech companies within 6 months"
        },
        {
          icon: <Rocket className="h-10 w-10 text-primary" />,
          title: "Industry Recognition",
          description: "Our curriculum is trusted by top tech companies and industry leaders worldwide"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
        >
          <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
      <p className="text-xl text-muted-foreground">Choose the perfect learning path for your AI journey</p>
    </div>

    <Tabs defaultValue="fundamentals" className="w-full">
  <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent">
    {[
      { id: "fundamentals", label: "AI Fundamentals", icon: <Code className="h-4 w-4" /> },
      { id: "machine-learning", label: "Machine Learning", icon: <Brain className="h-4 w-4" /> },
      { id: "deep-learning", label: "Deep Learning", icon: <Rocket className="h-4 w-4" /> },
      { id: "ai-ethics", label: "AI Ethics", icon: <Globe className="h-4 w-4" /> }
    ].map((tab) => (
      <TabsTrigger
        key={tab.id}
        value={tab.id}
        className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
      >
        {tab.icon}
        {tab.label}
      </TabsTrigger>
    ))}
  </TabsList>

  {[
    {
      value: "fundamentals",
      title: "AI & Machine Learning Fundamentals",
      icon: <Code className="h-8 w-8 text-primary" />,
      duration: "12 weeks",
      level: "Beginner",
      description: "Master Python programming, statistics, and core machine learning concepts through hands-on projects.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      features: ["Python Programming", "Data Analysis", "ML Algorithms", "Neural Networks", "Real-world Projects"]
    },
    {
      value: "machine-learning",
      title: "Advanced Machine Learning",
      icon: <Brain className="h-8 w-8 text-primary" />,
      duration: "16 weeks",
      level: "Intermediate",
      description: "Deep dive into ML algorithms, feature engineering, and model optimization techniques.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      features: ["Advanced ML Models", "Feature Engineering", "Model Deployment", "MLOps", "Industry Projects"]
    },
    {
      value: "deep-learning",
      title: "Deep Learning Specialization",
      icon: <Rocket className="h-8 w-8 text-primary" />,
      duration: "20 weeks",
      level: "Advanced",
      description: "Master neural networks, computer vision, NLP, and generative AI models.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      features: ["Deep Neural Networks", "Computer Vision", "NLP", "Generative AI", "Research Projects"]
    },
    {
      value: "ai-ethics",
      title: "AI Ethics & Governance",
      icon: <Globe className="h-8 w-8 text-primary" />,
      duration: "8 weeks",
      level: "All Levels",
      description: "Explore ethical implications and governance frameworks for AI systems.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
      features: ["AI Ethics", "Governance", "Bias Detection", "Responsible AI", "Case Studies"]
    }
  ].map((program) => (
    <TabsContent key={program.value} value={program.value}>
      <Card className="border-2 hover:border-primary/50 transition-all duration-300">
        <CardContent className="grid md:grid-cols-2 gap-8 p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                {program.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <div className="flex gap-3 mt-3">
                  <Badge variant="secondary">{program.duration}</Badge>
                  <Badge variant="secondary">{program.level}</Badge>
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{program.description}</p>
            <ul className="grid grid-cols-1 gap-3">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <Button size="lg" onClick={() => setIsOpen(true)}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full">
            <img
              src={program.image}
              alt={program.title}
              className="rounded-xl shadow-lg object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  ))}
</Tabs>

  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Student Success Stories
    </h2>
    
    <Carousel 
      className="w-full max-w-7xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      autoPlay={true}
      interval={5000}
    >
      <CarouselContent className="-ml-1">
        {[
          {
            name: "Alex Chen",
            role: "AI Engineer at Tech Corp",
            content: "The practical approach to learning AI at Proviz helped me transition from a traditional software role to an AI engineering position. The hands-on projects and real-world applications made the learning experience exceptional.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
            rating: 5,
            previousRole: "Software Engineer",
            salaryIncrease: "+45%",
          },
          {
            name: "Sarah Johnson",
            role: "ML Research Scientist",
            content: "The deep learning specialization provided me with the theoretical foundation and practical skills needed for my research career. The mentorship from industry experts was invaluable in shaping my career path.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
            rating: 5,
            previousRole: "Data Analyst",
            salaryIncrease: "+60%",
          },
          {
            name: "Michael Park",
            role: "AI Startup Founder",
            content: "The network I built at Proviz was invaluable. The instructors and fellow students became my first employees and advisors. The entrepreneurship insights alongside AI education created the perfect foundation.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
            rating: 5,
            previousRole: "Product Manager",
            salaryIncrease: "+120%",
          },
        ].map((testimonial, index) => (
          <CarouselItem key={index} className={`pl-1 md:basis-1/2 lg:basis-1/2 ${index === 0 ? 'lg:basis-1/2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-500/20"
                      />
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm">
                        {testimonial.salaryIncrease}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="space-y-2">
                      <p className="font-bold text-xl text-gray-900">{testimonial.name}</p>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">Previously: {testimonial.previousRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center mt-8 gap-2">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
}

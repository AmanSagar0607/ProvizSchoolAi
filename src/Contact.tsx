import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "+1 415 966 2533",
      description: "Mon-Fri from 8am to 5pm PST"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "admissions@proviz.ai",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      content: "San Francisco, CA",
      description: "Book an in-person meeting"
    }
  ];

  const socialChannels = [
    {
      icon: <Youtube className="h-6 w-6" />,
      name: "YouTube",
      link: "#",
      description: "Free AI Tutorials & Course Previews",
      color: "hover:text-red-600"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      link: "#",
      description: "Career Updates & Industry Insights",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      link: "#",
      description: "Student Success Stories & Events",
      color: "hover:text-pink-600"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      link: "#",
      description: "Latest AI News & Updates",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our programs? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-2">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="space-y-4">
                {socialChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link}
                    className={`flex items-center p-4 rounded-lg border hover:bg-muted/50 transition-all duration-300 ${channel.color}`}
                  >
                    <div className="p-2 rounded-full bg-muted/30 mr-4">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{channel.name}</h3>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Schedule a Free Consultation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Book a call with our admissions team to learn more about our programs and your career opportunities.
            </p>
            <Button size="lg" variant="default">
              Book a Call
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_BASE_URL } from "@/config/api";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    statement: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOpen(false);
        setFormData({ name: "", email: "", phone: "", statement: "" });
        alert("Application submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to submit application: ${errorData.message || "An unknown error occurred."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate('/')}>
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Proviz School</span>
          </div>

          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => navigate("/")}>Home</Button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_1fr]">
                      {/* Featured Promotions - Left Column */}
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-background p-6 rounded-lg">
                          <span className="px-2.5 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                            Limited Time
                          </span>
                          <h3 className="text-xl font-bold mt-2">Summer Special 50% OFF</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Kickstart your AI career with our most popular courses
                          </p>
                          <Button variant="link" className="p-0 mt-2" onClick={() => navigate("/offers")}>
                            Claim Offer →
                          </Button>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-background p-6 rounded-lg">
                          <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-500 rounded-full">
                            New Launch
                          </span>
                          <h3 className="text-xl font-bold mt-2">Generative AI Mastery</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Master ChatGPT, DALL-E, and other generative AI tools
                          </p>
                          <Button variant="link" className="p-0 mt-2" onClick={() => navigate("/programs/generative-ai")}>
                            Learn More →
                          </Button>
                        </div>
                      </div>

                      {/* Quick Links - Right Column */}
                      <div className="grid gap-4">
                        <div className="group space-y-4">
                          <h4 className="text-sm font-medium leading-none">Popular Programs</h4>
                          <NavigationMenuLink asChild>
                            <a onClick={() => navigate("/programs/ai-fundamentals")} className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium">AI Fundamentals</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Beginner-friendly introduction to AI concepts</p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a onClick={() => navigate("/programs/machine-learning")} className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium">Machine Learning</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Advanced ML algorithms and implementations</p>
                            </a>
                          </NavigationMenuLink>
                        </div>

                        <div className="group space-y-4">
                          <h4 className="text-sm font-medium leading-none">Resources</h4>
                          <NavigationMenuLink asChild>
                            <a onClick={() => navigate("/enterprise")} className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium">Enterprise Training</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Custom AI solutions for your organization</p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a onClick={() => navigate("/blog")} className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium">Blog & Tutorials</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Latest insights in AI and technology</p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" onClick={() => navigate("/programs")}>Programs</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About</Button>
            <Button variant="ghost" onClick={() => navigate("/contact")}>Contact</Button>
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>Admin</Button>
          </div>

          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-2">
                  <Button variant="ghost" onClick={() => navigate("/")} className="w-full justify-start">Home</Button>
                  <Button variant="ghost" onClick={() => navigate("/programs")} className="w-full justify-start">Programs</Button>
                  <Button variant="ghost" onClick={() => navigate("/about")} className="w-full justify-start">About</Button>
                  <Button variant="ghost" onClick={() => navigate("/contact")} className="w-full justify-start">Contact</Button>
                  <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="w-full justify-start">Admin</Button>
                  <Button variant="default" onClick={() => setIsOpen(true)} className="w-full justify-start">Apply Now</Button>
                </div>
              </SheetContent>
            </Sheet>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden md:inline-flex">Apply Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Apply to Proviz School of AI</DialogTitle>
                  <DialogDescription>Fill out the form below to start your journey in AI education.</DialogDescription>
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
          </div>
        </nav>
      </div>
    </header>
  );
};

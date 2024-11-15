import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Brain, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Proviz School of AI</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/programs')}>Programs</Button>
              <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/contact')}>Contact</Button>
              <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>Admin</Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  {/* <SheetDescription>
                    Navigate through our site
                  </SheetDescription> */}
                </SheetHeader>
                <div className="mt-4 space-y-2">
                  <Button variant="ghost" onClick={() => navigate('/')} className="w-full justify-start">Home</Button>
                  <Button variant="ghost" onClick={() => navigate('/programs')} className="w-full justify-start">Programs</Button>
                  <Button variant="ghost" onClick={() => navigate('/about')} className="w-full justify-start">About</Button>
                  <Button variant="ghost" onClick={() => navigate('/contact')} className="w-full justify-start">Contact</Button>
                  <Button variant="ghost" onClick={() => navigate('/admin/dashboard')} className="w-full justify-start">Admin</Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold">Our Programs</h2>
        <p className="text-xl my-4">Explore the programs offered by Proviz School of AI to advance your AI journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">AI for Beginners</h3>
            <p className="mt-2">Learn the fundamentals of AI and machine learning with hands-on projects.</p>
            <Button variant="ghost" onClick={() => navigate('/apply')}>Apply Now</Button>
          </div>
          {/* Repeat the card structure for other programs */}
        </div>
      </main>
    </div>
  );
};

export default Programs;
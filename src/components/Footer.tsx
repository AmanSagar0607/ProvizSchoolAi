import React from 'react';
import { Brain, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
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
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Proviz School of AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

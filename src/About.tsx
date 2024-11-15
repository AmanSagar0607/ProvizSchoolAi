import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold">About Us</span>
            <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold">About Proviz School of AI</h2>
        <p className="text-xl my-4">We are an innovative AI institute focused on nurturing talent and advancing the AI landscape.</p>
        <p className="mt-4 text-lg">Our mission is to provide world-class education to students and professionals interested in AI, machine learning, and data science. We believe in a hands-on approach, ensuring that our students are well-prepared for the real world.</p>
        <Button variant="ghost" onClick={() => navigate('/programs')}>Explore Programs</Button>
      </main>
    </div>
  );
};

export default About;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("@/components/ui/Button");
var react_router_dom_1 = require("react-router-dom");
var About = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold">About Us</span>
            <Button_1.Button variant="ghost" onClick={function () { return navigate('/'); }}>Home</Button_1.Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold">About Proviz School of AI</h2>
        <p className="text-xl my-4">We are an innovative AI institute focused on nurturing talent and advancing the AI landscape.</p>
        <p className="mt-4 text-lg">Our mission is to provide world-class education to students and professionals interested in AI, machine learning, and data science. We believe in a hands-on approach, ensuring that our students are well-prepared for the real world.</p>
        <Button_1.Button variant="ghost" onClick={function () { return navigate('/programs'); }}>Explore Programs</Button_1.Button>
      </main>
    </div>);
};
exports.default = About;

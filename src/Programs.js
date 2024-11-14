"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("@/components/ui/Button");
var react_router_dom_1 = require("react-router-dom");
var Programs = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold">Programs</span>
            <Button_1.Button variant="ghost" onClick={function () { return navigate('/'); }}>Home</Button_1.Button>
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
            <Button_1.Button variant="ghost" onClick={function () { return navigate('/apply'); }}>Apply Now</Button_1.Button>
          </div>
          {/* Repeat the card structure for other programs */}
        </div>
      </main>
    </div>);
};
exports.default = Programs;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingPage;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var react_router_dom_1 = require("react-router-dom");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var textarea_1 = require("@/components/ui/textarea");
var dialog_1 = require("@/components/ui/dialog");
var card_1 = require("@/components/ui/card");
var tabs_1 = require("@/components/ui/tabs");
var badge_1 = require("@/components/ui/badge");
var separator_1 = require("@/components/ui/separator");
var lucide_react_1 = require("lucide-react");
function LandingPage() {
    var _this = this;
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)({
        name: '',
        email: '',
        phone: '',
        statement: ''
    }), formData = _b[0], setFormData = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, errorData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch('http://localhost:5000/api/applications', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    setIsOpen(false);
                    setFormData({ name: '', email: '', phone: '', statement: '' });
                    alert('Application submitted successfully!');
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    errorData = _a.sent();
                    alert("Failed to submit application: ".concat(errorData.message || 'An unknown error occurred.'));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    alert('Failed to submit application. Please try again later.');
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <lucide_react_1.Brain className="h-8 w-8 text-primary"/>
              <span className="text-2xl font-bold">Proviz School of AI</span>
            </div>
            <div className="hidden md:flex space-x-4">
              {/* Navigation Buttons */}
              <button_1.Button variant="ghost" onClick={function () { return navigate('/'); }}>Home</button_1.Button>
              <button_1.Button variant="ghost" onClick={function () { return navigate('/programs'); }}>Programs</button_1.Button>
              <button_1.Button variant="ghost" onClick={function () { return navigate('/about'); }}>About</button_1.Button>
              <button_1.Button variant="ghost" onClick={function () { return navigate('/contact'); }}>Contact</button_1.Button>
              <button_1.Button variant="ghost" onClick={function () { return navigate('/admin/dashboard'); }}>Admin</button_1.Button>
            </div>
            {/* Apply Now Button */}
            <dialog_1.Dialog open={isOpen} onOpenChange={setIsOpen}>
              <dialog_1.DialogTrigger asChild>
                <button_1.Button variant="default">Apply Now</button_1.Button>
              </dialog_1.DialogTrigger>
              <dialog_1.DialogContent className="sm:max-w-[425px]">
                <dialog_1.DialogHeader>
                  <dialog_1.DialogTitle>Apply to Proviz School of AI</dialog_1.DialogTitle>
                  <dialog_1.DialogDescription>
                    Fill out the form below to start your journey in AI education.
                  </dialog_1.DialogDescription>
                </dialog_1.DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label_1.Label htmlFor="name">Full Name</label_1.Label>
                    <input_1.Input id="name" value={formData.name} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }} required/>
                  </div>
                  <div className="space-y-2">
                    <label_1.Label htmlFor="email">Email</label_1.Label>
                    <input_1.Input id="email" type="email" value={formData.email} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }} required/>
                  </div>
                  <div className="space-y-2">
                    <label_1.Label htmlFor="phone">Phone Number</label_1.Label>
                    <input_1.Input id="phone" type="tel" value={formData.phone} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { phone: e.target.value })); }} required/>
                  </div>
                  <div className="space-y-2">
                    <label_1.Label htmlFor="statement">Personal Statement</label_1.Label>
                    <textarea_1.Textarea id="statement" value={formData.statement} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { statement: e.target.value })); }} placeholder="Tell us about your interest in AI..." required/>
                  </div>
                  <button_1.Button type="submit" className="w-full">Submit Application</button_1.Button>
                </form>
              </dialog_1.DialogContent>
            </dialog_1.Dialog>
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
          <button_1.Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            Explore Programs <lucide_react_1.ChevronRight className="ml-2"/>
          </button_1.Button>
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
                icon: <lucide_react_1.Cpu className="h-10 w-10 text-primary"/>,
                title: "Cutting-edge Curriculum",
                description: "Stay ahead with our constantly updated, industry-aligned AI and machine learning courses."
            },
            {
                icon: <lucide_react_1.Users className="h-10 w-10 text-primary"/>,
                title: "Expert Instructors",
                description: "Learn from industry professionals and AI researchers with years of practical experience."
            },
            {
                icon: <lucide_react_1.LineChart className="h-10 w-10 text-primary"/>,
                title: "Career Growth",
                description: "95% of our graduates secure positions in leading tech companies within 6 months."
            }
        ].map(function (feature, index) { return (<card_1.Card key={index}>
                <card_1.CardHeader>
                  <div className="mb-3">{feature.icon}</div>
                  <card_1.CardTitle className="text-xl">{feature.title}</card_1.CardTitle>
                </card_1.CardHeader>
                <card_1.CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </card_1.CardContent>
              </card_1.Card>); })}
          </div>
        </div>
      </section>

   {/* Programs Section */}
    <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Our Programs
    </h2>
    <tabs_1.Tabs defaultValue="fundamentals" className="w-full">
    <tabs_1.TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-32 md:mb-4 xl:mb-4 gap-3 bg-muted/50">
  <tabs_1.TabsTrigger className="sm:text-xs md:text-base" value="fundamentals">AI Fundamentals</tabs_1.TabsTrigger>
  <tabs_1.TabsTrigger className="sm:text-xs md:text-base" value="machine-learning">Machine Learning</tabs_1.TabsTrigger>
  <tabs_1.TabsTrigger className="sm:text-xs md:text-base" value="deep-learning">Deep Learning</tabs_1.TabsTrigger>
  <tabs_1.TabsTrigger className="sm:text-xs md:text-base" value="ai-ethics">AI Ethics</tabs_1.TabsTrigger>
    </tabs_1.TabsList>

      {[
            {
                value: "fundamentals",
                title: "AI & Machine Learning Fundamentals",
                icon: <lucide_react_1.Code className="h-6 w-6 text-primary"/>,
                duration: "12 weeks",
                level: "Beginner",
                description: "Master the basics of AI, including Python programming, statistics, and introductory machine learning concepts."
            },
            {
                value: "machine-learning",
                title: "Advanced Machine Learning",
                icon: <lucide_react_1.Brain className="h-6 w-6 text-primary"/>,
                duration: "16 weeks",
                level: "Intermediate",
                description: "Dive deep into various machine learning algorithms, feature engineering, and model optimization techniques."
            },
            {
                value: "deep-learning",
                title: "Deep Learning Specialization",
                icon: <lucide_react_1.Rocket className="h-6 w-6 text-primary"/>,
                duration: "20 weeks",
                level: "Advanced",
                description: "Explore neural networks, computer vision, natural language processing, and generative AI models."
            },
            {
                value: "ai-ethics",
                title: "AI Ethics & Governance",
                icon: <lucide_react_1.Globe className="h-6 w-6 text-primary"/>,
                duration: "8 weeks",
                level: "All Levels",
                description: "Understand the ethical implications and governance frameworks for AI systems in various industries."
            }
        ].map(function (program) { return (<tabs_1.TabsContent key={program.value} value={program.value}>
          <card_1.Card>
            <card_1.CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-primary">{program.icon}</div>
                <div>
                  <card_1.CardTitle className="text-xl sm:text-2xl">{program.title}</card_1.CardTitle> {/* Adjusted text size */}
                  <div className="flex gap-2 mt-2">
                    <badge_1.Badge variant="secondary">{program.duration}</badge_1.Badge>
                    <badge_1.Badge variant="secondary">{program.level}</badge_1.Badge>
                  </div>
                </div>
              </div>
            </card_1.CardHeader>
            <card_1.CardContent>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{program.description}</p> {/* Adjusted text size */}
              <button_1.Button variant="outline" className="w-full sm:w-auto">Learn More</button_1.Button> {/* Button width adjusted */}
            </card_1.CardContent>
          </card_1.Card>
        </tabs_1.TabsContent>); })}
    </tabs_1.Tabs>
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
        ].map(function (testimonial, index) { return (<card_1.Card key={index}>
                <card_1.CardContent className="pt-5">
                  <p className="text-muted-foreground mb-3">"{testimonial.content}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <lucide_react_1.GraduationCap className="h-4 w-4 text-primary"/>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </card_1.CardContent>
              </card_1.Card>); })}
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
          <dialog_1.Dialog open={isOpen} onOpenChange={setIsOpen}>
            <dialog_1.DialogTrigger asChild>
              <button_1.Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Apply Now
              </button_1.Button>
            </dialog_1.DialogTrigger>
          </dialog_1.Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <lucide_react_1.Brain className="h-6 w-6 text-primary"/>
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
          <separator_1.Separator className="my-8"/>
          <div className="text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Proviz School of AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);
}

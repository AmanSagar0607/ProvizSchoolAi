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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var card_1 = require("@/components/ui/card");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var label_1 = require("@/components/ui/label");
var AdminLogin = function () {
    var _a = (0, react_1.useState)({
        username: "",
        password: "",
    }), credentials = _a[0], setCredentials = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            e.preventDefault();
            // Basic validation for username and password
            if (!credentials.username || !credentials.password) {
                setError("Please fill in both fields.");
                return [2 /*return*/];
            }
            // Check for hardcoded username and password
            if (credentials.username === "admin" &&
                credentials.password === "admin123") {
                try {
                    data = {
                        token: "your-generated-token-here", // Replace with the actual token if needed
                        message: "Login successful",
                    };
                    // Set the token in localStorage
                    localStorage.setItem("adminToken", data.token);
                    // Redirect to dashboard
                    navigate("/admin/dashboard");
                }
                catch (err) {
                    setError(err instanceof Error ? err.message : "Login failed");
                }
            }
            else {
                setError("Invalid username or password");
            }
            return [2 /*return*/];
        });
    }); };
    var handleChange = function (e, field) {
        var _a;
        setCredentials(__assign(__assign({}, credentials), (_a = {}, _a[field] = e.target.value, _a)));
        if (error)
            setError(""); // Clear error when user starts typing
    };
    return (<div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <card_1.Card className="w-full max-w-md">
        <card_1.CardHeader>
          <card_1.CardTitle className="text-2xl text-center">Admin Login</card_1.CardTitle>
        </card_1.CardHeader>
        <card_1.CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="space-y-2">
              <label_1.Label htmlFor="username">Username</label_1.Label>
              <input_1.Input id="username" value={credentials.username} onChange={function (e) { return handleChange(e, "username"); }} required/>
            </div>
            <div className="space-y-2">
              <label_1.Label htmlFor="password">Password</label_1.Label>
              <input_1.Input id="password" type="password" value={credentials.password} onChange={function (e) { return handleChange(e, "password"); }} required/>
            </div>
            <button_1.Button type="submit" className="w-full">
              Login
            </button_1.Button>
          </form>
        </card_1.CardContent>
      </card_1.Card>
    </div>);
};
exports.default = AdminLogin;

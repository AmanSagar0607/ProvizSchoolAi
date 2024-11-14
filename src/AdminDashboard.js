"use strict";
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
var table_1 = require("../components/ui/table");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var AdminDashboard = function () {
    var _a = (0, react_1.useState)([]), applications = _a[0], setApplications = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(''), error = _c[0], setError = _c[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var fetchApplications = function () { return __awaiter(void 0, void 0, void 0, function () {
            var token, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = localStorage.getItem('adminToken');
                        if (!token) {
                            navigate('/admin');
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, fetch('http://localhost:5000/api/admin/applications', {
                                headers: { 'Authorization': "Bearer ".concat(token) }
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error('Failed to fetch applications');
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        setApplications(data);
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error fetching applications:', error_1);
                        setError('Failed to fetch applications. Please try again later.');
                        return [3 /*break*/, 6];
                    case 5:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        fetchApplications();
    }, [navigate]);
    var handleLogout = function () {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var token, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.confirm('Are you sure you want to delete this application?'))
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    token = localStorage.getItem('adminToken');
                    return [4 /*yield*/, fetch("http://localhost:5000/api/admin/applications/".concat(id), {
                            method: 'DELETE',
                            headers: { 'Authorization': "Bearer ".concat(token) }
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to delete application');
                    setApplications(applications.filter(function (app) { return app._id !== id; }));
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error deleting application:', error_2);
                    setError('Failed to delete application. Please try again later.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return <div className="p-8 text-center">Loading...</div>;
    }
    return (<div className="p-8">
      <h1 className="text-3xl font-bold text-gray-600 mb-6">Admin Dashboard</h1> {/* Header for Admin Dashboard */}
      <card_1.Card>
        <card_1.CardHeader className="flex flex-row items-center justify-between">
          <card_1.CardTitle>Applications</card_1.CardTitle>
          <button_1.Button onClick={handleLogout} variant="outline">Logout</button_1.Button>
        </card_1.CardHeader>
        <card_1.CardContent>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <table_1.Table>
            <table_1.TableHeader>
              <table_1.TableRow>
                <table_1.TableHead>Name</table_1.TableHead>
                <table_1.TableHead>Email</table_1.TableHead>
                <table_1.TableHead>Phone</table_1.TableHead>
                <table_1.TableHead>Personal Statement</table_1.TableHead>
                <table_1.TableHead>Date</table_1.TableHead>
                <table_1.TableHead>Actions</table_1.TableHead>
              </table_1.TableRow>
            </table_1.TableHeader>
            <table_1.TableBody>
              {applications.length > 0 ? (applications.map(function (app) { return (<table_1.TableRow key={app._id}>
                    <table_1.TableCell>{app.name}</table_1.TableCell>
                    <table_1.TableCell>{app.email}</table_1.TableCell>
                    <table_1.TableCell>{app.phone}</table_1.TableCell>
                    <table_1.TableCell>{app.statement}</table_1.TableCell>
                    <table_1.TableCell>{new Date(app.createdAt).toLocaleDateString()}</table_1.TableCell>
                    <table_1.TableCell>
                      <button_1.Button onClick={function () { return handleDelete(app._id); }} variant="destructive" size="sm">
                        Delete
                      </button_1.Button>
                    </table_1.TableCell>
                  </table_1.TableRow>); })) : (<table_1.TableRow>
                  <table_1.TableCell colSpan={6} className="text-center">No applications found</table_1.TableCell>
                </table_1.TableRow>)}
            </table_1.TableBody>
          </table_1.Table>
        </card_1.CardContent>
      </card_1.Card>
    </div>);
};
exports.default = AdminDashboard;

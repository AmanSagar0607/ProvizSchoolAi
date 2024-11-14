"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AdminLogin_1 = require("./AdminLogin");
var AdminDashboard_1 = require("./AdminDashboard");
var Contact_1 = require("./Contact");
var LandingPage_1 = require("./LandingPage");
var react_router_dom_2 = require("react-router-dom");
require("./index.css");
var About_1 = require("./About");
var Programs_1 = require("./Programs");
// Create the router using React Router v7's createBrowserRouter
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: '/',
        element: <LandingPage_1.default />,
    },
    {
        path: '/contact',
        element: <Contact_1.default />,
    },
    {
        path: '/about',
        element: <About_1.default />,
    },
    {
        path: '/programs',
        element: <Programs_1.default />,
    },
    {
        path: '/admin',
        element: <AdminLogin_1.default />,
    },
    {
        path: '/admin/dashboard',
        element: <AdminDashboard_1.default />,
    },
    {
        path: '*',
        element: <react_router_dom_2.Navigate to="/"/>,
    },
], {
    future: {
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }
});
function App() {
    return <react_router_dom_1.RouterProvider router={router}/>;
}
exports.default = App;

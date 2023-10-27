import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/frontend/Home.jsx";
import Main from "./components/frontend/Main.jsx";
import About from "./components/frontend/About.jsx";
import Service from "./components/frontend/Service.jsx";
import Blog from "./components/frontend/Blog.jsx";
import BlogDetails from "./components/frontend/BlogDetails.jsx";
import Contact from "./components/frontend/Contact.jsx";
import Login from "./components/dashboard/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Products from "./components/dashboard/Products.jsx";
import AddProduct from "./components/dashboard/AddProduct.jsx";
import AllBlogs from "./components/dashboard/AllBlogs.jsx";
import AddBlog from "./components/dashboard/AddBlog.jsx";
import Users from "./components/dashboard/Users.jsx";
import ContactInfo from "./components/dashboard/ContactInfo.jsx";
import AuthProvider from "./components/dashboard/AuthProvider";
import PrivateRoute from "./components/dashboard/PrivateRoute";

// url
const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
//routs
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "services",
                element: <Service></Service>,
            },
            {
                path: "blogs",
                element: <Blog></Blog>,
            },
            {
                path: "/blogs/:id",
                element: <BlogDetails></BlogDetails>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
        ],
    },
    {
        path: "login",
        element: <Login></Login>,
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "products",
                element: <Products></Products>,
                loader: () => fetch(`${serverUrl}/products`),
            },
            {
                path: "addproduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "blogs",
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch(`${serverUrl}/blogs`),
            },
            {
                path: "addblog/:id",
                element: <AddBlog></AddBlog>,
                loader: ({ params }) =>
                    fetch(`${serverUrl}/blogs/${params.id}`),
            },
            {
                path: "users",
                element: <Users></Users>,
            },
            {
                path: "contactinfo",
                element: <ContactInfo></ContactInfo>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);

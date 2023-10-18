import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/frontend/Home.jsx";
import About from "./components/frontend/About.jsx";
import Service from "./components/frontend/Service.jsx";
import Blog from "./components/frontend/Blog.jsx";
import Contact from "./components/frontend/Contact.jsx";
import Login from "./components/dashboard/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Products from "./components/dashboard/Products.jsx";
import AddProduct from "./components/dashboard/AddProduct.jsx";
import AllBlogs from "./components/dashboard/AllBlogs.jsx";
import AddBlog from "./components/dashboard/AddBlog.jsx";
import Users from "./components/dashboard/Users.jsx";
import ContactInfo from "./components/dashboard/ContactInfo.jsx";

// url
const serverUrl = "http://localhost:8000";
//routs
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "service",
                element: <Service></Service>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
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
        element: <Dashboard></Dashboard>,
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
                //loader: fetch("http://localhost:8000/blogs/652fa94aad35598cb33a49d2"),
                loader: ({ params }) => fetch(`${serverUrl}/blogs/${params.id}`),
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
        <RouterProvider router={router} />
    </React.StrictMode>
);

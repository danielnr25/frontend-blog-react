import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Layout from "@/components/Layout";
import About from "@/pages/About";
import LayoutMain from "@/components/LayoutMain";
import AdminDashboard from "@/admin/AdminDashboard";
import PrivateRoute from "@/routes/PrivateRoute";
import Categories from "@/admin/categories/Categories";
import Posts from "@/admin/posts/Posts";
import Blog from "@/pages/Blog";
import Blogdetail from "./pages/Blogdetail";
import Comments from "./admin/comments/Comments";

function App (){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="login" element={<Login/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="blog" element={<Blog/>} />
                        <Route path="blog/:slug" element={<Blogdetail />} />
                    </Route>
                    <Route path="/" element={<LayoutMain />}>
                        <Route 
                            path="admin" element={
                                <PrivateRoute>
                                    <AdminDashboard/>
                                </PrivateRoute>
                            }
                        />
    
                        <Route 
                            path="admin/categories" element={
                                <PrivateRoute>
                                    <Categories/>
                                </PrivateRoute>
                            }
                        />

                        <Route 
                            path="admin/posts" element={
                                <PrivateRoute>
                                    <Posts/>
                                </PrivateRoute>
                            }
                        />

                        <Route 
                            path="admin/comments" element={
                                <PrivateRoute>
                                    <Comments/>
                                </PrivateRoute>
                            }
                        />

                    </Route>
                </Routes>
            </Router>
    
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </>

    )
}

export default App
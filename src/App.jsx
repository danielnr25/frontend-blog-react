import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import About from "./pages/About";
import LayoutMain from "./components/LayoutMain";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Categories from "./admin/categories/Categories";
function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="about" element={<About/>} />
                </Route>

                {/* <Route path="/" element={<LayoutMain/>}>
                    <Route path="admin" element={<AdminDashboard />} />
                </Route> */}

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
                    



                </Route>


            </Routes>
        </Router>
    )
}

export default App
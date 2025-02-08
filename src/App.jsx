import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import About from "./pages/About";
function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="about" element={<About/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
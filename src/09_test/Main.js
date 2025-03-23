import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Nav from "./Nav";

export default function Main(){
    
    return(
        <div className="w-full h-full justify-center items-center flex flex-col p-10">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1/:item" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </BrowserRouter>  
        </div>
    );
}
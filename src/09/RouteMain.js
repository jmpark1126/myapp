import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";

export default function RouteMain() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <BrowserRouter>
        <RouteNav />
        <Routes>
            <Route path="/" element={<RouteHome />} />
            <Route path="/p1/:item" element={<RoutePage1 />} />
            <Route path="/p2" element={<RoutePage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

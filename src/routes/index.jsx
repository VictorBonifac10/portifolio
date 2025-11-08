import { Route, Routes } from "react-router-dom";
import { Home, Portfolio } from "../pages";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )
}
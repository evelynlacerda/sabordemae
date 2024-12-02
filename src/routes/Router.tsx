import Home from "@/pages/home/page"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
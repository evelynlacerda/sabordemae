import { Outlet } from "react-router"
import Header from "./Header"

const Structor = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Structor

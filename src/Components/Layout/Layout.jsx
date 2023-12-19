import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}
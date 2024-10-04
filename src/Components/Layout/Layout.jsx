import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./Footer/Footer";
import { SignupSticky } from "./SignupSticky/SignupSticky";

export default function Layout() {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <SignupSticky></SignupSticky>
            <Footer></Footer>
        </div>
    );
}
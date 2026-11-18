import { Outlet } from "react-router"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";

const MainLayout = () => {

    
    return (
        <>
            <header className="sticky top-0 z-50 bg-(--page-background) border-b border-(--outline-border) text-xs md:text-base lg:text-lg leading-(--line-140) font-medium">
                <Navbar />
            </header>

            <main className="flex flex-col">
                <Outlet />
            </main>

            <Footer />

        </>
    )
}

export default MainLayout
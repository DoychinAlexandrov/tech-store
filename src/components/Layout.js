import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const Layout = ({ children }) => {
    return (
        <div className={`${inter.variable} min-h-screen flex flex-col`}>
            <Meta />
            <Header />
            <main className='flex-grow bg-neutral-900'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
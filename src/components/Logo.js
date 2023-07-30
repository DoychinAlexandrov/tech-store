import Image from "next/image"
import Link from "next/link"


const Logo = () => {
    return (
        <Link href='/' className="flex items-center space-x-2">
            <Image src='/technostore.jpg' alt='logo' width={42} height={42} />
            <span className="hidden sm:inline-block font-extrabold text-3xl text-slate-300">
                TechnoStore
            </span>

        </Link>
    )
}

export default Logo
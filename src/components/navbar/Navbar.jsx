'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="left-[472.50px] top-[79px] absolute">
            <div className="h-[27px] left-0 top-[14px] absolute flex gap-[76px]">
                <Link href="/" className={`w-[78px] h-[27px] text-center text-base font-normal font-['Poppins'] capitalize ${pathname === '/' ? 'text-[#4974ce]' : 'text-black'}`}>
                    Inicio
                </Link>
                <Link href="/services" className={`w-[127px] h-[27px] text-center text-base font-normal font-['Poppins'] capitalize ${pathname === '/services' ? 'text-[#4974ce]' : 'text-black'}`}>
                    Servicios
                </Link>
                <Link href="/about-us" className={`w-[131px] h-[27px] text-center text-base font-normal font-['Poppins'] capitalize ${pathname === '/about-us' ? 'text-[#4974ce]' : 'text-black'}`}>
                    Sobre nosotros
                </Link>
                <Link href="/blog" className={`w-[93px] h-[27px] text-center text-base font-normal font-['Poppins'] capitalize ${pathname === '/blog' ? 'text-[#4974ce]' : 'text-black'}`}>
                    Blog
                </Link>
            </div>

            <div className="w-[169px] h-[54px] left-[793.50px] top-0 absolute">
                <div className="w-[169px] h-[54px] bg-gradient-to-r from-[#55b6c5] via-[#4974ce] to-[#6f34d8] rounded-[15px]" />
                <div className="w-[124px] h-[30px] left-[23px] top-[12px] absolute text-center text-white text-base font-semibold font-['Poppins'] capitalize">
                    Contacto
                </div>
            </div>
        </div>
    );
};

export default Navbar;

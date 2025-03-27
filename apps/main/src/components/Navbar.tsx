import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    return (
        <nav className="bg-black z-50 absolute top-0 w-full  text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl font-bold text-yellow-500" >
                    <Link href="/">Geetkar</Link>
                </div>
                <ul className="flex space-x-6">
                    <li className="hover:text-gray-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="/lessons">Lessons</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
// components/Header.tsx

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <img src="/images.jpg" alt="Logo" className="h-20" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/women-help" className="hover:text-gray-500">Women Help</Link></li>
            <li><Link href="/safety-tips" className="hover:text-gray-500">Safety Tips</Link></li>
            <li><Link href="/faq" className="hover:text-gray-500">FAQs</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" title="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-semibold">My Next.js App</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
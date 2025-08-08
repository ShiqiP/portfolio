'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname();
    const navigationItems = [{ id: 'home', label: 'Home', href: '/' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'articles', label: 'Articles', href: '/articles' }];

    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-extrabold text-neon-cyan">Shiqi</div>
            <div className="flex items-center space-x-6">
                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors "
                >
                  {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
                </button> */}
                {
                    navigationItems.map((item) => (
                        <Link
                            key={item.id}
                            className={`nav-link hover:text-neon-cyan ${pathname === item.href ? 'nav-link-active' : ''}`}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))
                }
            </div>

        </nav>
    )
}   
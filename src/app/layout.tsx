import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'
import "@/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiqi Pang",
  description: "portfolio of Shiqi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-gray-900/70">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-green-50 text-2xl font-bold">Shiqi</div>
            <div className="flex items-center space-x-6">
              {/* <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors "
                    >
                      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
                    </button> */}
              <Link className="dark:hover:text-blue-400 transition-colors" href={`/`}>Home</Link>
              <Link className="dark:hover:text-blue-400 transition-colors" href={`/projects`}>Projects</Link>
              <Link className="dark:hover:text-blue-400 transition-colors" href={`/articles`}>Articles</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

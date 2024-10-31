import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Certification Quiz App',
    description: 'Test your knowledge with our certification quizzes',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    // In a real application, you would determine the login state here
    const isLoggedIn = false

    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            <Header isLoggedIn={isLoggedIn} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    )
}
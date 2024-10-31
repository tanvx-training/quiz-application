"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserIcon } from 'lucide-react'
import AuthModal from './AuthModal'

const Header = ({ isLoggedIn = false }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

    const openSignInModal = () => {
        setAuthMode('signin')
        setIsAuthModalOpen(true)
    }

    const openSignUpModal = () => {
        setAuthMode('signup')
        setIsAuthModalOpen(true)
    }

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto sm:h-14"
                                src="/images/logo.webp"
                                alt="Your Company Logo"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/certification" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Certification
                        </Link>
                        <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Blog
                        </Link>
                        <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {isLoggedIn ? (
                            <div className="ml-4 relative">
                                <button
                                    type="button"
                                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="user-menu"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <UserIcon className="h-8 w-8 rounded-full" />
                                </button>
                                {isProfileOpen && (
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu"
                                    >
                                        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Your Profile
                                        </Link>
                                        <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Settings
                                        </Link>
                                        <button onClick={() => {/* Handle sign out */}} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <button onClick={openSignInModal} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Sign in
                                </button>
                                <button
                                    onClick={openSignUpModal}
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-700"
                                >
                                    Sign up
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                mode={authMode}
            />
        </header>
    )
}

export default Header
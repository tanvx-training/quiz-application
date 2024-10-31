'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Certification Courses</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Practice Tests</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Video Tutorials</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Hands-on Labs</Link></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Pricing</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Documentation</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Guides</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">API Status</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">About</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Blog</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Jobs</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Press</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Partners</Link></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Privacy</Link></li>
                                    <li><Link href="#" className="text-base text-gray-300 hover:text-white">Terms</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-base text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button type="submit" className="w-full bg-orange-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2023 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
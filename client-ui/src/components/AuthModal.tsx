"use client"

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FacebookIcon, LinkedinIcon, AppleIcon } from 'lucide-react'

type AuthModalProps = {
    isOpen: boolean
    onClose: () => void
    mode: 'signin' | 'signup'
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', { email, password, name })
    }

    const socialButtons = [
        { icon: FacebookIcon, text: 'Continue with Facebook' },
        // { icon: GoogleIcon, text: 'Continue with Google' },
        { icon: LinkedinIcon, text: 'Continue with LinkedIn' },
        { icon: AppleIcon, text: 'Continue with Apple' },
    ]

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-screen-sm rounded bg-white p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <Dialog.Title className="text-xl font-semibold mb-4">
                        {mode === 'signin' ? 'Sign in To WhizLab' : 'Sign up To WhizLab'}
                    </Dialog.Title>

                    <div className="space-y-3">
                        {socialButtons.map((button, index) => (
                            <button
                                key={index}
                                className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50"
                            >
                                <button.icon className="w-5 h-5" />
                                <span>{button.text}</span>
                            </button>
                        ))}
                    </div>

                    <div className="my-4 text-center text-sm text-gray-500">OR</div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === 'signup' && (
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                        <input
                            type="password"
                            placeholder={mode === 'signin' ? 'Password' : 'Create a Password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            {mode === 'signin' ? 'Sign in' : 'Sign up'}
                        </button>
                    </form>

                    {mode === 'signin' && (
                        <div className="mt-4 text-center">
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>
                    )}

                    {mode === 'signup' && (
                        <div className="mt-4 text-center text-sm text-gray-500">
                            By signing up, you agree to our Terms of Use, EULA and Privacy Policy.
                        </div>
                    )}

                    <div className="mt-4 text-center">
                        {mode === 'signin' ? (
                            <p>Don`t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
                        ) : (
                            <p>Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign in</a></p>
                        )}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default AuthModal
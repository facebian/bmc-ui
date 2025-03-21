'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="w-full border-b bg-white">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-medium">
                            BeMyCoach
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/how-to-use"
                            className="text-sm font-medium text-primary transition-colors"
                        >
                            How to use
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm font-medium text-primary transition-colors"
                        >
                            Contact
                        </Link>
                        <Button variant="default" className="cursor-pointer ">
                            Sign in
                        </Button>
                    </nav>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="py-4 space-y-4">
                            <Link to="/how-to-use" onClick={() => setIsMenuOpen(false)}>
                                How to use
                            </Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                            <Button
                                variant="default"
                                className="cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign in
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

'use client'

import { useState } from 'react'
import { Bell, Menu, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NotificationsPanel } from '../Notifications/NotificationPanel'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                        <div className="flex items-center space-x-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="relative">
                                        <Bell className="h-5 w-5" />
                                        <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-80 p-0 border-0 shadow-none rounded-md"
                                    align="end"
                                >
                                    <NotificationsPanel />
                                </PopoverContent>
                            </Popover>

                            <Button variant="ghost" size="icon" className="rounded-full">
                                <User className="h-5 w-5" />
                            </Button>
                        </div>
                        <Button variant="default" className="cursor-pointer ">
                            Sign in
                        </Button>
                    </nav>
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center space-x-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-0 right-0.5 h-2 w-2 rounded-full bg-red-500"></span>
                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-end py-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>

                                <nav className="flex flex-col space-y-4 py-4">
                                    <a
                                        href="/how-to-use"
                                        className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        How to use
                                    </a>
                                    <a
                                        href="/contact"
                                        className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </a>
                                </nav>

                                <div className="mt-auto pb-8 px-4">
                                    <div className="flex items-center space-x-3">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <User className="h-5 w-5" />
                                        </Button>
                                        <span className="text-sm font-medium">My Account</span>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

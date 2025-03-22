'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const UserTypeSelection = () => {
    const [selectedType, setSelectedType] = useState<'trainee' | 'coach'>('trainee')

    const handleContinue = () => {
        console.log('Selected type:', selectedType)
        // Handle form submission logic here
    }

    return (
        <Card className="w-full min-w-3xl relative border-0 shadow-none pt-0 pb-0">
            <CardHeader className="text-center pt-8 pb-4">
                <h2 className="text-2xl font-bold">Why are you here?</h2>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Trainee Option */}
                    <div
                        className={`border rounded-md p-6 cursor-pointer transition-colors ${
                            selectedType === 'trainee'
                                ? 'bg-gray-200 border-gray-300'
                                : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                        }`}
                        onClick={() => setSelectedType('trainee')}
                    >
                        <h3 className="text-xl font-semibold text-center mb-6">To be a Trainee</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>A large number of specialists from different fields</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>Simplicity and ease of recording</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>Ability to track your activities</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coach Option */}
                    <div
                        className={`border rounded-md p-6 cursor-pointer transition-colors ${
                            selectedType === 'coach'
                                ? 'bg-gray-200 border-gray-300'
                                : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                        }`}
                        onClick={() => setSelectedType('coach')}
                    >
                        <h3 className="text-xl font-semibold text-center mb-6">To be a Coach</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>Clients find you and book your time</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>All information about wards in one place</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-gray-700 mt-0.5 shrink-0" />
                                <span>Get bonuses from every workout</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    <Button
                        onClick={handleContinue}
                        className="w-full max-w-xs text-white py-6"
                    >
                        Continue
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserTypeSelection

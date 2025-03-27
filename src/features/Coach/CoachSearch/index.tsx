'use client'
import { Badge } from '@/components/ui/badge'
import { CoachSearchForm } from '../CoachSearchForm'
import { CoachSearchCard, CoachSearchCardProps } from '@/components/Cards/CoachSearchCard'

export function CoachSearch() {
    const coaches: CoachSearchCardProps[] = [
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: '',
            date: '24 February, Thursday'
        },
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: 'Gym 1',
            date: '24 February, Thursday'
        },
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: 'Gym 1',
            date: '24 February, Thursday'
        },
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: 'Gym 1',
            date: '24 February, Thursday'
        },
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: 'Gym 1',
            date: '24 February, Thursday'
        },
        {
            id: 1,
            name: 'Mike Anderson',
            title: 'Personal trainer',
            time: '10:00 AM - 6:00 PM • Thursday',
            slots: 3,
            price: 20,
            gym: 'Gym 1',
            date: '24 February, Thursday'
        }
    ]

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full lg:w-[500px] bg-secondary-light p-6 rounded-lg self-start flex-shrink-0 secondary-light">
                <div className="space-y-6">
                    <h2 className="font-medium text-lg">Coach Search</h2>
                    <CoachSearchForm />
                </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4">
                <div className="">
                    <div className="flex justify-between items-center gap-2">
                        <h2 className="font-medium text-lg">All Coaches</h2>
                        <Badge variant="outline" className="rounded-full secondary-light text-primary text-base font-semibold w-10 h-8">
                            4
                        </Badge>
                    </div>
                    <p className="text-xs font-semibold text-primary mt-4 mb-4">
                        {coaches.length ? 'Over 150 results match your search criteria' : 'Please select Specialization to see results'}
                    </p>
                </div>

                <div className="space-y-4">
                    {coaches.map((coach) => (
                        <CoachSearchCard coach={coach} />
                    ))}
                </div>
            </div>
        </div>
    )
}

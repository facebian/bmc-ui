import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import CoachIcon from '../../../assets/coach-icon.svg'
import Icon from '@/components/Icon'

export interface CoachSearchCardProps {
    id: number
    name: string
    title: string
    gym: string
    date: string
    time: string
    slots: number
    price: number
}

export type Coach = {
    coach: CoachSearchCardProps
}

export function CoachSearchCard({ coach }: Coach) {
    const { name, title, gym, date, time, slots, price } = coach
    return (
        <div className="secondary-light rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="">
                <Icon icon={CoachIcon}  />
            </div>

            <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="text-gray-600 mb-2">{title}</p>

                <div className="flex items-center mb-3 justify-center sm:justify-start">
                    <MapPin className="h-5 w-5 text-gray-700 mr-1" />
                    <span>{gym}</span>
                </div>

                <div className="text-gray-700">
                    <p>Nearest slot</p>
                    <p className="mb-2">{date}</p>
                    <div className="inline-flex items-center">
                        <Badge
                            variant="outline"
                            className="secondary-dark text-primary border-0 rounded-md px-3 py-1"
                        >
                            {time}
                        </Badge>
                        <span className="ml-2">+{slots}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-12 mt-4 sm:mt-0 self-center">
                <div className="text-2xl font-bold text-primary">~${price}</div>
                <Button className="bg-primary cursor-pointer font-semibold text-base leading-[21px] text-white px-6 py-4 rounded-md h-12 w-[135px]">
                    Select slot
                </Button>
            </div>
        </div>
    )
}

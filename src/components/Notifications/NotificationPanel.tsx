import { Button } from '@/components/ui/button'

export function NotificationsPanel() {
    const notifications = [
        {
            id: 1,
            title: 'New application',
            time: '10 min ago',
            location: ''
        },
        {
            id: 2,
            title: 'You have an activity!',
            time: '10:30 AM 26 February',
            location: 'Gym 1'
        },
        {
            id: 3,
            title: 'Slot is declained',
            time: '12:00 AM 27 February',
            location: 'Gym 2'
        },
        {
            id: 4,
            title: 'Slot is declained',
            time: '12:00 AM 27 February',
            location: 'Gym 2'
        },
        {
            id: 5,
            title: 'Slot is declained',
            time: '12:00 AM 27 February',
            location: 'Gym 2'
        }
    ]

    return (
        <div className="max-h-[380px] overflow-auto mt-3.5">
            <div className="p-4 font-medium text-lg border-b">Notifications</div>

            <div className="overflow-y-auto max-h-[250px] custom-scrollbar">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`flex items-start p-4 gap-3 hover:bg-gray-50`}
                    >
                        <div className="h-10 w-10 rounded-full bg-gray-400 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-500">
                                {notification.time}
                                {notification.location && `, ${notification.location}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 border-t text-right">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    Clean all
                </Button>
            </div>
        </div>
    )
}

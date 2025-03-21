import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { ReactNode } from 'react'

interface Props {
    trigger?: ReactNode
    title?: ReactNode
    description?: ReactNode
    content?: ReactNode
}

const DialogComponent = ({ trigger, content, description, title }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && <DialogDescription>
                        {description}
                    </DialogDescription>}
                </DialogHeader>
                {content}
            </DialogContent>
        </Dialog>
    )
}

export default DialogComponent

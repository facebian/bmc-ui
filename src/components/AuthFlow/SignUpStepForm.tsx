import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

interface Props {
    changeStep: Dispatch<SetStateAction<number>>
}

const SignUpStepForm = ({ changeStep }: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission logic here
    }
    return (
        <Card className="w-full max-w-lg relative border-0 shadow-none pt-0 pb-0">
            <CardHeader className="text-center pt-8 pb-4">
                <h2 className="text-2xl font-bold">Sign Up to BeMyCoach</h2>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Mike Anderson"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Mike Anderson"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="mikeanderson@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm password</Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                        <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={handleCheckboxChange}
                            required
                        />
                        <Label
                            htmlFor="terms"
                            className="block text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree with
                            <a href="#" className="underline">
                                BeMyCoach Terms of Service
                            </a>
                            ,
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                            , and default
                            <a href="#" className="underline">
                                Notification Settings
                            </a>
                            .
                        </Label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-white py-6 mt-4"
                        onClick={() => changeStep((prev) => prev + 1)}
                    >
                        Sign Up
                    </Button>

                    <div className="text-center text-sm pt-2">
                        Already registered?{' '}
                        <a
                            href="#"
                            onClick={() => changeStep((prev) => prev - 1)}
                            className="text-primary font-medium"
                        >
                            Sign In
                        </a>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUpStepForm

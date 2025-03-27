/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { FancyMultiSelect } from '@/components/MultiSelect'
import RangeSlider from '@/components/Slider/RangeSlider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type AccountFormValues = z.infer<typeof formSchema>

const defaultValues: Partial<AccountFormValues> = {
    price: [0, 10],
    keywords: []
}

const formSchema = z.object({
    specialization: z.string({
        required_error: 'Please select a category to display.'
    }),
    keywords: z.array(
        z.string({
            required_error: 'Please add keywords location.'
        })
    ),
    location: z.string({
        required_error: 'Please select a location to display.'
    }),
    price: z.array(z.number({})),
    gender: z.enum(['male', 'female', 'all'], {
        required_error: 'You need to select a gender.'
    })
})

export function CoachSearchForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            specialization: '',
            location: '',
            price: [0, 10],
            keywords: []
        }
    })

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sport category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger
                                        size="default"
                                        className="w-full custom-height border-secondary border h-12"
                                    >
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="keywords"
                    render={() => (
                        <FormItem className="space-y-0">
                            <FormLabel className="font-semibold text-xs">Keywords</FormLabel>
                            <FancyMultiSelect
                                itemsList={[{ value: 'test', label: 'test' }]}
                                className="border border-input mt-2 border-secondary"
                                disabled={false}
                                selected={[{ value: 'test', label: 'test' }]}
                                setSelected={function (e: any): void {
                                    throw new Error('Function not implemented.')
                                }}
                                {...form}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Coaching location</FormLabel>
                            <Select
                                {...form}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-full border border-secondary custom-height">
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price Range</FormLabel>
                            <RangeSlider {...form} field={field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="!space-y-4 !mt-5 !mb-10">
                            <FormLabel className="font-semibold text-xs">Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex space-y-1"
                                >
                                    <FormItem className="flex items-center space-y-0 space-x-2 mt-1">
                                        <FormControl>
                                            <RadioGroupItem
                                                className="bg-white border border-secondary"
                                                value="male"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">Male</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-y-0 space-x-2">
                                        <FormControl>
                                            <RadioGroupItem
                                                className="bg-white border border-secondary"
                                                value="female"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">Female</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-y-0 space-x-2">
                                        <FormControl>
                                            <RadioGroupItem
                                                className="bg-white border border-secondary"
                                                value="all"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">All</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

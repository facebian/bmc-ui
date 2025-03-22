import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { Link } from 'react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { howToUseData } from '@/mocks'
import DialogComponent from '../DialogComponent'
import SignInDialogContent from '../AuthFlow/AuthDialogContent'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full bg-gray-100 py-12">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <Tabs defaultValue="trainee" className="w-[400px] p-0">
                            <TabsList className="grid w-full grid-cols-2 bg-secondary h-[40px] p-0">
                                <TabsTrigger
                                    className="data-[state=active]:bg-primary data-[state=active]:text-white bg-secondary cursor-pointer text-base"
                                    value="trainee"
                                >
                                    For Trainee
                                </TabsTrigger>
                                <TabsTrigger
                                    className="data-[state=active]:bg-primary data-[state=active]:text-white bg-secondary cursor-pointer text-base"
                                    value="coach"
                                >
                                    For Coach
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="trainee"></TabsContent>
                            <TabsContent value="coach"></TabsContent>
                        </Tabs>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="w-full max-w-3xl h-64 relative">
                            <div className="absolute w-40 h-40 bg-gray-200 rounded-full left-0 top-0 opacity-80"></div>
                            <div className="absolute w-48 h-48 bg-gray-200 rounded-full right-0 top-0 opacity-80"></div>
                            <div className="absolute w-56 h-56 bg-gray-200 rounded-full left-1/4 bottom-0 opacity-80"></div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <DialogComponent
                            trigger={
                                <Button className="bg-primary px-8 py-4 cursor-pointer min-w-[356px] text-base min-h-14">
                                    See your coach
                                </Button>
                            }
                            content={<SignInDialogContent />}
                        />
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-medium text-center mb-12">How to use</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {howToUseData.map(({ text }) => (
                            <div className="bg-gray-100 p-8 flex items-center justify-center">
                                <span className="text-8xl font-light text-gray-300">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-6"></div>
                            <h3 className="text-xl font-medium mb-2">
                                Over 504 sustainable objects
                            </h3>
                            <p className="text-sm text-gray-600">
                                We have collected and united real world objects according to country
                                and the classification. And we are constantly adding new ones.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-6"></div>
                            <h3 className="text-xl font-medium mb-2">
                                More than 61 types of activities
                            </h3>
                            <p className="text-sm text-gray-600">
                                Every day you can try new sport. Trainers will help you by giving
                                the task don't have time.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-6"></div>
                            <h3 className="text-xl font-medium mb-2">Only 1 subscription</h3>
                            <p className="text-sm text-gray-600">
                                A subscription to any text included in our site is per month. What
                                could be more convenient?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100">
                <div className="container max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-medium text-center mb-8">
                        Frequently Asked Questions | FAQs
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="bg-white mb-2 rounded">
                            <AccordionTrigger className="px-4">Question 1</AccordionTrigger>
                            <AccordionContent className="px-4">
                                Answer to question 1 goes here. This provides more detailed
                                information about the service.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="bg-white mb-2 rounded">
                            <AccordionTrigger className="px-4">Question 2</AccordionTrigger>
                            <AccordionContent className="px-4">
                                Answer to question 2 goes here. This provides more detailed
                                information about the service.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="bg-white rounded">
                            <AccordionTrigger className="px-4">Question 3</AccordionTrigger>
                            <AccordionContent className="px-4">
                                Answer to question 3 goes here. This provides more detailed
                                information about the service.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-white py-8 mt-auto">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-medium">BeMyCoach</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
                            <Link to="#" className="text-sm hover:no-underline">
                                For Trainee
                            </Link>
                            <Link to="#" className="text-sm hover:no-underline">
                                For Coach
                            </Link>
                            <Link to="#" className="text-sm hover:no-underline">
                                How to use
                            </Link>
                            <Link to="#" className="text-sm hover:no-underline">
                                Contact
                            </Link>
                        </div>

                        <Button className="bg-white text-primary hover:bg-gray-100 cursor-pointer">
                            Sign in
                        </Button>
                    </div>

                    <div className="text-center text-xs text-gray-400">© BeMyCoach 2023</div>
                </div>
            </footer>
        </div>
    )
}

import { useState } from 'react'
import SignInPreview from './SignInPreview'
import SignUpPreview from './SignUpPreview'
import SignUpStepForm from './SignUpStepForm'
import UserTypeSelection from './ChooseRoleStep'

const SignInDialogContent = () => {
    const [currentStep, setCurrentStep] = useState<number>(1)

    return (
        <>
            {currentStep === 1 && <SignInPreview changeStep={setCurrentStep} />}
            {currentStep === 2 && <SignUpPreview changeStep={setCurrentStep} />}
            {currentStep === 3 && <SignUpStepForm changeStep={setCurrentStep} />}
            {currentStep === 4 && <UserTypeSelection />}
        </>
    )
}

export default SignInDialogContent

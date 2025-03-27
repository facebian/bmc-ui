interface Props {
    icon: string
}

const Icon = ({ icon }: Props) => {
    return (
        <div>
            <img src={icon} alt="Logo" />
        </div>
    )
}

export default Icon

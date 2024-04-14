interface ButtonProps {
    title: string;
    onClick: (value: string) => void;
}

function Button({ title, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>{title}</button>
    )
}

export default Button;
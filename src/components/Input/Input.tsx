interface InputProps {
    onChange: (value: string) => void,
    label: string
}

function Input({ onChange, label }: InputProps) {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    return (
        <>
            <label>{label}</label>
            <input onChange={handleOnChange} type="text" />
        </>
    )
}

export default Input;
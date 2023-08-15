import { useState } from "react"

export const Select = ({ options, value, onChange, disabled, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen)
        }
    }

    const handleOptionClick = (option) => {
        if (!disabled) {
            onChange(option.value)
            toggleDropdown()
        }
    }

    return (
        <div>
            <div onClick={toggleDropdown}>
                {value ? options.find((option) => option.value === value)?.label : placeholder}
            </div>
            {isOpen && (
                <div>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            style={{cursor: disabled ? "not-allowed" : "pointer"}}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
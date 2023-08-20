import { useState } from "react"
import styles from "./style.module.scss"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

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
        <div className={styles.flexBox}>
            <label className="paragraph">Selecionar módulo</label>
            <div className={styles.divBox} onClick={toggleDropdown}>
                <div className="paragraph grey1">
                    {value ? options.find((option) => option.value === value)?.label : placeholder}
                </div>
                {isOpen ? <MdKeyboardArrowDown className="paragraph grey1" /> : <MdKeyboardArrowUp className="paragraph grey1" />}
            </div>
            {isOpen && (
                <div className={styles.itensBox}>
                    {options.map((option) => (
                        <div
                            className={styles.childDivBox}
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            style={{ cursor: disabled ? "not-allowed" : "pointer" }}
                        >
                            <div className="paragraph grey1 small">
                                {option.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
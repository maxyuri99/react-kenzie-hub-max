import { forwardRef, useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import styles from "./style.module.scss"

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className={styles.flexBox}>
            <label className="paragraph">{label}</label>
            <div>
                <input className="paragraph grey1" type={isHidden ? "password" : "text"} ref={ref} {...rest} />
                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibilityOff className="paragraph grey1 small"/> :  <MdVisibility className="paragraph grey1 small"/>}
                </button>
            </div>
            {error ? <p className="paragraph negative small">{error.message}</p> : null}
        </div>
    )
})
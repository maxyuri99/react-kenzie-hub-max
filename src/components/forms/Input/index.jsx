import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({error, label, ...rest}, ref) => {
    return (
        <div className={styles.flexBox}>
            <label className="paragraph">{label}</label>
            <input className="paragraph grey1" ref={ref} {...rest} />
            {error ? <p className="paragraph negative small">{error.message}</p> : null}
        </div>
    )
})
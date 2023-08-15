import { forwardRef, useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(false)

    return (
        <div>
            <label>{label}</label>
            <div>
                <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibilityOff /> :  <MdVisibility />}
                </button>
            </div>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})
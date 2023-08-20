import { Header } from "../Header"

export const DefaultTemplate = ({ children, userLogout }) => {
    return (
        <>
            <Header userLogout={userLogout} />
            {children}
        </>
    )
}
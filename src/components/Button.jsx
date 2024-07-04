import {useTheme} from '../themes/ThemeContext'

const Button = () => {

    const {theme, changeTheme} = useTheme();

    const changeMode = () => {
        if (theme === "light") {
            changeTheme("dark")
        } else {
            changeTheme("light")}
    }

    return (
        <>
            <button onClick={changeMode}>Change Theme</button>
        </>
    )
}

export default Button;
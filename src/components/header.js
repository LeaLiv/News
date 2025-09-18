import header from '../css/header.css'

export const Header = ({ title = "News website" }) => {
    return <header>
        <h1>{title}</h1>
    </header>
}
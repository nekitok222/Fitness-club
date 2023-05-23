import { Button } from "@mui/material"
import './header.scss'

const Header = () => {
    
    return (
        <div className="header">
            <div>Photo</div>
            <div className="header__info"> 
                <a href="#">О нас</a>
                <a href="#">Прайс</a>
                <a href="#">Купить абонемент</a>
                </div>
            <div className="header__auth">
                <Button variant="contained" color="success">Sign in</Button>
                <Button variant="contained" color="success">Sign in</Button>
            </div>
        </div>
    )
}

export default Header
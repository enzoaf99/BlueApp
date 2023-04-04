import '../css/NavBar.css'
import Logo from "../img/Logo.png";

export function NavBar() {

    return (
        <>
            <div className="nav">
                <div className='nav-logo'>
                    <img src={Logo} alt="BlueApp" width='200px' />
                </div>
                <div className='nav-list'>
                    <a href="#home" className="active">Inicio</a>
                    <a href="#calculator">Calculadora de conversion</a>
                    <a href="#news">Novedades</a>
                    <a href="#about">Nosotros</a>
                </div>

            </div>
        </>
    )

}
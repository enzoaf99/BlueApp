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
                    <a href="#calculator">Conversion de monedas</a>
                    <a href="#sueldobruto">Calcuar sueldo bruto</a>
                </div>

            </div>
        </>
    )

}
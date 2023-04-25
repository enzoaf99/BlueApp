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
                    <a className='nav-item' id='prox1' href="#calculator">Conversion de monedas</a>
                    <a className='nav-item' id='prox2' href="#sueldobruto">Calcular sueldo bruto</a>
                </div>

            </div>
        </>
    )

}

//Muestra popup indicando que estara proximamente
    window.onload = function leerTexto(){
        let prox1 = document.getElementById('prox1')
        let prox2 = document.getElementById('prox2')
        if (prox1) {
            prox1.addEventListener("click", mostrarPopUp);
        }
        if (prox2) {
            prox2.addEventListener("click", mostrarPopUp);
        }
    }
    
    function mostrarPopUp() {
        alert("Disponible proximamente")
      }


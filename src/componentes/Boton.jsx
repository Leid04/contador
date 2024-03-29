import '../styles/Boton.css';
const Boton = ({ texto, esBotonClick, manejarClick }) => {
    return (
        <button
            className={ esBotonClick ? "boton-click" : "boton-reiniciar" }
            onClick={manejarClick}>
        {texto}</button>
    );
}
export default Boton;
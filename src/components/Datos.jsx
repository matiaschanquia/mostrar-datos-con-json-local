import Dato from "./Dato";

const Datos = (props) => {
    return(
        <div className="container-datos">
            {
                props.datos.map(item => (
                    <Dato key={item.id} nombre={item.nombre} apellido={item.apellido} edad={item.edad} foto={item.foto}/>
                ))
            }
        </div>
    );
};

export default Datos;
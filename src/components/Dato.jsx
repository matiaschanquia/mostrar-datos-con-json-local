import { useEffect, useRef } from "react";

const Dato = (props) => {

    const myDivRef = useRef(null);

    const handleResize = () => {
        myDivRef.current.style.height = myDivRef.current.style.width;
    }

    useEffect(() => {
    
        const observer = new ResizeObserver(handleResize);
        observer.observe(myDivRef.current);
    
        return () => {
            observer.disconnect();
        };
      }, []);
    

    return(
        <div className="container-dato">
            <div ref={myDivRef}>
                <img src={props.foto} alt={`${props.nombre} ${props.apellido}`} />
            </div>
            <h2>
                {props.nombre} {props.apellido}
            </h2>
            <h3>{props.edad} años</h3>
        </div>
    );
};


export default Dato;
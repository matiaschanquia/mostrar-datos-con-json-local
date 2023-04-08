import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

const Dato = (props) => {

    const myDivRef = useRef(null);

    const [isLoadingImg, setIsLoadingImg] = useState(true);

    const handleResize = () => {
        myDivRef.current.style.height = myDivRef.current.style.width;
    }

    const handleLoad = () => {
        setIsLoadingImg(false);
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
            <div ref={myDivRef} >
                {
                    isLoadingImg && <Loader/>
                }
                <img onLoad={handleLoad} style={{display: isLoadingImg ? "none" : "block"}} src={props.foto} alt={`${props.nombre} ${props.apellido}`} />
            </div>
            <h2>
                {props.nombre} {props.apellido}
            </h2>
            <h3>{props.edad} años</h3>
        </div>
    );
};


export default Dato;
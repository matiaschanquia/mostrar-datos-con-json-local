import { useEffect, useState } from "react"
import Datos from "./components/Datos";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function App() {

  const [datos, setDatos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <div className="container-app">
      <main className="main">
        <h1 className="titulo">Datos personas desde un JSON local</h1>
        {
          isLoading ? (
            <Skeleton count={5} height={100}/>
          ) : (
            <Datos datos={datos}/>
          )
        }
      </main>
      <footer className="footer">
        <a href="#" target="_blank">Matias Chanquia Dev</a>
      </footer>
    </div>
  )
}

export default App

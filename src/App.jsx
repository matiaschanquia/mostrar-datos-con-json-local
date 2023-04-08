import { useEffect, useState } from "react"
import Datos from "./components/Datos";

function App() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("./src/datos.json")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <div className="container-app">
      <main className="main">
        <h1 className="titulo">Datos personas desde un JSON local</h1>
        <Datos datos={datos}/>
      </main>
      <footer className="footer">
        <a href="#" target="_blank">Matias Chanquia Dev</a>
      </footer>
    </div>
  )
}

export default App

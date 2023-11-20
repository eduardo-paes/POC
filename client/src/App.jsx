import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState("");
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setApiData(JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Busca dados na API</h1>
      </div>
      <div className="card">
        <button onClick={handleChange}>Buscar</button>
        <h4>Mensagem do Servidor:</h4>
        <p
          style={{
            background: "#dcdcdc",
            color: "#121212",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {apiData}
        </p>
      </div>
    </>
  );
}

export default App;

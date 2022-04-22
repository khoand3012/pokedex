import "./App.css";
import { useEffect, useState } from "react";
import Details from "./components/Details/Details";
import ListPkm from "./components/ListPkm/ListPkm";
import ImagePkm from "./components/ImagePkm/ImagePkm";
import axios from "axios";
import { AppConfigProvider } from "./contexts/AppContext";

function App() {
  const [pkmList, setPkmList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const dex = response.data.results;
      setPkmList(dex);
    });
  }, []);

  return (
    <div className="App">
      <AppConfigProvider value={pkmList}>
        <div className="container-lg">
          <Details />
          <div className="container-sm">
            <ImagePkm />
            <ListPkm />
          </div>
        </div>
      </AppConfigProvider>
    </div>
  );
}

export default App;

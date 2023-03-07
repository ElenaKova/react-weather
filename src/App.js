
import "./App.css";
// import Loader from "react-loader-spinner";

import SearchEngine from "./Search";
import Current from "./CurrentMain";
// import ShowForecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        <SearchEngine defaultCity="Rome" />
        <Current />
        {/* <ShowForecast /> */}
         
      </div>
      <footer>
          This project was coded by Elena Kovalenko and is{" "}
          <a
            href = "https://github.com/ElenaKova/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
    </div>
  );
}
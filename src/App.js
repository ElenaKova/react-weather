import "./App.css";
import SearchEngine from "./Weather";
// import Current from "./CurrentMain";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        <SearchEngine defaultCity="Kyiv" />
      </div>
      
      <footer>
        <div>
          <p className="pt-3"> This project was coded by Elena Kovalenko and is {
            " "
          }
          <a
            href = "https://github.com/ElenaKova/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
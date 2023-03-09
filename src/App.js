import "./App.css";
import SearchEngine from "./Weather";
// import Current from "./CurrentMain";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        <SearchEngine defaultCity="Rome" />
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
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="Weather App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/kimberleythornton_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kimberley Thornton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kimberleyjthornton-debug/react-wearher-app-kjt"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="Weather App">
      <div className="container">
        <h1>Weather Application</h1>
        <button ClassName="btn btn-primary">Hello</button>
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

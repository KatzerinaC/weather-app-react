
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin"/>
      </div>
      <footer>
        <a
          href="https://github.com/KatzerinaC/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code on gitHub
        </a>{" "}
        and{" "}
        <a
          href="https://fabulous-torrone-617c89.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify{" "}
        </a>
        coded by Katerina Carreno{" "}
      </footer>
    </div>
  );
}



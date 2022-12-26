
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>
      <footer>
        <a
          href="https://github.com/KatzerinaC/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code on gitHub
        </a>{" "}
        and{" "}
        <a
          href="https://sensational-baklava-8a1a19.netlify.app/"
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



import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import TopMobile from "./components/TopMobile";
import PageContainer from "./components/PageContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w3-theme-15">
      <Top />
      <TopMobile />
      <PageContainer />
      <Footer />
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;

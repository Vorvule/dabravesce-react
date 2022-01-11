import "./App.css";
import Top from "./components/Top/Top";
import ColumnsContainer from "./components/ColumnsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App w3-theme-15">
      <Top />
      <ColumnsContainer />
      <Footer />
    </div>
  );
}

export default App;

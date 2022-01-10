import "./App.css";
import Top from "./components/Top/Top";
import TopMobile from "./components/Top/TopMobile";
import ColumnsContainer from "./components/ColumnsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w3-theme-15">
      <Top />
      <TopMobile />
      <ColumnsContainer />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Top from "./components/Top/Top";
import Columns from "./components/Columns";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Top />
      <Columns />
      <Footer />
    </div>
  );
}

export { App };

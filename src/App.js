import "./App.css";
import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

export function App() {
  return (
    <div className="App">
      <Top />
      <Columns />
      <Footer />
    </div>
  );
}

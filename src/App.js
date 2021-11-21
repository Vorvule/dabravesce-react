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
    </div>
  );
}

export default App;

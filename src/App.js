import Topbar from "./components/Topbar"
import './App.css';
import About from "./pages/About";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Header/> */}
      <About/>
    </div>
  );
}

export default App;

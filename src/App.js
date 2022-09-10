import "./App.css";
import { Header, Footer, Main } from "./components";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

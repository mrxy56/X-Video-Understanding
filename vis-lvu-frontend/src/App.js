import './App.css';
import { Header, Footer } from "./components/index";
import { AllRoutes } from './routes/AllRoutes';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  </>
  );
}

export default App;

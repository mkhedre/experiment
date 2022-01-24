import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';
function App() {
   
  return (
    <div className="App">
       
        <BrowserRouter>
          <Header />
         <div className='container'>
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbid" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
         </div>
          <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
 
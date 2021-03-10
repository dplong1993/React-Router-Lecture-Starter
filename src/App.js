// import { Movies, MovieDetails, Stocks, Home } from './components';

import Home from './components/Home';
import Movies from './components/Movies';
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <Home />
      <Stocks />
      <Movies />
    </div>
  );
}

export default App;

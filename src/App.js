import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeBlog from './HomeBlog';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24 container mx-auto">
        <Hero />
        <HomeBlog />
      </div>
    </>
  );
}

export default App;

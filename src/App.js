import NavSection from './components/nav/NavSection';
import MainSection from './components/MainSection';
import './App.css';
import NewsSection from './components/NewsSection';
import ProductsFunction from './components/ProductsSection';

function App() {
  return (
    <div className="App">
      <NavSection/>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-start-1 col-end-3'>
          <MainSection />
        </div>
        <div className='col-start-3 h-80'>
          <NewsSection />
        </div>        
      </div>
      <div>
        <ProductsFunction/>
      </div>
      
    </div>
  );
}

export default App;

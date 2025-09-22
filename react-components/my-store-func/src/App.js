import './components/store-func/css/main.css';
import { item } from './components/store-func/data.js';
import ShopItemFunc from './components/store-func/ShopItemFunc.js';

function App() {
  return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
}

export default App;



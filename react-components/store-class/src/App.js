import './components/store-class/css/main.css';
import { item } from './components/store-class/data.js';
import ShopItemClass from './components/store-class/ShopItemClass.js';

function App() {
  return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  </div>
)
}

export default App;


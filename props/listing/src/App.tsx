import { Listing } from './cmponents/Listing.tsx'
import type { Item } from './types/types.tsx';
import './App.css'
import etsyData from './data/etsy.json';
console.log(etsyData);

function App() {
    const items: Item[] = etsyData
    .filter((item) => item.state === 'active')
    .map((item) => ({
      listing_id: item.listing_id,
      url: item.url || '',
      MainImage: item.MainImage?.url_570xN || '',
      title: item.title || '',
      currency_code: item.currency_code || '',
      price: item.price || '',
      quantity: item.quantity || 0,
    }));
     

    return (
        <Listing items={items} />
    )
}

export default App


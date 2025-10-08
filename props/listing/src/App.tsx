import { Listing } from './cmponents/Listing.tsx'
import type { Item } from './types/types.tsx';
import './App.css'
import etsyData from './data/etsy.json';

function App() {
     const items = etsyData.filter((item: any): item is Item => {
        if (!item || typeof item !== 'object') return false;
        
        return (
            typeof item.listing_id === 'number' &&
            typeof item.url === 'string' && 
            item.url !== '' && 
            item.MainImage != null && 
            typeof item.MainImage === 'object' &&
            typeof item.MainImage.url_570xN === 'string' &&
            item.MainImage.url_570xN !== '' &&
            typeof item.title === 'string' &&
            item.title !== '' &&
            typeof item.currency_code === 'string' &&
            item.currency_code !== '' &&
            typeof item.price === 'string' &&
            item.price !== '' &&
            typeof item.quantity === 'number' &&
            !isNaN(item.quantity) 
        );
    });


    return (
        <Listing items={items} />
    )
}

export default App

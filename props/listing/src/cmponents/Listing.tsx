import etsyData from '../data/etsy.json';


interface Item {
    listing_id: number;
    url: string;
    MainImage?: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}



export function Listing() {
    const items: Item[] = etsyData as Item[];

    const currentPrice = (item: Item) => {
        if (item.currency_code === 'USD') {
            return `$${item.price}`;
        } else if (item.currency_code === 'EUR') {
            return `€${item.price}`;
        } else {
            return `${item.price} GBP`;
        }
    };
    const getStockClass = (item: Item) => {
        if (item.quantity <= 10) return 'stock-low';
        if (item.quantity > 20) return 'stock-high';
        return 'stock-medium';
    };

    return (
        <div className="container">
            <div className="product-grid">{items.map((item) =>
                <div className="product-card" key={item.listing_id}>
                    <img src={item.MainImage?.url_570xN} alt={item.url} className="product-image"></img>
                    <div className="product-info">
                        <h3 className="product-title">{item.title ? (item.title.length <= 50 ? item.title : item.title.slice(0, 50) + "...") : ''}</h3>
                        <div className="price-container">
                            <div className="product-price">{currentPrice(item)}</div>
                            <span className={`stock-badge ${getStockClass(item)}`}>
                                {item.quantity} left
                            </span>
                        </div>
                    </div>
                </div>
            )}</div>
        </div >
    )
}

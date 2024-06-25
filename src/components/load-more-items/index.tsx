import { useEffect, useState, useRef } from "react";
import "./styles.css";

interface Product<T = number> {
  title: string;
  price?: T;
  id: number;
  thumbnail: string;
  total?: string;
}

export default function LoadMoreItems() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const scrollPositionRef = useRef(0);

  async function fetchItems() {
    try {
      setLoading(true);
      scrollPositionRef.current = window.pageYOffset;

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result: { products: Product[] } = await response.json();

      if (result && result.products && result.products.length > 0) {
        setItems((prevItems: Product[]) => {
          const newItems = result.products.filter(
            (newItem) =>
              !prevItems.some((existingItem) => existingItem.id === newItem.id)
          );
          return [...prevItems, ...newItems];
        });
        setLoading(false);

        //Restore scroll position after state update
        setTimeout(() => {
          window.scrollTo(0, scrollPositionRef.current);
        }, 0);
      }
      console.log(result);
    } catch (e: any) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [count]);

  useEffect(() => {
    if (items && items.length >= 194) setDisableButton(true);
  }, [items]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {items && items.length > 0
          ? items.map((item: Product) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <h3>
                  <p>{item.title}</p>
                </h3>
                <p className="price">${item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          disabled={disableButton}
          className="button-container"
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
          }}
        >
          Load more products
        </button>
        {disableButton ? <p>Total products {items.length}</p> : null}
      </div>
    </div>
  );
}

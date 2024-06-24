import { useEffect, useState } from "react";

// interface ItemProps<T = number>{
//     url: string;
//     limit ?: T;
// }

export default function LoadMoreItems() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [count, setCount] = useState(0);

  async function fetchItems() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.items && result.items.length) {
        setItems(result.items);
        setLoading(false);
      }

      console.log(result);
    } catch (e: any) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {items && items.length
          ? items.map((item: any) => (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button>Load more products</button>
      </div>
    </div>
  );
}

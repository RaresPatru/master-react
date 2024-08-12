import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollProgress({
  url,
  limit,
}: {
  url: string;
  limit: number;
}) {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}`);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e: any) {
      console.error(e);
      setErrorMessage(`This mighty ${e.name} is caused by: ${e.message}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url, limit]);

  if (errorMessage !== null) {
    return <p className="stylish-error">{errorMessage}</p>;
  }
  console.log(data, loading);
  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
    </div>
  );
}

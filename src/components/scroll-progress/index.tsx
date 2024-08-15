import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollProgress({
  url,
  limit,
}: {
  url: string;
  limit: number;
}) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

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

  function hadleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", hadleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage !== null) {
    return <p className="stylish-error">{errorMessage}</p>;
  }

  if (loading) {
    return <div>Loading data.. Please wait ^_^</div>;
  }

  console.log(scrollPercentage);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-tracking-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

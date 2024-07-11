import { useEffect, useRef } from "react";
import "./styles.css";

const ScrollableContainer = ({
  children,
  className,
}: {
  children: any;
  className: any;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;

    const handleWheel = (event: any) => {
      event.preventDefault();

      container.scrollLeft += event.deltaY;
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollableContainer;

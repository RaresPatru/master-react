import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreItems from "./components/load-more-items";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-theme";
import ScrollProgress from "./components/scroll-progress";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star rating component */}
      {/* <StarRating numOfStars={10} /> */}
      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={3} /> */}
      {/* Item loader component */}
      {/* <LoadMoreItems /> */}
      {/* Tree view componenet/menu UI component/recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}
      {/* QR Code generator using 3'rd party library */}
      {/* <QrCodeGenerator type="text" name="qr-code" /> */}
      {/* Light-Dark theme toggle */}
      {/* <LightDarkMode /> */}
      {/* Scroll progress tracking bar */}
      <ScrollProgress url={`https://dummyjson.com/products`} limit={100} />
    </div>
  );
}

export default App;

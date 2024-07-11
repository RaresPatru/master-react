import MenuList from "./menu-list";
import ScrollableContainer from "./scroll-X";
import "./styles.css";

export default function TreeView({ menus = [] }: { menus: any[] }) {
  return (
    <ScrollableContainer className="custom-scroll-container">
      <div className="tree-view-container">
        <MenuList list={menus} />;
      </div>
    </ScrollableContainer>
  );
}

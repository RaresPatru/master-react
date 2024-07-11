import MenuItem from "./menu-item";

export default function MenuList({ list = [] }: { list: any[] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

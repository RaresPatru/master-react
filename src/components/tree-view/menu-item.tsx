import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

export default function MenuItem({ item }: { item: any }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<any>({});

  function handleToggleChildren(getCurrentLabel: any) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="yellow" size={15} />
            ) : (
              <FaPlus color="yellow" size={15} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

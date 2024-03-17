//single selection
//multiple selection
import { useState } from "react";
import data from "./interfaceData";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState<null | string>(null);
  const [multiSelection, setMultiSelection] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<any[]>([]);
  function resetState(): void {
    setSelected(null);
    setMultiple([]);
  }
  function handleSelection(getCurrentId: null | string): void {
    if (multiSelection === false)
      setSelected(getCurrentId === selected ? null : getCurrentId);
    else {
      let cpyMultiple = [...multiple];
      const findIndexOfCurrentId: number = cpyMultiple.indexOf(getCurrentId);
      findIndexOfCurrentId === -1
        ? cpyMultiple.push(getCurrentId)
        : cpyMultiple.splice(findIndexOfCurrentId, 1);
      setMultiple(cpyMultiple);
    }
  }
  return (
    <div className="wrapper">
      <button
        onClick={(): void => {
          resetState();
          setMultiSelection(!multiSelection);
        }}
        className={multiSelection ? "clicked" : "initial"}
      >
        {multiSelection ? "Multiple Selection" : "Single Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className={multiSelection ? "itemClicked" : "itemInitial"}>
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

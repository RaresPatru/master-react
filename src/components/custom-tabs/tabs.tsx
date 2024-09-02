import { useState } from "react";

export default function Tabs({
  tabsContent,
  onChange,
}: {
  tabsContent: any;
  onChange: any;
}) {
  const [currentTabIndex, setCurrentTabIndex] = useState<any>(null);

  function handleOnClick(getCurrentIndex: any) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem: any, index: any) => {
          return (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={tabItem.label}
            >
              <span className="label">{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

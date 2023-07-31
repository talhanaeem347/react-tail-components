import React, { useState, ReactNode, Children } from "react";

interface SidebarPropsInterface {
  headerText?: string;
  position: "left" | "right" | "bottom" | "top";
  onSelect?: (value: string) => void;
  children: ReactNode;
  bgClasses?: string;
  headerClasses?: string;
  tabClasses?: string;
}

const Sidebar: React.FC<SidebarPropsInterface> = ({
  onSelect,
  children,
  headerText,
  bgClasses,
  headerClasses,
  tabClasses,
  position,
}) => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);

  const bgClass = (): string => {
    const classes = [
      "fixed",
      position === "left" || position === "top"
        ? "top-0 left-0"
        : position === "right"
        ? "top-0 right-0"
        : "bottom-0 left-0",
      position === "left" || position === "right" ? "w-1/5" : "w-screen",
      position === "top" || position === "bottom" ? "h-64" : "h-screen",
      "bg-gray-800",
      "text-white",
      "pb-4",
      "transform",
      active
        ? position === "left"
          ? "translate-x-0"
          : position === "right"
          ? "-translate-x-0"
          : position === "top"
          ? "translate-y-0"
          : "-translate-y-0"
        : position === "left"
        ? "-translate-x-full"
        : position === "right"
        ? "translate-x-full"
        : position === "top"
        ? "-translate-y-full"
        : "translate-y-full",
      "transition-all",
      "duration-800",
      "ease-in-out",
      "overflow-y-auto",
    ];

    return classes.join(" ");
  };

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setSelected(index);
    onSelect && onSelect((e.target as HTMLDivElement).innerText);
  };

  return (
    <>
      {!active ? (
        <div
          onClick={() => setActive(true)}
          className="m-2 border-2 rounded w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      ) : (
        <div className={bgClass()}>
          <div className={bgClasses}>
            <div className="text-2xl font-bold bg-gray-600 px-3 flex justify-between">
              {headerText && <h1 className={headerClasses}>{headerText}</h1>}
              <div
                onClick={() => setActive(false)}
                className="m-1 mr-0 border-2 rounded w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </div>
            <div className="px-2">
              {Children.map(children, (child, index) => {
                return (
                  <div
                    className={`my-2 p-1 text-xl hover:bg-gray-400 ${
                      selected === index ? "bg-slate-600" : ""
                    }`}
                    onClick={(e) => handleSelect(e, index)}
                    key={index}
                  >
                    <div className={tabClasses}>
                      <a href="#">{child}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

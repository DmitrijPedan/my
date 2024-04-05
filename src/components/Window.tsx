import classNames from "classnames";
import React, { useState } from "react";

const ControlButton = ({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...rest} className={classNames("h-3 w-3 rounded-full", className)}></button>;
};

function Window() {
  const [isMaximized, setIsMaximized] = useState(false);
  return (
    <div
      className={classNames(
        "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-md border border-brand-bg-main transition-all",
        isMaximized ? "h-full w-full" : "h-[93%] w-[95vw]"
      )}>
      <header className="bg-brand-bg-muted p-1">
        <div className="flex p-2">
          <ControlButton className="mr-2 bg-red-500"></ControlButton>
          <ControlButton className="mr-2 bg-yellow-500"></ControlButton>
          <ControlButton
            className="bg-green-500"
            onClick={() => setIsMaximized((prev) => !prev)}></ControlButton>
        </div>
      </header>
      <main className="h-full w-full bg-brand-bg-main">Some content</main>
    </div>
  );
}

export default Window;

import classNames from "classnames";

export type DeviceMockupsProps = {
  image: string;
  className?: string;
};

const deviceBorderColor = "border-gray-500";
const deviceBgColor = "bg-gray-500";

export const MobileMockup = ({ image, className }: DeviceMockupsProps) => {
  return image ? (
    <div
      className={classNames(
        "relative w-48 max-w-full rounded-xl border bg-black p-1 sm:border-2",
        deviceBorderColor,
        className
      )}>
      <Camera className="h-2 w-4/12" />
      <Buttons />
      <div className="aspect-phone overflow-hidden rounded-md sm:rounded-lg">
        <img className="block h-full w-full" src={image} alt="" />
      </div>
    </div>
  ) : null;
};

export const TabletMockup = ({ image, className }: DeviceMockupsProps) => {
  return image ? (
    <div
      className={classNames(
        "relative w-80 max-w-full rounded-xl border bg-black p-1 sm:rounded-2xl sm:border-2 sm:p-1.5",
        deviceBorderColor,
        className
      )}>
      <Camera className="w-2/12" />
      <Buttons />
      <div className="overflow-hidden rounded-md sm:rounded-lg">
        <img src={image} alt="" />
      </div>
    </div>
  ) : null;
};

export const DesktopMockup = ({ image, className }: DeviceMockupsProps) => {
  return image ? (
    <div className={classNames("w-[768px] max-w-full", className)}>
      <div
        className={classNames(
          "relative border bg-black p-1.5 pb-4 sm:rounded-md sm:border-2 sm:p-2 sm:pb-6",
          deviceBorderColor
        )}>
        <div className="overflow-hidden">
          <img src={image} alt="" />
        </div>
        <span className="absolute bottom-2 right-4 h-[2px] w-[2px] rounded-full bg-green-500" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className={classNames(
            "aspect-[3/4] w-1/12 bg-gradient-to-r from-black via-gray-800 via-60% to-black"
          )}></div>
        <div className={classNames("h-1 w-4/12 bg-gradient-to-r from-black via-gray-800 to-black")}></div>
      </div>
    </div>
  ) : null;
};

const Camera = ({ className }: { className: string }) => {
  return (
    <span
      className={classNames(
        "absolute right-1/2 top-0 z-[1] flex h-[3%] translate-x-1/2 items-center justify-center rounded-b bg-black",
        className
      )}>
      <span className="xs:h-1.5 xs:w-1.5 h-1 w-1 rounded-full border border-gray-600 bg-gray-700 sm:h-1.5 sm:w-1.5" />
    </span>
  );
};

const Buttons = () => {
  return (
    <>
      <span
        className={classNames(
          "absolute right-0 top-[10%] h-[12%] w-[2px] translate-x-full rounded-r-sm sm:w-[3px]",
          deviceBgColor
        )}
      />
      <span
        className={classNames(
          "absolute right-0 top-[27%] h-[5%] w-[2px] translate-x-full  rounded-r-sm sm:w-[3px]",
          deviceBgColor
        )}
      />
    </>
  );
};

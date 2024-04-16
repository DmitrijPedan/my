import classNames from "classnames";
import { useEffect, useState } from "react";
import { DesktopMockup, MobileMockup, TabletMockup } from "src/components/device-mockups/DevicesMockups";
import type { Project } from "src/constants/projects";

function DevicesMockupsSection({
  detailedInfo,
  className,
}: {
  detailedInfo: Project["detailedInfo"];
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!detailedInfo?.devices) return;
    const images = [detailedInfo.devices.mobile, detailedInfo.devices.tablet, detailedInfo.devices.desktop];
    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, []);

  return detailedInfo?.devices ? (
    <div
      className={classNames(
        "relative mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center sm:flex-row md:justify-between",
        !loaded ? "h-0 opacity-0" : "animate-fade-in-sm",
        className
      )}>
      <div className="relative z-10 order-1 max-w-full p-2 sm:p-4 md:order-2 md:-mt-96 lg:ml-20">
        <MobileMockup image={detailedInfo.devices.mobile} />
      </div>
      <div className="relative z-10 order-2 max-w-full p-2 sm:p-4 md:order-3 md:-mt-80 md:mr-4">
        <TabletMockup image={detailedInfo.devices.tablet} />
      </div>
      <div className="order-3 w-full p-2 sm:p-4 md:order-1">
        <DesktopMockup image={detailedInfo.devices.desktop} className="mx-auto" />
      </div>
    </div>
  ) : null;
}

export default DevicesMockupsSection;

import classNames from "classnames";
import { DesktopMockup, MobileMockup, TabletMockup } from "src/components/device-mockups/DevicesMockups";
import type { Project } from "src/constants/projects";

function DevicesMockupsSection({
  detailedInfo,
  className,
}: {
  detailedInfo: Project["detailedInfo"];
  className?: string;
}) {
  return detailedInfo?.devices ? (
    <div
      className={classNames(
        "relative mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center sm:flex-row md:justify-between",
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

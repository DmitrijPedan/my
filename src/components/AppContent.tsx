import SocialLinks from "src/components/SocialLinks";
import Page from "src/layout/Page";

function AppContent() {
  return (
    <Page>
      <div className="flex py-10">
        <div className="sticky top-0 w-5/12 self-start">
          <div className="">
            <h1 className="text-xl sm:text-2xl md:text-3xl">Dmitriy Pedan</h1>
            <h2>Frontend Engineer</h2>
            <SocialLinks className="mt-10" />
          </div>
        </div>
        <div className="w-7/12">
          <div className="">
            <h1 className="text-lg font-thin sm:text-xl md:text-2xl">About</h1>
          </div>
        </div>
      </div>
    </Page>
  );
}
export default AppContent;

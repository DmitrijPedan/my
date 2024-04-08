import BorderAnimatedContainer from "src/components/BorderAnimatedContainer";
import Page from "src/layout/Page";

function AppContent() {
  return (
    <Page>
      <div className="flex min-h-[93vh] items-center justify-center">
        <BorderAnimatedContainer className="p-6">
          <h1 className="text-5xl">dp</h1>
        </BorderAnimatedContainer>
      </div>
    </Page>
  );
}
export default AppContent;

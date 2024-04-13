import GoBackButton from "src/components/buttons/GoBackButton";
import { Page } from "src/layout";

export function NotFoundPage() {
  return (
    <Page className="flex flex-col items-center justify-center">
      <h1 className="mb-8  max-w-xl text-center text-2xl leading-normal sm:text-3xl lg:text-4xl">
        Oops! <br /> You&apos;ve Discovered Uncharted Territory...
      </h1>
      <p className="mb-14 max-w-2xl text-center text-base leading-relaxed sm:text-lg lg:text-xl">
        Hey there, adventurer! It looks like you&apos;ve taken a turn into a digital realm that even we
        haven&apos;t explored yet. Don&apos;t worry, though – no web wanderer gets left behind. Let&apos;s
        navigate you back to familiar lands.
      </p>
      <GoBackButton className="mt-8" />
    </Page>
  );
}

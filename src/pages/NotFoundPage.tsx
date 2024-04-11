import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/"
        className="group mt-8 flex items-center text-xl font-bold text-black transition-colors hover:text-emerald-500 dark:text-white">
        <ArrowLongLeftIcon className="mr-2 inline-block h-7 w-7 transition-transform group-hover:-translate-x-1" />
        <span>Home</span>
      </NavLink>
    </Page>
  );
}

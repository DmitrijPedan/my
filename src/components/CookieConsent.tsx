import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Cookie from "js-cookie";
import React from "react";
import { useEffect, useState } from "react";
import useAppContext from "src/lib/hooks/useAppContext";

const COOKIE_CONSENT_KEY = "dp_portfolio.cookie_consent";

type ConsentItem = {
  name: string;
  displayName: string;
  description: string;
  readonly: boolean;
  checked: boolean;
  callBacks: { (): void }[];
};

type Consent = {
  items: ConsentItem[];
};

const defaultConsent: Consent = {
  items: [
    {
      name: "strictly_necessary",
      displayName: "Strictly necessary",
      description:
        "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      readonly: true,
      checked: true,
      callBacks: [],
    },
    {
      name: "performance",
      displayName: "Performance",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      readonly: false,
      checked: false,
      callBacks: [(window as any).gaConsentGranted],
    },
  ],
};

type ConsentDataForSaving = {
  isInteracted: boolean;
  values: Record<ConsentItem["name"], ConsentItem["checked"]>;
};

const getSavedConsent = (): ConsentDataForSaving | null => {
  try {
    const consent = Cookie.get(COOKIE_CONSENT_KEY);
    return consent ? JSON.parse(consent) : null;
  } catch (e) {
    return null;
  }
};

const getDataForSaving = (consent: Consent | null): ConsentDataForSaving | null => {
  if (!consent) return null;
  return {
    isInteracted: true,
    values: consent.items.reduce(
      (acc, item) => {
        acc[item.name] = item.checked;
        return acc;
      },
      {} as ConsentDataForSaving["values"]
    ),
  };
};

const saveConsentData = (data: ConsentDataForSaving | null) => {
  if (!data) return;
  Cookie.set(COOKIE_CONSENT_KEY, JSON.stringify(data), { expires: 365 });
};

function CookieConsent() {
  const { showCookieConsent, setShowCookieConsent } = useAppContext();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [canBeSaved, setCanBeSaved] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const saved: ConsentDataForSaving | null = getSavedConsent();
    if (saved) {
      setConsent({
        ...defaultConsent,
        items: defaultConsent.items.map((item) => ({
          ...item,
          checked: saved.values[item.name] ?? item.checked,
        })),
      });
    } else {
      setConsent(defaultConsent);
      setTimeout(() => setShowCookieConsent(true), 3000);
    }
  }, []);

  useEffect(() => {
    if (!consent) return;
    setCanBeSaved(Boolean(consent.items.filter((item) => !item.readonly).find((i) => i.checked)));
  }, [consent]);

  const checkOrSaveHandler = () => {
    if (!consent) return;
    if (canBeSaved) {
      saveConsentData(getDataForSaving(consent));
      consent.items.forEach((item) => {
        if (item.checked) {
          item.callBacks.forEach((cb) => cb());
        }
      });
      setShowCookieConsent(false);
    } else {
      setConsent({
        ...consent,
        items: consent.items.map((i) => ({ ...i, checked: !i.readonly ? true : i.checked })),
      });
    }
  };

  const declineAllHandler = () => {
    if (!consent) return;
    const updated = {
      ...consent,
      items: consent.items.map((i) => ({ ...i, checked: !i.readonly ? false : i.checked })),
    };
    setConsent(updated);
    saveConsentData(getDataForSaving(updated));
    setShowCookieConsent(false);
  };

  return showCookieConsent ? (
    <div className="fixed bottom-0 left-0 z-50 w-full p-4 xs:max-w-[350px]">
      <div className="main-bg-color main-text-color w-full animate-fade-in-md rounded-lg border border-slate-400 p-2 text-sm text-gray-800 dark:border-white">
        <header className="flex justify-between">
          <button aria-label="Close cookie consent popup" className=" ml-auto hover:scale-110">
            <XMarkIcon className="h-6 w-6" onClick={() => setShowCookieConsent(!showCookieConsent)} />
          </button>
        </header>
        <p className="mb-4 text-center text-base font-bold">This website uses cookies</p>
        <p className="mb-3 text-xs">
          We use cookies to improve user experience. Choose what cookies you allow us to use.{" "}
          <button className="primary-text-color" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "less" : "more"}
          </button>
        </p>
        <div className="mb-3 flex flex-col">
          {consent &&
            consent.items.map((item) => (
              <div key={item.name} className="mb-2 flex flex-wrap items-center text-base sm:text-sm">
                <input
                  id={item.name}
                  type="checkbox"
                  readOnly={item.readonly}
                  checked={item.checked}
                  disabled={item.readonly}
                  onChange={(e) => {
                    setConsent({
                      ...consent,
                      items: consent.items.map((i) => {
                        if (i.name === item.name) {
                          return { ...i, checked: e.target.checked };
                        }
                        return i;
                      }),
                    });
                  }}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-sky-600 focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600"
                />
                <label htmlFor={item.name} className="ms-2 font-medium">
                  {item.displayName}
                </label>
                {showDetails && <p className="muted-text-color pl-6 text-xs">{item.description}</p>}
              </div>
            ))}
        </div>
        <footer className="flex justify-center space-x-2 pb-2">
          <CTAButton
            aria-label="Save current cookie preferences and exit"
            className={classNames(
              canBeSaved ? "!border-sky-500 bg-sky-500 text-white" : "hover:text-sky-500"
            )}
            onClick={checkOrSaveHandler}>
            {canBeSaved ? "Save and exit" : "Check all"}
          </CTAButton>
          <CTAButton
            aria-label="Decline all cookie preferences and exit"
            className="hover:text-sky-500"
            onClick={declineAllHandler}>
            Decline all
          </CTAButton>
        </footer>
      </div>
    </div>
  ) : null;
}

function CTAButton({ children, className, ...rest }: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        "min-w-32 rounded-full border border-slate-400 px-3 py-1 text-base sm:text-sm dark:border-white",
        className
      )}
      {...rest}>
      {children}
    </button>
  );
}

export default CookieConsent;

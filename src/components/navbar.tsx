"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TABS = ["Home", "Blogs", "TIL", "Experience"];
export function Navbar() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab, activeTabElementRef, containerRef]);

  return (
    <div className="relative flex w-fit mx-auto bg-accentBackground rounded-xl text-sm">
      <ul className="relative flex w-full justify-center gap-2">
        {TABS.map((tab) => (
          <li key={tab}>
            <button
              ref={activeTab === tab ? activeTabElementRef : null}
              data-tab={tab}
              onClick={() => {
                setActiveTab(tab);
                router.push(`/${tab === "Home" ? "" : tab.toLowerCase()}`);
              }}
              className="flex h-8 items-center rounded-xl p-4"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div
        style={{ clipPath: "inset(0px 78% 0px 0% round 17px)" }}
        aria-hidden
        className=" text-sm absolute z-10 w-full overflow-hidden transition-all"
        ref={containerRef}
      >
        <ul className="relative flex w-full justify-center gap-2 bg-pink-700">
          {TABS.map((tab) => (
            <li key={tab}>
              <button
                data-tab={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className="flex h-8 items-center rounded-xl p-4"
                tabIndex={-1}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

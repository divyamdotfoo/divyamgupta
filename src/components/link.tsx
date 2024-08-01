import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
export function Link({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: "icon" | "text";
}) {
  return (
    <NextLink
      target="_blank"
      href={href}
      className={clsx(
        "rounded-md px-2 py-2 border border-white/10 transition-all hover:border-b-4 hover:border-white/20 shadow-sm shadow-accentBackground flex items-center justify-center",
        variant === "icon" ? "h-8" : "h-9"
      )}
    >
      {children}
    </NextLink>
  );
}

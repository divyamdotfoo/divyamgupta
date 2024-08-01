"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export function Skills() {
  const skillsArr = useMemo(
    () => [
      "Typescript",
      "React",
      "Nextjs",
      "Tanstack",
      "Tailwind",
      "tRPC",
      "GraphQL",
      "Prisma",
      "Drizzle",
      "Authjs",
      "Hono",
      "Express",
      "Git",
      "Bash",
    ],
    []
  );
  const [skills, setSkills] = useState(() =>
    skillsArr.toSorted(() => Math.random() - 0.5)
  );

  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkills(skillsArr);
      setTimeout(() => {
        setFullWidth(true);
      }, 1000);
    }, 400);
  }, []);

  return (
    <div
      className={clsx(
        "w-full grid xl:grid-cols-4 grid-cols-3 gap-3",
        !fullWidth && "justify-items-center"
      )}
    >
      <AnimatePresence>
        {skills.map((s, i) => (
          <motion.div
            suppressHydrationWarning
            layout
            key={s}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{
              width: fullWidth ? "auto" : "36px",
            }}
            className={clsx(
              "flex items-center justify-center py-2 bg-accentBackground h-9",
              fullWidth ? " rounded-md" : " rounded-full"
            )}
          >
            {fullWidth ? (
              <div className=" flex items-center gap-2">
                <Image
                  src={`/assets/${s}.svg`}
                  alt="logo"
                  className=" w-4 h-4 stroke-white"
                  width={700}
                  height={700}
                />

                <p suppressHydrationWarning className=" text-xs">
                  {s}
                </p>
              </div>
            ) : (
              <Image
                src={`/assets/${s}.svg`}
                className=" w-6 h-6"
                alt="logo"
                width={700}
                height={700}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

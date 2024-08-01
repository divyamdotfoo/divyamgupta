"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
export function LinkCard({
  description,
  href,
  img,
  title,
  alt,
  tags = [],
}: {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
  href: string;
  tags?: string[];
}) {
  return (
    <Link href={href} prefetch target="_blank">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className=" flex flex-col h-full items-stretch p-4 rounded-md  gap-4 border border-white/10 cursor-pointer shadow-sm shadow-white/10"
      >
        <div className=" w-full overflow-hidden h-40  rounded-sm">
          <Image
            src={img}
            alt={alt}
            className="rounded-sm transition-all min-h-full"
            style={
              {
                //   clipPath: "inset(0 0 100% 0)",
              }
            }
          />
        </div>
        <div className=" pl-1">
          <h2 className=" font-medium">{title}</h2>
          <p className=" text-sm opacity-70 font-light tracking-wider">
            {description}
          </p>
        </div>
        <div className=" flex items-center flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center px-2 py-1 text-xs bg-accentBackground rounded-md">
      {children}
    </p>
  );
}

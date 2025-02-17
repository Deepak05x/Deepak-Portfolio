"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform] = useState("translate(-50%,-50%) rotateX(0deg)");

  return (
    <div
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl   border border-gray-700 hover:border-green-500 transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { revealItem } from "@/components/ui/RevealGroup";

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  );
}
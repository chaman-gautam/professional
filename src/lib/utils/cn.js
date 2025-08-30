import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind + conditional classNames
 * @param  {...any} inputs - string, object, array of classes
 * @returns {string} - merged class string
 */
export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}

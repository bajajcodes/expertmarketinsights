import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function divideArray<T>(arr: T[]): { firstHalf: T[]; secondHalf: T[] } {
  const length = arr.length;
  const midpoint = Math.floor(length / 2);

  if (length % 2 === 0) {
    return {
      firstHalf: arr.slice(0, midpoint),
      secondHalf: arr.slice(midpoint),
    };
  } else {
    return {
      firstHalf: arr.slice(0, midpoint + 1),
      secondHalf: arr.slice(midpoint + 1),
    };
  }
}

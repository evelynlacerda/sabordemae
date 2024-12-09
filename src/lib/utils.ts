import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isStoredOpened() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 8 && hours <= 21) {
        return true
    }

    return false
}

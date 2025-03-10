import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

import { cn, type CnOptions } from 'tailwind-variants';

export const cx = (...classes: CnOptions) => cn(classes)({ twMerge: true });

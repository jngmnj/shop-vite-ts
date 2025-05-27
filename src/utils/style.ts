import { cx } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/types';
import { twMerge } from 'tailwind-merge';

// utils에서 전체 관리
export * from 'class-variance-authority';

// twMerge와 cx 병합함수
export const cn = (...args: ClassValue[]) => twMerge(cx(...args));

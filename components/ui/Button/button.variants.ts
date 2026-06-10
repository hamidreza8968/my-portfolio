import '../../../styles/buttonTokens.css'

export const buttonBase =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

export const buttonVariants = {
    primary: `
    bg-[var(--button-primary-bg)]
    text-[var(--button-primary-text)]
    hover:bg-[var(--button-primary-bg-hover)]
  `,

    secondary: `
    bg-[var(--button-secondary-bg)]
    text-[var(--button-secondary-text)]
    border border-[var(--button-secondary-border)]
    hover:bg-[var(--button-secondary-bg-hover)]
  `,

    ghost: `
    bg-transparent
    text-[var(--button-ghost-text)]
    hover:bg-[var(--button-ghost-bg-hover)]
  `,

    text: `
    bg-transparent
    text-[var(--button-text-text)]
    hover:text-[var(--button-text-text-hover)]
  `,
} as const;
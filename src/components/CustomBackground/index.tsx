import { twMerge } from 'tailwind-merge';

const variants = {
  array: 'bg-array',
  object: 'bg-object',
  brackets: 'bg-brackets',
  prompt: 'bg-prompt',
};

type CustomBackgroundProps = React.ComponentProps<'div'> & {
  variant: keyof typeof variants;
  position: 'left' | 'right';
};

export function CustomBackground({
  variant,
  position,
  className,
}: CustomBackgroundProps) {
  return (
    <div
      className={twMerge(
        `absolute w-[690px] h-[400px] bottom-12 -z-10 bg-contain bg-no-repeat bg-center`,
        variants[variant],
        position === 'left'
          ? 'left-0 rotate-[15deg]'
          : 'right-0 -rotate-[15deg]',
        className,
      )}
    />
  );
}

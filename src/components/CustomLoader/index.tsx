import { twMerge } from 'tailwind-merge';
import './styles.css';

export function CustomLoader({ className }: React.ComponentProps<'span'>) {
  return <span className={twMerge(`loader w-5 h-5`, className)}></span>;
}

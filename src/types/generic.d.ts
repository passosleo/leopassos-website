export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type Link = {
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
  target?: LinkTarget;
};

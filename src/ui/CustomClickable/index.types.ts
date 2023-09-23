export interface CustomClickableProps {
    link?: string;
    children: React.ReactNode;
    classNames?: string;
    onClick?: () => void;
  }
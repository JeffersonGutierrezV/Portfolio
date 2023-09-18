export interface CustomButtonProps {
    type?: "primary" | "link";
    label?: string;
    onClick?: () => void;
    icon?: React.ReactElement;
    customStyle?: string;
    href?: string;
}
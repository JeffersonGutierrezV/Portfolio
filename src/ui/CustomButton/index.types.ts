export interface CustomButtonProps {
    type?: "normal" | "link" | "icon";
    label?: string;
    onClick: () => void;
    icon?: React.ReactElement;
}
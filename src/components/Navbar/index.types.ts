export interface ISection {
  label: string;
  id: string;
}

export interface NavbarProps {
  onSectionChange: (section: string) => void;
  sections: ISection[];
  currentSection: string;
  }
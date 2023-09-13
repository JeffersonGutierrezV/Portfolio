export interface IStep {
  navigateTo: string;
  auxiliaryLabel: string;
  icon: React.ReactElement;
}

export interface CustomStepperProps {
  step: IStep;
}

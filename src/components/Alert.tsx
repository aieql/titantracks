import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Alert = ({ text, children }: Props) => {
  return (
    <div className="alert alert-primary">
      {text}
      {children}
    </div>
  );
};

export default Alert;

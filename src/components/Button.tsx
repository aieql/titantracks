interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return <button className="btm btm-success">{label}</button>;
};

export default Button;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: Props) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
    />
  </div>
);

export default Input;
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:bg-gray-400 transition"
    >
      {children}
    </button>
  );
};

export default Button;
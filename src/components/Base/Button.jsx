export const Button = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

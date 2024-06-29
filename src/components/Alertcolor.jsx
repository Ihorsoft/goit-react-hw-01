import "./Alert.css";

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alertcolor = ({ variant, children }) => {
  return (
    <p
      style={{
        ...alertStyles,
        color: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};

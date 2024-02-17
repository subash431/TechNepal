import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button className="button-primary">{props.children}</button>
    </>
  );
};

export default Button;

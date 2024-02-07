import "./buttons.css";

const PrimaryButtons = (props) => {
  return <div className="primary-btn">
    <a href="/#">{props.children}</a>
  </div>;
};
const Secoundrybuttons = (props) => {
  return <div className="secound-btn">
    <a href="/#">{props.children}</a>
    </div>;
};

export default PrimaryButtons;
export { Secoundrybuttons };
 
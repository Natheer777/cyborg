import "./Container.css";

const Container = (props) => {
  return <div className="container main-container p-4 rounded">
{props.children}
  </div>;
};

export default Container;

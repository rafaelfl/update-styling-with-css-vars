import "./styles.scss";

// Immutable component
const Test = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="test">
      <h1>Something to animate</h1>
      <div>{children}</div>
    </div>
  );
};

export default Test;

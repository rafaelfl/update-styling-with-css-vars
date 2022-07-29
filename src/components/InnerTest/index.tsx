import { useEffect, useState } from "react";

import "./styles.scss";

const InnerTest = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // we can update the variables using css classes...
    document.body.classList.toggle("update-class");

    // or we can just update the variables directly using the style prop
    // if (toggle) {
    //   document.body.style.setProperty("--textcolor", "red");
    //   document.body.style.setProperty("--textdecor", "underline");
    //   document.body.style.setProperty("--opacity", "0.2");
    // } else {
    //   document.body.style.setProperty("--textcolor", "blue");
    //   document.body.style.setProperty("--textdecor", "line-through");
    //   document.body.style.setProperty("--opacity", "1");
    // }
  }, [toggle]);

  return (
    <div>
      <h3>Inner component (mutable)</h3>
      <button onClick={() => setToggle((toggle) => !toggle)}>Test</button>
    </div>
  );
};

export default InnerTest;

import React from "react";

/** Second simple component with heading tag */
function SecondComponent() {
  return (
    <div>
      <h1
        style={{
          /** Applying some styling to the heading */ display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #6A0DAD",
          color: "~7F00FF",
        }}
      >
        This is the second component in a new tab
      </h1>
    </div>
  );
}

export default SecondComponent;

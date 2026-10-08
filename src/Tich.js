import React from "react";
import { useState } from "react";

function Tich(props) {
  const [a, seta] = useState(2);
  const [b, setb] = useState(3);

  return (
    <div className="tich">
      <h3>
        Tích của {a} * {b} = {a * b}
      </h3>

      <button onClick={() => seta(a + 1)}>
        Tăng a
      </button>

      <button onClick={() => setb(b + 1)}>
        Tăng b
      </button>
    </div>
  );
}

export default Tich;
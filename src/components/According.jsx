import { useState } from 'react';
import React from 'react'
function According() {
  const [isVisible, setIsVisible] = useState(false);

  const Action = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h3 onClick={Action}>Section 1</h3>

      <p style={{ display: isVisible ? 'block' : 'none' }}>
        Lorem ipsum, dolor sit amet consectetur  facere molestiae quos sequi quaerat deleniti porro. Officia.
      </p>
    </div>
  );
}

export default According;
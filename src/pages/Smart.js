import React from "react";
import "../style.css";

const Smart = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Smart Products</h1>
      <section>
        <h2 className="section-title">ReflectV</h2>
        <p className="section-subtitle">Interactive</p>
        <ul className="service-list">
          <li>Glass Color: Black, Gold, Silver</li>
          <li>Length</li>
          <li>Width</li>
          <li>Frame: Wood, Iron (Black Paint), Stainless Steel (Gold/Silver)</li>
          <li>Frameless: Wood, Iron, Stainless Steel (Gold/Silver)</li>
        </ul>
      </section>
      <section>
        <h2 className="section-title">DesQ</h2>
        <ul className="service-list">
          <li>Glass Color: Black, Gold, Silver</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Frame: Wood, Iron (Black Paint), Stainless Steel (Gold/Silver)</li>
        </ul>
      </section>
      <section>
        <h2 className="section-title">Elev8</h2>
        <ul className="service-list">
          <li>F-Model</li>
          <li>T-Model</li>
          <li>B-Model</li>
        </ul>
      </section>
    </div>
  );
};

export default Smart;
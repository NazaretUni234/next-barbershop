"use client";
import { useState } from "react";
import AnimationTabs from "./animationTabs";

export default function InfoOfBarbershop() {
  const [selectInfo, setSelectInfo] = useState("tab_a");
  const handleSelectInfo = (tab: string) => setSelectInfo(tab);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="about-tab">
          <ul className="nav nav-tabs">
            <li className={selectInfo === "tab_a" ? "active" : ""}>
              <a
                id="#tab_a"
                data-toggle="tab"
                onClick={() => handleSelectInfo("tab_a")}
              >
                Nuestra misión
              </a>
            </li>
            <li className={selectInfo === "tab_b" ? "active" : ""}>
              <a
                id="#tab_b"
                data-toggle="tab"
                onClick={() => handleSelectInfo("tab_b")}
              >
                ¿Por qué nosotros?
              </a>
            </li>
            <li className={selectInfo === "tab_c" ? "active" : ""}>
              <a
                id="#tab_c"
                data-toggle="tab"
                onClick={() => handleSelectInfo("tab_c")}
              >
                Sobre nosotros
              </a>
            </li>
          </ul>

          <AnimationTabs selectInfo={selectInfo} />

          {/* tab content */}
        </div>
      </div>
      {/* end col */}
    </div>
  );
}

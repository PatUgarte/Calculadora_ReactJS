import React from "react";
import "./IOVisor.styles.css";

import { InputVisor } from "./components/InputVisor/InputVisor.component.jsx";
import { OutputVisor } from "./components/OutputVisor/OutputVisor.component";

export function IOVisor() {
    return (
        <div className="io_visor">
            <InputVisor input="42 + 7"/>
            <OutputVisor output="49"/>
        </div>
    );
}
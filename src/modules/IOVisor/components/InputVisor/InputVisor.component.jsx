import React from "react";
import "./InputVisor.styles.css";
export function InputVisor({input}) {
    return (
        <div className="input_visor">
            {input} {/*En .jsx para escribir código javascript hay que encerrarlo entre llaves {}*/}
        </div>
    );
}
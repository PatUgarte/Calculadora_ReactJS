import React from "react";
import "./OutputVisor.styles.css";
export function OutputVisor({output}) {
    return (
        <div className="output_visor">
            {output} {/*En .jsx para escribir código javascript hay que encerrarlo entre llaves {}*/}
        </div>
    );
}
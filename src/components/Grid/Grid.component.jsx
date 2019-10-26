import React from "react";
import "./Grid.styles.css";

import { ButtonGrid } from "./../../modules/Shared/components/ButtonGrid/ButtonGrid.component";

export function Grid(){
    return(
        <div>
            <ButtonGrid value ="AC"/>
            <ButtonGrid value ="+/-"/>
            <ButtonGrid value ="%"/>
            <ButtonGrid value ="/"/>
            <br/>
            <ButtonGrid value ="7"/>
            <ButtonGrid value ="8"/>
            <ButtonGrid value ="9"/>
            <ButtonGrid value ="x"/>
            <br/>
            <ButtonGrid value ="4"/>
            <ButtonGrid value ="5"/>
            <ButtonGrid value ="6"/>
            <ButtonGrid value ="-"/>
            <br/>
            <ButtonGrid value ="1"/>
            <ButtonGrid value ="2"/>
            <ButtonGrid value ="3"/>
            <ButtonGrid value ="+"/>
            <br/>
            <div className="button_zero">
            <ButtonGrid value ="0"/>
            <ButtonGrid value =","/>
            <ButtonGrid value ="="/>
            </div>
        </div>
    );
}
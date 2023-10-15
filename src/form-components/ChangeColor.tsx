import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chooseColor, setchooseColor] = useState<string>("red");
    const changeColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setchooseColor(event.target.value);
    };
    //using same colors from the example on website
    const Colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const components = Colors.map((colors: string) => {
        return (
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                value={colors}
                checked={chooseColor === colors}
                key=""
                label={
                    <span style={{ backgroundColor: colors }}>{colors}</span>
                }
            />
        );
    });
    return (
        <div>
            <h3>Change Color</h3>
            {components}
            <div>
                You have chose{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chooseColor }}
                >
                    {chooseColor}
                </span>
            </div>
        </div>
    );
}

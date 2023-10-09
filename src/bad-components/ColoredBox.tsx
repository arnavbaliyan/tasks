import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProps {
    SetColorInd: (color: number) => void;
    ColorInd: number;
}

function ChangeColor({ ColorInd, SetColorInd }: ColorProps): JSX.Element {
    return (
        <Button onClick={() => SetColorInd((1 + ColorInd) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ ColorInd }: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[ColorInd],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [ColorInd, SetColorInd] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[ColorInd]}</span>
            <div>
                <ChangeColor
                    ColorInd={ColorInd}
                    SetColorInd={SetColorInd}
                ></ChangeColor>
                <ColorPreview
                    ColorInd={ColorInd}
                    SetColorInd={SetColorInd}
                ></ColorPreview>
            </div>
        </div>
    );
}

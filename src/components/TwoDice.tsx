import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    //use useState twice for a two dices
    const [rightDice, setRightDice] = useState<number>(4);
    const [leftDice, setLeftDice] = useState<number>(3);
    function changeRight(): void {
        setRightDice(d6);
    }
    function changeLeft(): void {
        setLeftDice(d6);
    }
    return (
        <div>
            <Button onClick={changeRight}>Roll Right</Button>
            <Button onClick={changeLeft}>Roll Left</Button>
            {rightDice === 1 && leftDice === 1 && <div> Lose</div>}
            {leftDice !== 1 && rightDice === leftDice && <div>Win</div>}
            <span data-testid="right-die">{rightDice.toString()}</span>
            <span data-testid="left-die">{leftDice.toString()}</span>{" "}
        </div>
    );
    return <div>Two Dice</div>;
}

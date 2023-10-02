import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [numOfAttempts, setAttempts] = useState<number>(4);

    function StopQuiz(): void {
        setProgress(false);
    }
    function StartQuiz(): void {
        setProgress(true);
        setAttempts(numOfAttempts - 1);
    }
    function Mulligan(): void {
        setAttempts(numOfAttempts + 1);
    }
    return (
        <div>
            <Button onClick={Mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <p>Attempts Left: {numOfAttempts}</p>
            <Button onClick={StopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={StartQuiz}
                disabled={inProgress || numOfAttempts <= 0}
            >
                Start Quiz
            </Button>
        </div>
    );

    return <div>Start Attempt</div>;
}

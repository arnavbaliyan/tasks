import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numOfAttempts, setnumOfAttempts] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    const updateAttempts = (): void => {
        const nums: number = parseInt(attemptsRequested) || 0;
        setnumOfAttempts(numOfAttempts + nums);
    };
    const requests = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAttemptsRequested(event.target.value);
    };
    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h3>How many more attempts would you like to have</h3>
                </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={requests}
                />
            </Form.Group>
            <Button onClick={updateAttempts}>gain</Button>
            <Button
                onClick={(): void => setnumOfAttempts(numOfAttempts - 1)}
                disabled={numOfAttempts === 0}
            >
                use
            </Button>
            <h3>Number of Attempts left: {numOfAttempts}</h3>
        </div>
    );
}

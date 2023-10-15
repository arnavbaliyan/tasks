import React, { useState } from "react";
// import the Form function from react library
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setuserAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setuserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h3>Check Answer</h3>
                </Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            {userAnswer === expectedAnswer ? (
                <div style={{ fontSize: 40 }}> ✔️</div>
            ) : (
                <div style={{ fontSize: 40 }}> ❌</div>
            )}
        </div>
    );
}

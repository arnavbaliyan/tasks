import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question_Type, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function ChangeQuestionType(): void {
        if (question_Type !== "short_answer_question") {
            setQuestionType("short_answer_question");
        } else {
            setQuestionType("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={ChangeQuestionType}>Change Type</Button>
            {question_Type === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {question_Type === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setuserName] = useState<string>("Your Name");
    const [Edit, setEdit] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setuserName(event.target.value);
    }

    function updateCanEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Switch
                inline
                type="switch"
                id="in-edit-mode"
                checked={Edit}
                onChange={updateCanEdit}
            />
            {Edit ? (
                <div>
                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-student-check"
                        label={
                            isStudent ? "is a student." : "is not a student."
                        }
                        checked={isStudent}
                        onChange={updateIsStudent}
                        disabled={!Edit}
                    />
                    <Form.Group>
                        <Form.Control
                            value={userName}
                            onChange={updateName}
                            disabled={!Edit}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div></div>
            )}
            <div>
                {userName} {isStudent ? "is a student." : "is not a student."}
            </div>
        </div>
    );
}

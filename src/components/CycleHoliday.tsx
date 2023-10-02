import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Thanksgiving"
        | "Christmas"
        | "Halloween"
        | "Holi"
        | "Diwali";
    const [holiday, setHoliday] = useState<Holiday>("Diwali");

    const emojiOfHoliday: Record<Holiday, JSX.Element> = {
        Diwali: <h3>Holiday: 🪔</h3>,
        Holi: <h3>Holiday: 🎉</h3>,
        Halloween: <h3>Holiday: 🎃</h3>,
        Christmas: <h3>Holiday: 🎄</h3>,
        Thanksgiving: <h3>Holiday: 🦃</h3>
    };
    const emojiNumerical: Record<Holiday, Holiday> = {
        Holi: "Halloween",
        Halloween: "Diwali",
        Diwali: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Holi"
    };
    const emojiAlphabetical: Record<Holiday, Holiday> = {
        Christmas: "Diwali",
        Diwali: "Halloween",
        Halloween: "Holi",
        Holi: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    return (
        <div>
            <Button onClick={() => setHoliday(emojiAlphabetical[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(emojiNumerical[holiday])}>
                Advance by Year
            </Button>
            {emojiOfHoliday[holiday]}
        </div>
    );
    return <div>Cycle Holiday</div>;
}

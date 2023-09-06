import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Arnav Baliyan Hello
                World
            </header>
            <h1>2023 Software Engineering Class Website</h1>
            <img
                src="https://mail.google.com/mail/u/0?ui=2&ik=da887565f2&attid=0.1&permmsgid=msg-f:1776055129372576548&th=18a5d0baefc34b24&view=att&disp=safe"
                width="450px"
                height="450px"
                alt="A picture of Mr.Ace"
            />
            <p> A list of Aces favorite things</p>
            <ol>
                <li>Going on walks</li>
                <li>Playing outside</li>
                <li>Playdates with his buddies</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "110px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        This is the first column dedicated to the Ace Website
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "110px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        This is the second column decdicated to the Ace Website
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

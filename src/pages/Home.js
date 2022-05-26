import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Main from "../components/Main";
import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
export default function Home() {
    return (
        <div>
            <Container>
                <Main />
                <Cards />
            </Container>
        </div>
    )};

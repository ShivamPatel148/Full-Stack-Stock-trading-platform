import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";


//Test Suite   -> we give multiiple test cases in a suite at a time.

describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "../images/home/Hero.png");
    });
});
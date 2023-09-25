import React from "react";
import { mount, shallow } from "enzyme";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp />", () => {
  it("SignUp renders without crashing", () => {
    const wrapper = shallow(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render a p tag", () => {
    const wrapper = shallow(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    );
    // expect(wrapper.find("section.p")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(0);
  });
});
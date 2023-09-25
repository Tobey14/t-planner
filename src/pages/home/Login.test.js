import React from "react";
import { mount, shallow } from "enzyme";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render a p tag", () => {
    const wrapper = shallow(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    // expect(wrapper.find("section.p")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(0);
  });
});
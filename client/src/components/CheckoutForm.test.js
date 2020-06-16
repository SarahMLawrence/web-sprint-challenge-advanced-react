import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});

//========//
//  TESTS //
//========//

it("submits correct values", () => {
  const { container } = render(<CheckoutForm />);
  //========================================================================//
  //  querySelector: returns the first Element within the document that     //
  //                  matches the specified selector                        //
  //========================================================================//
  const fname = container.querySelector('input[name="firstName"]');
  const lname = container.querySelector('input[name="lastName"]');
  const address = container.querySelector('input[name="address"]');
  const city = container.querySelector('input[name="city"]');
  const state = container.querySelector('input[name="state"]');
  const zip = container.querySelector('input[name="zip"]');
});

test("First Name Input label: ", () => {
  const { getByLabelText } = render(<CheckoutForm />);
  getByLabelText("First Name:");
});

test("Last Name Input label: ", () => {
  const { getByLabelText } = render(<CheckoutForm />);
  getByLabelText("Last Name:");
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("check input First name, last name, email and message without crashing", () => {
  const { getByText } = render(<App />);

  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

test("the functionality of the signup form", () => {
  const { getByLabelText } = render(<ContactForm />);
  fireEvent.change(getByLabelText(/first name/i), {
  target: { value: "Fady"}
});
  fireEvent.change(getByLabelText(/last name/i), {
    target: { value: "Gouda"}
  });
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "fadygouda123@gmail.com"}
  });
  fireEvent.change(getByLabelText(/message/i), {
    target: { value: "This is my first actual test using Jest!"}
  });


});


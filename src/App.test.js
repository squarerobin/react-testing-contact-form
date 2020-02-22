import React from "react";
import { render, queryByText, getByTestId, getByPlaceholderText } from "@testing-library/react";
import "mutationobserver-shim";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
  render(<App />);
});


it('renders "First Name" text', () => {
  const { queryByText } = render(
    <input
      name="firstName"
      placeholder="bill"
      required
    />
  );
  const firstNameText = queryByText(/First Name/i);
});

it('input for first name required" text', () => {
  const firstNameInput = render(
    <App />);
  expect(firstNameInput.getByPlaceholderText("bill")).toBeRequired();
});

it('input for last name required" text', () => {
 const lastNameInput = render(<App />);
   expect(lastNameInput.getByPlaceholderText("luo")).toBeRequired();

});

it('input for email required" text', () => {
  const emailInput = render(<App />);
  expect(emailInput.getByPlaceholderText("bluebill1049@hotmail.com")).toBeRequired();
});

it('input for textarea not required" text', () => {
  const textareaInput = render(<App />);
expect(textareaInput.getByTestId("textarea")).not.toBeRequired();});

/* Source: https://testing-library.com/docs/dom-testing-library/api-async

You can also wait for multiple elements at once:

const [usernameElement, passwordElement] = await waitForElement(
  () => [
    getByLabelText(container, 'username'),
    getByLabelText(container, 'password'),
  ],
  { container }
)


*** Using MutationObserver is more efficient than polling 
the DOM at regular intervals with wait. This library sets up a 'mutationobserver-shim' on the global window object for cross-platform compatibility with older browsers and the jsdom that is usually used in Node-based tests. */


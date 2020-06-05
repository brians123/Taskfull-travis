import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import {
  waitFor,
  getByLabelText,
  getByText,
  queryByTestId,
  getByTestId,
} from "@testing-library/dom";
import App from "./App";
import FilterCard from "./components/FilterCard";
import Newtask from "./components/Newtask";

test("Newtask renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<FilterCard />);
  // expect(queryByTestId("unaccept-button")).toBeTruthy();
});

// function getDOM() {
//   const div = document.createElement("div");
//   div.innerHTML = `
//     <label for="username">Username</label>
//     <input id="username" />
//     <button>Print Username</button>
//   `;
//   return div;
// }

// test("renders learn react link", async () => {
//   // const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   const famousWomanInHistory = "Ada Lovelace";
//   const container = getDOM();

//   // Get form elements by their label text.
//   // An error will be thrown if one cannot be found (accessibility FTW!)
//   const input = getByLabelText(container, "Username");
//   input.value = famousWomanInHistory;

//   // jest snapshots work great with regular DOM nodes!
//   expect(container).toMatchSnapshot();
// });

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

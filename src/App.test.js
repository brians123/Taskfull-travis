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
import NavBar from "./components/NavBar";
import Newtask from "./components/Newtask";

test("Newtask renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<Newtask />);
  expect(queryByTestId("cancel-button").type).toBe("div");
});

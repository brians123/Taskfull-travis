import useForm from "./useForm";
import { act, renderHook } from "@testing-library/react-hooks";
import expectExport from "expect";

describe("add item", () => {
  it("increments item list by 1", () => {
    const { result } = renderHook(useForm);

    act(() => {
      result.current.addNewItem();
    });

    expect(result.current.values.items.length).toBe(2);
  });
});

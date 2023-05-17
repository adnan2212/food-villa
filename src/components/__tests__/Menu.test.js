import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

import Header from "../Header";
import RestaurantMenu from "../RestrauntMenu";
import store from "../../store/store";
import { MENU_DATA } from "../../config";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MENU_DATA) })
);

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("add-btn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("IN CART: 2");
});

import { render } from "@testing-library/react";

import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  // console.log(logo);

  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("IN CART: 0");
});

import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

import Body from "../Body";
import store from "../../store/store";
import { RESTAURANT_DATA } from "../../config";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(RESTAURANT_DATA) })
);

test("Search Results on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);

  // const searchBtn = body.getByTestId("search-btn");
  // console.log(searchBtn);
});

test("Shimmer should load on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(15);
  // console.log(shimmer);
});

test("Restraunts should load on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // console.log(body);

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("search for string(food) on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "cake",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});

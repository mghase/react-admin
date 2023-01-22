import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import members from "./members";
import notifications from "./notifications";
import orders from "./orders";
import productsData from "./products";
import userInfo from "./userInfo";

let products = productsData;

function generateId() {
  return (Math.floor(Math.random() * 10000) + 1).toString();
}

function addOne<T>(items: T[] = [], newItem: T) {
  return [...items, newItem];
}

function removeOne<T extends { id: string }>(items: T[] = [], itemId: string) {
  return items.filter((item) => item.id !== itemId);
}

function removeMany<T extends { id: string }>(
  items: T[] = [],
  itemIds: string[]
) {
  return items.filter((item) => itemIds.indexOf(item.id) === -1);
}

function updateOne<T extends { id: string }>(items: T[] = [], updatedItem: T) {
  return items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
}

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios, { delayResponse: 2000 });

// Auth
mock.onPut("/api/password").reply(({ data }) => [200, data]);
mock.onPost("/api/forgot-password").reply(200);
mock.onPost("/api/forgot-password-submit").reply(200);
mock.onPost("/api/login").reply(200, "AUTHKEY123");
mock.onPost("/api/logout").reply(200);
mock.onPost("/api/register").reply(201);
mock
  .onGet("/api/user-info", { params: { key: "AUTHKEY123" } })
  .reply(200, userInfo);
mock.onPut("/api/user-info").reply(({ data }) => [200, data]);

// Members
mock.onDelete("/api/members").reply(({ data }) => [200, data]);
mock.onGet("/api/members").reply(200, members);
mock
  .onPost("/api/members")
  .reply(({ data }) => [201, { ...JSON.parse(data), id: generateId() }]);
mock.onPut("/api/members").reply(({ data }) => [200, data]);

// Notifications
mock.onGet("/api/notifications").reply(200, notifications);

// Orders
mock.onDelete("/api/orders").reply(({ data }) => [200, data]);
mock.onGet("/api/orders").reply(200, orders);
mock
  .onPost("/api/orders")
  .reply(({ data }) => [201, { ...JSON.parse(data), id: generateId() }]);
mock.onPut("/api/orders").reply(({ data }) => [200, data]);

// Products
mock.onDelete("/api/products").reply(({ data }) => [200, data]);
mock.onGet("/api/products").reply(() => [200, products]);
mock.onPost("/api/products").reply(({ data }) => {
  const newProduct = { ...JSON.parse(data), id: generateId() };
  products = addOne(products, newProduct);
  return [201, newProduct];
});
mock.onPut("/api/products").reply(({ data }) => [200, data]);

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext";
import App from "../App";

describe("Voltix Accessories App", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: "1",
              name: "Clear Phone Case",
              description: "Protective case",
              category: "Phone Cases",
              price: 800,
              image: "https://placehold.co/300x200"
            }
          ])
      })
    );
  });

  it("renders the store name in the navbar", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <App />
        </ProductProvider>
      </BrowserRouter>
    );
      expect(
  screen.getByRole("link", { name: /voltixaccessories/i })
).toBeInTheDocument();
  });
});

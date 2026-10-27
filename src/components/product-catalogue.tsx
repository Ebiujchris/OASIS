"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { productCategories, products } from "@/data/site";
import type { ProductCategory } from "@/data/site";

export function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof productCategories)[number]
  >("All products");
  const visibleProducts =
    activeCategory === "All products"
      ? products
      : products.filter((product) => product.category === activeCategory);

  function getCategoryCount(category: ProductCategory | "All products") {
    return category === "All products"
      ? products.length
      : products.filter((product) => product.category === category).length;
  }

  return (
    <>
      <div className="catalogue-filters" role="group" aria-label="Filter products by category">
        {productCategories.map((category) => (
          <button
            key={category}
            className="catalogue-filter"
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
            <span>{getCategoryCount(category)}</span>
          </button>
        ))}
      </div>
      <p className="catalogue-results" role="status" aria-live="polite">
        Showing {visibleProducts.length}{" "}
        {visibleProducts.length === 1 ? "product" : "products"}
        {activeCategory !== "All products" ? ` in ${activeCategory}` : ""}
      </p>
      <div className="product-grid product-grid-all">
        {visibleProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}

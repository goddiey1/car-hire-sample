'use client';

import { useMemo, useState } from "react";
import CarCard, { Car } from "@/components/CarCard";

export default function FleetSection({ cars }: { cars: Car[] }) {
  const [selectedBrand, setSelectedBrand] = useState("All brands");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const brands = useMemo(
    () => Array.from(new Set(cars.map((car) => car.brand))).sort(),
    [cars]
  );

  const categories = useMemo(
    () => Array.from(new Set(cars.map((car) => car.category))).sort(),
    [cars]
  );

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesBrand =
        selectedBrand === "All brands" || car.brand === selectedBrand;
      const matchesCategory =
        selectedCategory === "All categories" ||
        car.category === selectedCategory;

      return matchesBrand && matchesCategory;
    });
  }, [cars, selectedBrand, selectedCategory]);

  const availableCount = filteredCars.filter((car) => car.available).length;

  return (
    <section
      id="fleet"
      className="pt-9 pb-12 sm:py-16 scroll-mt-16"
      aria-labelledby="fleet-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-5 sm:mb-8 rounded-xl border border-neutral-200 bg-white/80 p-3 sm:p-5 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-end">
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              <span>Brand</span>
              <select
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
                className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="All brands">All brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              <span>Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="All categories">All categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => {
                setSelectedBrand("All brands");
                setSelectedCategory("All categories");
              }}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-300 px-4 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mb-6 sm:mb-10 text-center sm:text-left">
          <h2
            id="fleet-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-2 sm:mb-3"
          >
            Available Cars
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            {availableCount} vehicles ready for immediate booking. Tap any car
            to inquire.
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-neutral-300 bg-white/70 px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-neutral-900">
              No cars match this filter.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Try another brand or switch the category back to all cars.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

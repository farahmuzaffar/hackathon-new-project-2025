"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Filter() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const availableCategories = ["Electronics", "Clothing", "Home", "Books"];
  const availableTags = ["New Arrival", "Discount", "Trending"];

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleApplyFilters = () => {
    console.log("Filters Applied:", {
      priceRange,
      categories,
      tags,
    });
    // Add your filtering logic here
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Filters</h2>
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={5000}
          step={50}
          value={priceRange}
          onValueChange={handlePriceChange}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="flex flex-col gap-2">
          {availableCategories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={categories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <Button
              key={tag}
              variant={tags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <Button className="w-full" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
}

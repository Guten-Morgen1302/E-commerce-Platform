"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterGroup {
  name: string
  options: string[]
}

interface CategoryFiltersProps {
  filters: FilterGroup[]
}

export default function CategoryFilters({ filters }: CategoryFiltersProps) {
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>(
    Object.fromEntries(filters.map((filter) => [filter.name, true])),
  )

  const toggleFilter = (filterName: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {filters.map((filter, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
            <button
              className="flex justify-between items-center w-full text-left font-medium mb-4"
              onClick={() => toggleFilter(filter.name)}
            >
              {filter.name}
              {expandedFilters[filter.name] ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>

            {expandedFilters[filter.name] && (
              <div className="space-y-2">
                {filter.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${filter.name}-${optionIndex}`}
                      className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor={`${filter.name}-${optionIndex}`} className="ml-2 text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Apply Filters</Button>
    </div>
  )
}


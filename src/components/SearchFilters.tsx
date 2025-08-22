import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, X, MapPin, Tag } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  onSearch?: (query: string) => void;
  onFilter?: (filters: any) => void;
}

const SearchFilters = ({ onSearch, onFilter }: SearchFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "Vegetables", "Spices", "Oil & Ghee", "Flour & Grains", 
    "Dairy Products", "Snacks Items", "Beverages", "Packaging"
  ];

  const locations = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", 
    "Pune", "Hyderabad", "Ahmedabad"
  ];

  const priceRanges = [
    "Under ₹100", "₹100 - ₹500", "₹500 - ₹1000", "₹1000 - ₹5000", "Above ₹5000"
  ];

  const activeFilters = [
    selectedCategory && { type: "category", value: selectedCategory },
    selectedLocation && { type: "location", value: selectedLocation },
    priceRange && { type: "price", value: priceRange }
  ].filter(Boolean);

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  const clearFilter = (type: string) => {
    switch(type) {
      case "category":
        setSelectedCategory("");
        break;
      case "location":
        setSelectedLocation("");
        break;
      case "price":
        setPriceRange("");
        break;
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedLocation("");
    setPriceRange("");
    setSearchQuery("");
  };

  return (
    <Card className="bg-card/90 backdrop-blur-sm border border-border/30 shadow-warm">
      <CardContent className="p-6">
        {/* Search Bar */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products, suppliers, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} className="px-6">
            Search
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="px-4"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge 
                key={filter.type} 
                variant="secondary" 
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                onClick={() => clearFilter(filter.type)}
              >
                {filter.value}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="h-6 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Filter Options */}
        {showFilters && (
          <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
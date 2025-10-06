import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, MapPin, TrendingUp } from "lucide-react";
import parisImage from "@/assets/dest-paris.jpg";
import japanImage from "@/assets/dest-japan.jpg";
import santoriniImage from "@/assets/dest-santorini.jpg";
import peruImage from "@/assets/dest-peru.jpg";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      country: "France",
      image: parisImage,
      rating: 4.9,
      reviews: 2340,
      price: 1299,
      type: "City",
      trending: true,
      description: "The City of Light awaits with iconic landmarks and romantic charm",
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      country: "Japan",
      image: japanImage,
      rating: 4.8,
      reviews: 1876,
      price: 1899,
      type: "Cultural",
      trending: false,
      description: "Experience ancient temples and traditional Japanese culture",
    },
    {
      id: 3,
      name: "Santorini, Greece",
      country: "Greece",
      image: santoriniImage,
      rating: 4.9,
      reviews: 3120,
      price: 1499,
      type: "Beach",
      trending: true,
      description: "Stunning sunsets and crystal-clear Aegean waters",
    },
    {
      id: 4,
      name: "Machu Picchu, Peru",
      country: "Peru",
      image: peruImage,
      rating: 4.7,
      reviews: 1543,
      price: 1799,
      type: "Adventure",
      trending: false,
      description: "Ancient Incan citadel set high in the Andes Mountains",
    },
    {
      id: 5,
      name: "Paris, France",
      country: "France",
      image: parisImage,
      rating: 4.9,
      reviews: 2340,
      price: 999,
      type: "City",
      trending: false,
      description: "Eiffel Tower and world-class museums",
    },
    {
      id: 6,
      name: "Kyoto, Japan",
      country: "Japan",
      image: japanImage,
      rating: 4.8,
      reviews: 1876,
      price: 2199,
      type: "Cultural",
      trending: true,
      description: "Cherry blossoms and zen gardens",
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === "all" || dest.country === selectedCountry;
    const matchesType = selectedType === "all" || dest.type === selectedType;
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && dest.price < 1000) ||
      (priceRange === "medium" && dest.price >= 1000 && dest.price < 1500) ||
      (priceRange === "high" && dest.price >= 1500);

    return matchesSearch && matchesCountry && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="gradient-ocean bg-clip-text text-transparent">Destinations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places around the world for your next adventure
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-soft animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="France">France</SelectItem>
                <SelectItem value="Japan">Japan</SelectItem>
                <SelectItem value="Greece">Greece</SelectItem>
                <SelectItem value="Peru">Peru</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Trip Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="City">City</SelectItem>
                <SelectItem value="Beach">Beach</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $1,000</SelectItem>
                <SelectItem value="medium">$1,000 - $1,500</SelectItem>
                <SelectItem value="high">Above $1,500</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredDestinations.length}</span> destinations
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-border hover:shadow-large transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                {destination.trending && (
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  {destination.type}
                </Badge>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="font-medium text-foreground">{destination.rating}</span>
                  <span>({destination.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent">
                  ${destination.price}
                </div>
                <p className="text-xs text-muted-foreground">per person</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button variant="default" className="w-full">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;

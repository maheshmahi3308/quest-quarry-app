import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MessageSquare, ThumbsUp, Send } from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: number;
  author: string;
  destination: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
  tripType: string;
}

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [newReview, setNewReview] = useState("");

  const reviews: Review[] = [
    {
      id: 1,
      author: "Sarah Johnson",
      destination: "Paris, France",
      rating: 5,
      date: "2 days ago",
      content:
        "Absolutely magical experience! The Eiffel Tower at night is breathtaking. The food, the culture, everything exceeded my expectations. Our guide was knowledgeable and friendly. Highly recommend!",
      likes: 24,
      tripType: "City",
    },
    {
      id: 2,
      author: "Michael Chen",
      destination: "Kyoto, Japan",
      rating: 5,
      date: "1 week ago",
      content:
        "The cherry blossoms were in full bloom and it was stunning! The temples are incredibly peaceful. Japanese hospitality is second to none. This trip changed my perspective on travel.",
      likes: 31,
      tripType: "Cultural",
    },
    {
      id: 3,
      author: "Emma Williams",
      destination: "Santorini, Greece",
      rating: 4,
      date: "2 weeks ago",
      content:
        "Beautiful sunsets and amazing food! The blue domes are just as beautiful in person. A bit crowded during peak season, but still worth every moment. The local wine is delicious!",
      likes: 18,
      tripType: "Beach",
    },
    {
      id: 4,
      author: "David Martinez",
      destination: "Machu Picchu, Peru",
      rating: 5,
      date: "3 weeks ago",
      content:
        "Once in a lifetime experience! The hike was challenging but incredibly rewarding. The ancient ruins are awe-inspiring. Make sure you're prepared for altitude and bring layers!",
      likes: 42,
      tripType: "Adventure",
    },
  ];

  const filteredReviews =
    selectedFilter === "all"
      ? reviews
      : reviews.filter((review) => review.tripType === selectedFilter);

  const handleSubmitReview = () => {
    if (newReview.trim()) {
      toast.success("Review submitted! Thank you for sharing your experience.");
      setNewReview("");
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="gradient-sunset w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community <span className="gradient-ocean bg-clip-text text-transparent">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real travelers. Share your adventures and inspire others!
          </p>
        </div>

        {/* Write Review Section */}
        <Card className="mb-8 border-border shadow-soft animate-scale-in">
          <CardHeader>
            <h3 className="text-xl font-semibold">Share Your Experience</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Tell us about your recent trip..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows={4}
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 cursor-pointer text-secondary fill-secondary hover:scale-110 transition-smooth"
                  />
                ))}
              </div>
              <Button variant="hero" onClick={handleSubmitReview}>
                <Send className="h-4 w-4 mr-2" />
                Post Review
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filter */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-muted-foreground">
            <span className="font-semibold text-foreground">{filteredReviews.length}</span> reviews
          </div>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="City">City</SelectItem>
              <SelectItem value="Beach">Beach</SelectItem>
              <SelectItem value="Cultural">Cultural</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review, index) => (
            <Card
              key={review.id}
              className="border-border shadow-soft hover:shadow-medium transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="gradient-ocean text-white font-semibold">
                      {review.author.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{review.author}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <Badge variant="secondary">{review.tripType}</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-secondary fill-secondary"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {review.destination}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{review.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

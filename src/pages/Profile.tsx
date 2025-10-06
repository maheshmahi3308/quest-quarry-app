import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  MapPin, 
  Calendar, 
  Heart, 
  Star,
  Plane,
  Clock,
  Edit
} from "lucide-react";
import parisImage from "@/assets/dest-paris.jpg";
import japanImage from "@/assets/dest-japan.jpg";
import santoriniImage from "@/assets/dest-santorini.jpg";

const Profile = () => {
  const userStats = [
    { label: "Trips Completed", value: "12", icon: Plane },
    { label: "Countries Visited", value: "8", icon: MapPin },
    { label: "Reviews Written", value: "15", icon: Star },
    { label: "Saved Destinations", value: "24", icon: Heart },
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: "Paris, France",
      image: parisImage,
      date: "March 15, 2025",
      status: "Confirmed",
      days: 7,
    },
    {
      id: 2,
      destination: "Kyoto, Japan",
      image: japanImage,
      date: "June 10, 2025",
      status: "Pending",
      days: 10,
    },
  ];

  const pastTrips = [
    {
      id: 1,
      destination: "Santorini, Greece",
      image: santoriniImage,
      date: "September 2024",
      rating: 5,
    },
  ];

  const savedDestinations = [
    { id: 1, name: "Bali, Indonesia", image: parisImage },
    { id: 2, name: "Iceland", image: japanImage },
    { id: 3, name: "New Zealand", image: santoriniImage },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8 border-border shadow-soft animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="gradient-ocean text-white text-3xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <Badge variant="secondary" className="w-fit mx-auto md:mx-0">
                    Travel Enthusiast
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Adventure seeker | Culture lover | Always planning the next trip
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined January 2023
                  </span>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="border-border shadow-soft hover:shadow-medium transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold gradient-ocean bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
            <TabsTrigger value="past">Past Trips</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingTrips.map((trip) => (
              <Card key={trip.id} className="border-border shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {trip.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {trip.days} days
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant={trip.status === "Confirmed" ? "default" : "secondary"}
                        >
                          {trip.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="default">View Details</Button>
                        <Button variant="outline">Modify Booking</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastTrips.map((trip) => (
              <Card key={trip.id} className="border-border shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < trip.rating
                                  ? "text-secondary fill-secondary"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{trip.date}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">Write Review</Button>
                        <Button variant="ghost">View Photos</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="saved">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {savedDestinations.map((destination) => (
                <Card key={destination.id} className="group overflow-hidden border-border hover:shadow-medium transition-smooth cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{destination.name}</h3>
                    <Button variant="default" size="sm" className="w-full">
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;

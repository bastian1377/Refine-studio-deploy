"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"
import { BookingProvider } from "@/contexts/booking-context"

export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false)
  const [activeTab, setActiveTab] = useState("barber")

  // Define the number of services to show initially
  const initialServicesToShow = 3

  // Hair services data
  const barberServices = [
    {
      title: "Mens haircuts",
      description: "Standard haircut with clippers and shears.",
      price: "From $40",
      duration: "50 mins",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/92903/inspiration/2767a6fecf7142eea9327ea198fae5-yanet-kutz-inspiration-bd9d4d6846c4477f8a7a375977a4c0-booksy.jpeg?size=1170x1170",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Haircut and Beard trim",
      description: "Standard beard work with blade.",
      price: "From 15",
      duration: "15 mins",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/92903/inspiration/754aa7d7595d4b78b13315a69347e8-yanet-kutz-inspiration-98fbf198aa4f49409036e60b0f4c4b-booksy.jpeg?size=1170x1170",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Men's Haircuts",
      description: "any type of fade with clippers and shears included, Line ups are included if asked for. by Jose Luis",
      price: "From $35",
      duration: "50 mins",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1132148/inspiration/fa922c698fe1482e811c6f06718306-joseluis-sanchez-inspiration-edd9ea785a72421e9cc38e790de306-booksy.jpeg?size=360x360",
      stylist: "Jose Luis",
      stylistId: "stylist2"
    },
    {
      title: "Haircut and beard trim",
      description: "Any type of haircut with beard work using clippers and shears. Line up (edge up) with trimmers and razor.",
      price: "From $40",
      duration: "1 hour",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1132148/service_photos/0c379e6f766449dcac6fe720b87f9c3f.jpeg",
      stylist: "Jose Luis",
      stylistId: "stylist2"
    },
    {
      title: "kids cuts 15yrs and younger",
      description: "kids haircuts.",
      price: "From 35",
      duration: "40 min",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/92903/inspiration/9e8d990153ba4636b5a59a05227ebb-yanet-kutz-inspiration-8891141abf26470bafb7af2c16c75a-booksy.jpeg?size=1170x1170",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Mens haircut",
      description: "Standard mens haircut.",
      price: "From 35+",
      duration: "50 min",
      imageSrc: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1290693/inspiration/418ca23c895e4f1aa4b1092c219924-pam-inspiration-793fbf7a2a3e42e98137c27f058446-booksy.jpeg?size=1170x1170",
      stylist: "Pam Chavez",
      stylistId: "stylist4"
    },
    {
      title: "Mens design",
      description: "Design of your choice.",
      price: "From 15+",
      duration: "15 min",
      imageSrc:"https://d2zdpiztbgorvt.cloudfront.net/region1/us/1290693/inspiration/4cf25ea8dc064acca8e9fb0ab365e4-pam-inspiration-4c2aaf62db684a26a8eb26e1193b36-booksy.jpeg?size=1170x1170",
      stylist: "Pam Chavez",
      stylistId: "stylist4"
    },
  ]

  const nailServices = [
    {
      title: "Manicure",
      description: "Classic or gel manicures with a wide range of colors to choose from.",
      price: "From $30+",
      duration: "40 mins",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "soak off",
      description: ".",
      price: "From $20+",
      duration: "30 mins",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "overlay",
      description: ".",
      price: "From $45+",
      duration: "45 mins",
      imageSrc: "red.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Fill",
      description: ".",
      price: "From $50",
      duration: "1h 50min",
      imageSrc: "spotblue.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size 1-2(s)",
      description: ".",
      price: "From $55+",
      duration: "1 hour",
      imageSrc: "cow.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size 1-2(S)",
      description: ".",
      price: "From $55+",
      duration: "1 hour",
      imageSrc: "pink.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size 3-4(M)",
      description: ".",
      price: "From $60+",
      duration: "1h 30min",
      imageSrc: "blue.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size 5-6(L)",
      description: ".",
      price: "From $65+",
      duration: "1h 55min",
      imageSrc: "bow.jpeg",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size 7-8(XL)",
      description: ".",
      price: "From $75+",
      duration: "2h 20min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Acrylic Nails Size (XXL)",
      description: ".",
      price: "From $100",
      duration: "3 hours",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
    {
      title: "Dry Acrylic Predicure",
      description: ".",
      price: "From $55+",
      duration: "3 hours",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Lily Gallegos",
      stylistId: "stylist3"
    },
  ]

  const womensServices = [
    {
      title: "Women's Haircut and Styling",
      description: "Precision cutting and styling tailored to women's preferences.",
      price: "From $45",
      duration: "45 mins",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Shampoo",
      description: "Enjoy a relaxing shampoo treatment that gently cleanses the scalp and hair, promoting healthy shine and softness.",
      price: "From $45",
      duration: "45 mins",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "wash and style",
      description: "Revitalizing wash with scalp massage and professional shampoo tailored to your hair type. Leaves hair clean, refreshed, and ready for styling.",
      price: "From $15",
      duration: "30 mins",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Color no bleach",
      description: "Enhance your natural shade or try something new with a single-process color treatment—no bleach involved.",
      price: "From $100+",
      duration: "2 hours",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Root touch up single color",
      description: "Refresh your color and maintain a seamless look with a root touch-up using single-process color. Perfect for covering grays or maintaining your existing shade.",
      price: "From $70+",
      duration: "1h 30 min ",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "Womens perm long",
      description: "Add lasting volume, texture, and waves with a customized perm designed for long hair. Includes consultation, perm solution, and finishing style for beautiful, defined curls.",
      price: "From $150+",
      duration: "2h 55min ",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
    {
      title: "little girls perm shoulder length",
      description: "A gentle perm service designed for young girls with shoulder-length hair. Adds soft, bouncy curls while keeping comfort and care in mind throughout the process.",
      price: "From $100+",
      duration: "2h 30 min ",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1"
    },
  ]

  const lashServices = [
    {
      title: "Wispy",
      description: "$25 deposit required.",
      price: "From $120",
      duration: "1h 50min",
      imageSrc: "wispy.jpeg",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    {
      title: "Hybrid",
      description: "$25 deposit required.",
      price: "From $100",
      duration: "1h 30min",
      imageSrc: "hybrid.jpeg",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    {
      title: "Lashlift",
      description: "$25 deposit required.",
      price: "From $65",
      duration: "1h",
      imageSrc: "lashlift.jpeg",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    {
      title: "Megas",
      description: "$25 deposit required.",
      price: "From $130",
      duration: "1h 50min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    {
      title: "Mega fill",
      description: "$25 deposit required.",
      price: "From $100",
      duration: "1h 20min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    {
      title: "Volume",
      description: "$25 deposit required.",
      price: "From $110",
      duration: "1h 50min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Daharya Arellano",
      stylistId: "stylist5"
    },
    
  ]
  const waxServices = [
    {
      title: "whole face wax",
      description: ".",
      price: "From $45",
      duration: "15 min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1",
    },
    {
      title: "Nose,Eye or upper lip",
      description: ".",
      price: "From $15",
      duration: "15 min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1",
    },
    {
      title: "Brow wax",
      description: ".",
      price: "From $10",
      duration: "10 min",
      imageSrc: "brow-wax.jpeg",
      stylist: "Dahayra Arellano",
      stylistId: "stylist5",
    },
    {
      title: "Brazilian wax",
      description: ".",
      price: "From $65",
      duration: "30 min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1",
    },
    {
      title: "Bikini wax(side only)",
      description: ".",
      price: "From $30",
      duration: "15 min",
      imageSrc: "/placeholder.svg?height=300&width=400",
      stylist: "Yanet Mendoza",
      stylistId: "stylist1",
    },
  ]

  // Get the active services based on the current tab
  const getActiveServices = () => {
    switch (activeTab) {
      case "barber":
        return barberServices
      case "nails":
        return nailServices
      case "womens":
        return womensServices
      case "lashes":
        return lashServices
      case "waxing":
        return waxServices
      default:
        return barberServices
    }
  }

  // Get the services to display based on showAllServices state
  const servicesToDisplay = showAllServices ? getActiveServices() : getActiveServices().slice(0, initialServicesToShow)

  // Toggle function for the "View Full Service Menu" button
  const toggleServiceDisplay = () => {
    setShowAllServices(!showAllServices)
  }

  // Handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value)
    setShowAllServices(false) // Reset to show only initial services when changing tabs
  }

  return (
    <BookingProvider>
      <div className="flex min-h-screen flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="refinelogo.jpeg"
                alt="Refine Studio logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-semibold tracking-tight">Refine Studio</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#services" className="text-sm font-medium hover:text-primary">
                Services
              </Link>
              <Link href="#gallery" className="text-sm font-medium hover:text-primary">
                Gallery
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
            <div>
              <Button asChild>
                <Link href="#booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-[70vh] overflow-hidden">
              <Image
                src="refinelogo.jpeg"
                alt="Salon interior"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="container px-4 md:px-6">
                <div className="space-y-4 text-white">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Welcome to Refine Studio
                  </h1>
                  <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                    Where beauty meets relaxation. Experience premium salon services in an elegant atmosphere.
                  </p>
                  <div className="space-x-4">
                    <Button size="lg" asChild>
                      <Link href="#booking">Book Appointment</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 border-white/50"
                      asChild
                    >
                      <Link href="#services">Explore Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-12 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Refine Studio</h2>
                  <p className="text-muted-foreground">
                    Refine Studio is a premium salon dedicated to enhancing your natural beauty. Our team of skilled
                    professionals is committed to providing exceptional service in a relaxing environment.
                  </p>
                  <p className="text-muted-foreground">
                    We use only high-quality products and stay updated with the latest trends and techniques to ensure
                    you receive the best care possible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Mon-Sat: 9am-7pm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>412 W 10th St, Odessa, TX 79761</span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                  <Image
                    src="outside.jpeg"
                    alt="Salon atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Discover our range of premium beauty and hair services designed to make you look and feel your best.
                  </p>
                </div>
              </div>
              <Tabs defaultValue="barber" className="mt-8" onValueChange={handleTabChange}>
                <div className="flex justify-center">
                  <TabsList>
                    <TabsTrigger value="barber">Barber Cuts</TabsTrigger>
                    <TabsTrigger value="womens">Womens</TabsTrigger>
                    <TabsTrigger value="nails">Nails</TabsTrigger>
                    <TabsTrigger value="lashes">Lashes</TabsTrigger>
                    <TabsTrigger value="waxing">Waxing</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="barber" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesToDisplay.map((service, index) => (
                      <ServiceCard
                        key={`barber-${index}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                        imageSrc={service.imageSrc}
                        stylist={service.stylist}
                        stylistId={service.stylistId}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="womens" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesToDisplay.map((service, index) => (
                      <ServiceCard
                        key={`womens-${index}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                        imageSrc={service.imageSrc}
                        stylist={service.stylist}
                        stylistId={service.stylistId}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="nails" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesToDisplay.map((service, index) => (
                      <ServiceCard
                        key={`nails-${index}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                        imageSrc={service.imageSrc}
                        stylist={service.stylist}
                        stylistId={service.stylistId}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="lashes" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesToDisplay.map((service, index) => (
                      <ServiceCard
                        key={`lashes-${index}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                        imageSrc={service.imageSrc}
                        stylist={service.stylist}
                        stylistId={service.stylistId}
                      />
                    ))}
                      </div>
                </TabsContent>
                <TabsContent value="waxing" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesToDisplay.map((service, index) => (
                      <ServiceCard
                        key={`waxing-${index}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                        imageSrc={service.imageSrc}
                        stylist={service.stylist}
                        stylistId={service.stylistId}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-10 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={toggleServiceDisplay}
                  className="mx-auto flex items-center gap-2"
                >
                  {showAllServices ? (
                    <>
                      Show Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      View Full Service Menu <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-12 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Gallery</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Browse through our portfolio showcasing our best work and salon atmosphere.
                  </p>
                </div>
              </div>
              <GallerySection />
            </div>
          </section>

         {/* Testimonials Section */}
<section id="testimonials" className="py-12 md:py-24">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Read testimonials from our satisfied clients about their experience at Refine Studio.
        </p>
      </div>
    </div>

    {/* Replace the old testimonial cards with these three */}
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialCard
        name="Marcella Ruuemau"
        quote="I took my son to Refine Studio and had a pleasant experience! Barber Louis was amazing with my son and very patient! We'll definitely be going there from now on! Great with children."
        rating={5}
        service="Kids Haircut"
      />
      <TestimonialCard
        name="Bianca Palacios"
        quote="Took my girl in for her first-time trim, little to no wait, walk-in, and she loved it! Thank you!"
        rating={5}
        service="Kids Haircut"
      />
      <TestimonialCard
        name="Raul Franco"
        quote="I had an amazing experience at Refine Studio. The staff was incredibly friendly and professional. My barber, Yanet, took the time to understand exactly what I wanted and delivered a fantastic haircut. The shop was clean and had a relaxing atmosphere. I would highly recommend Refine Studio to anyone looking for top-notch service and a great haircut."
        rating={5}
        service="Men’s Haircut"
      />
    </div>

    <div className="mt-10 text-center">
      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <span>4.8 average rating from 100+ reviews</span>
      </div>
    </div>
  </div>
</section>


          {/* Booking Section */}
          <section id="booking" className="py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Book Your Appointment</h2>
                  <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                    Choose your stylist and service, then schedule your visit to Refine Studio.
                  </p>
                </div>
              </div>
              <BookingSection />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
                  <p className="text-muted-foreground mt-2">
                    Have questions or need more information? Reach out to us using the information below.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-muted-foreground">412 W 10th St, odessa, tx 79761</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <div className="flex gap-3 mt-1">
                        <Link href="tel:1234567890" className="text-primary hover:underline flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          Call
                        </Link>
                        <Link
                          href="sms:1234567890?body=Hi%20Refine%20Studio%2C%20I%27d%20like%20to%20inquire%20about%20"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          <MessageSquare className="h-4 w-4" />
                          Text
                        </Link>
                      </div>
                      <p className="text-muted-foreground mt-1">(432) 385-9381</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        <Link
                          href="mailto:info@refinestudio.com?subject=Inquiry%20from%20Website&body=Hello%20Refine%20Studio%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0A%0AThank%20you%2C%0A"
                          className="hover:underline text-primary"
                        >
                          refinestudio40@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 7pm</p>
                      <p className="text-muted-foreground">Saturday: 10am - 6pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="https://www.instagram.com/_refine_studio?igsh=dDNsc2VoNjRtZXp5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="https://www.facebook.com/share/151A5Pnamy/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Facebook className="h-5 w-5" />
                      Facebook
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="refinelogo.jpeg"
                alt="Refine Studio logo"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Refine Studio. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Terms of Service
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </BookingProvider>
  )
}
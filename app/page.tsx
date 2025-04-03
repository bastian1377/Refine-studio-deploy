import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Phone, Mail, Instagram, Facebook, ChevronRight, Star, MessageSquare } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
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
              src="/refinelogo.jpeg"
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
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/50" asChild>
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
                  We use only high-quality products and stay updated with the latest trends and techniques to ensure you
                  receive the best care possible.
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
                  src="/placeholder.svg?height=600&width=600"
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
            <Tabs defaultValue="hair" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="hair">Hair</TabsTrigger>
                  <TabsTrigger value="nails">Nails</TabsTrigger>
                  <TabsTrigger value="makeup">Makeup</TabsTrigger>
                  <TabsTrigger value="spa">Spa</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="hair" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Haircut & Styling"
                    description="Precision cutting and styling tailored to your face shape and preferences."
                    price="From $45"
                    duration="45 mins"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Hair Coloring"
                    description="From subtle highlights to bold transformations using premium products."
                    price="From $85"
                    duration="2 hours"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Hair Treatments"
                    description="Nourishing treatments to repair and revitalize damaged hair."
                    price="From $65"
                    duration="1 hour"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </TabsContent>
              <TabsContent value="nails" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Manicure"
                    description="Classic or gel manicures with a wide range of colors to choose from."
                    price="From $35"
                    duration="45 mins"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Pedicure"
                    description="Relaxing foot treatment with exfoliation, massage, and polish."
                    price="From $45"
                    duration="1 hour"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Nail Art"
                    description="Custom designs and embellishments to express your personal style."
                    price="From $15"
                    duration="30 mins"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </TabsContent>
              <TabsContent value="makeup" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Everyday Makeup"
                    description="Natural-looking makeup that enhances your features for daily wear."
                    price="From $55"
                    duration="45 mins"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Special Occasion"
                    description="Glamorous makeup for weddings, parties, and special events."
                    price="From $85"
                    duration="1 hour"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Makeup Lesson"
                    description="Learn techniques and tips from our professional makeup artists."
                    price="From $95"
                    duration="1.5 hours"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </TabsContent>
              <TabsContent value="spa" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Facial Treatment"
                    description="Customized facial to address your specific skin concerns."
                    price="From $75"
                    duration="1 hour"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Massage Therapy"
                    description="Relaxing massage to relieve tension and promote wellness."
                    price="From $85"
                    duration="1 hour"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                  <ServiceCard
                    title="Body Scrub"
                    description="Exfoliating treatment that leaves your skin smooth and refreshed."
                    price="From $65"
                    duration="45 mins"
                    imageSrc="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="#booking" className="flex items-center gap-2">
                  View Full Service Menu <ChevronRight className="h-4 w-4" />
                </Link>
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
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                quote="The best salon experience I've ever had! My stylist really listened to what I wanted and delivered beyond my expectations."
                rating={5}
                service="Haircut & Coloring"
              />
              <TestimonialCard
                name="Michael Chen"
                quote="Incredibly professional service in a relaxing atmosphere. The attention to detail is impressive, and I always leave feeling refreshed."
                rating={5}
                service="Facial & Massage"
              />
              <TestimonialCard
                name="Emily Rodriguez"
                quote="I've been coming to Refine Studio for over a year now, and I wouldn't trust anyone else with my hair. Consistent quality every time!"
                rating={5}
                service="Hair Styling"
              />
            </div>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>4.9 average rating from 200+ reviews</span>
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
                    <p className="text-muted-foreground">123 Beauty Lane, City, State 12345</p>
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
                    <p className="text-muted-foreground mt-1">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      <Link
                        href="mailto:refinestudio40@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20Refine%20Studio%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0A%0AThank%20you%2C%0A"
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
              src="/placeholder.svg?height=24&width=24"
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
  )
}

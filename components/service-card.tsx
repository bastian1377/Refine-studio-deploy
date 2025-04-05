"use client"

import Image from "next/image"
import { Clock, User } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useBooking } from "@/contexts/booking-context"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  duration: string
  imageSrc: string
  stylist?: string
  stylistId?: string
}

export function ServiceCard({ title, description, price, duration, imageSrc, stylist, stylistId }: ServiceCardProps) {
  const { setSelectedStylistId } = useBooking()
  const router = useRouter()

  const handleBookClick = () => {
    if (stylistId) {
      setSelectedStylistId(stylistId)

      // Navigate to the booking section
      const bookingSection = document.getElementById("booking")
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If no stylist ID, just navigate to the booking section
      router.push("#booking")
    }
  }

  const handleTabChange = (value: string) => {
    // Handle tab change logic
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          {/* Display stylist if provided */}
          {stylist && (
            <div className="flex items-center gap-1 text-sm mt-2">
              <User className="h-3.5 w-3.5 text-primary" />
              <span>By {stylist}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div>
          <p className="font-medium text-lg">{price}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
        </div>
        <Button onClick={handleBookClick}>Book</Button>
      </CardFooter>
    </Card>
  )
}


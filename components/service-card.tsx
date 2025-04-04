import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <Button asChild>
          <Link href={stylistId ? `#booking?stylist=${stylistId}` : "#booking"}>Book</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


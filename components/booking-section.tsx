"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, MessageSquare, User } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

// Staff data with phone numbers and optional Booksy URLs
const staffMembers = [
  {
    id: "stylist1",
    name: " Yanet Mendoza",
    role: "Senior Stylist",
    specialties: ["Haircuts", "beard trims", "kids haircuts"],
    image: "/yanet.jpeg",
    phone: "(432) 385-9381",
    booksyUrl: "https://booksy.com/en-us/92903_yanet-kutz_barber-shop_36585_odessa#ba_s=sh_1", // Optional
  },
  {
    id: "stylist2",
    name: "Jose Luis Sanchez",
    role: " Barber",
    specialties: ["male haircuts", "beard trims", "kids haircuts"],
    image: "joseLuis.jpeg",
    phone: "(432) 813-6873",
    booksyUrl: "https://booksy.com/en-us/1132148_joseluis-sanchez_barber-shop_36585_odessa#ba_s=sh_1", // No Booksy link
  },
  {
    id: "stylist3",
    name: "Lily Gallegos",
    role: "Nail Technician",
    specialties: ["Manicures", "Pedicures", "Nail Art"],
    image: "/Lily.jpeg",
    phone: "(123) 456-7892",
    booksyUrl: "https://booksy.com/en-us/1408726_refine-studio_nail-salon_36585_odessa?do=invite&_branch_match_id=1318834396752231070&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzL3MypK8jC2CEyyrytKTUstKsrMS49PKsovL04tsnVNSU8FAFJvC286AAAA",
  },
  {
    id: "stylist4",
    name: "Pam Chavez",
    role: "barber",
    specialties: ["male haircuts", "beard trims",],
    image: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1290693/biz_photo/e15a870df7ff4b4da49b6d5eac3888-pam-biz-photo-910db9f2679f40e3b1707a30ba21ba-booksy.jpeg?size=640x427",
    phone: "(432) 853-6030",
    booksyUrl: "https://booksy.com/en-us/1290693_pam_barber-shop_36585_odessa#ba_s=sr_1",
  },
  {
    id: "stylist5",
    name: "Dahayra Arellano",
    role: "Lash artist , Cosmetologist",
    specialties: ["Lash extensions", "Cosmetology"],
    image: "/glam.jpeg",
    phone: "(123) 456-7893",
    booksyUrl: "https://glambydee1993.glossgenius.com/services",
  },
  {
    id: "stylist6",
    name: "Destanie Bejarano",
    role: "hair stylist",
    specialties: ["haircuts"],
    image: "/destanie.jpeg",
    phone: "(432) 225-2899",
    booksyUrl: "",
  },
]

export function BookingSection() {
  const [selectedStaff, setSelectedStaff] = useState(staffMembers[0].id)
  const [selectedService, setSelectedService] = useState("hair")
  const [contactMethod, setContactMethod] = useState<"call" | "text" | "online">("online")

  const selectedStaffMember = staffMembers.find((staff) => staff.id === selectedStaff)

  // Parse URL parameters when component mounts
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Get the hash part of the URL (e.g., #booking?stylist=stylist2)
      const hash = window.location.hash

      // Check if the hash contains a stylist parameter
      if (hash.includes("?stylist=")) {
        const stylistId = hash.split("?stylist=")[1]

        // Check if the stylist ID exists in our staff members
        const stylistExists = staffMembers.some((staff) => staff.id === stylistId)

        if (stylistExists) {
          setSelectedStaff(stylistId)

          // Scroll to the booking section
          const bookingSection = document.getElementById("booking")
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }
  }, [])

  // Set default contact method based on Booksy availability
  useEffect(() => {
    if (selectedStaffMember?.booksyUrl) {
      setContactMethod("online")
    } else {
      setContactMethod("call")
    }
  }, [selectedStaff, selectedStaffMember])

  const handleBooking = () => {
    if (selectedStaffMember) {
      if (contactMethod === "online" && selectedStaffMember.booksyUrl) {
        window.open(selectedStaffMember.booksyUrl, "_blank")
      } else if (contactMethod === "call") {
        window.location.href = `tel:${selectedStaffMember.phone.replace(/[^0-9]/g, "")}`
      } else if (contactMethod === "text") {
        window.location.href = `sms:${selectedStaffMember.phone.replace(/[^0-9]/g, "")}?body=Hi ${selectedStaffMember.name}, I'd like to book an appointment for ${selectedService} services.`
      }
    }
  }

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg border-primary/10">
        <CardContent className="p-6">
          <Tabs defaultValue="staff" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="staff">Choose Staff</TabsTrigger>
              <TabsTrigger value="service">Select Service</TabsTrigger>
            </TabsList>
            <TabsContent value="staff" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Select Your Stylist</h3>
              <RadioGroup value={selectedStaff} onValueChange={setSelectedStaff} className="grid gap-4 md:grid-cols-2">
                {staffMembers.map((staff) => (
                  <div key={staff.id} className="relative">
                    <RadioGroupItem value={staff.id} id={staff.id} className="peer sr-only" />
                    <Label
                      htmlFor={staff.id}
                      className="flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-secondary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50"
                    >
                      <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium">{staff.name}</h4>
                        <p className="text-sm text-muted-foreground">{staff.role}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {staff.specialties.map((specialty, index) => (
                            <span key={index} className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Link
                            href={`tel:${staff.phone.replace(/[^0-9]/g, "")}`}
                            className="text-xs flex items-center gap-1 text-primary hover:underline"
                          >
                            <Phone className="h-3 w-3" />
                            Call
                          </Link>
                          <Link
                            href={`sms:${staff.phone.replace(/[^0-9]/g, "")}?body=Hi, I'd like to book an appointment with ${staff.name} for ${selectedService} services.`}
                            className="text-xs flex items-center gap-1 text-primary hover:underline"
                          >
                            <MessageSquare className="h-3 w-3" />
                            Text
                          </Link>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Select Service Category</h3>
              <RadioGroup
                value={selectedService}
                onValueChange={setSelectedService}
                className="grid gap-4 md:grid-cols-2"
              >
                <div className="relative">
                  <RadioGroupItem value="hair" id="hair" className="peer sr-only" />
                  <Label
                    htmlFor="hair"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <User className="mb-3 h-6 w-6" />
                    Hair Services
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="nails" id="nails" className="peer sr-only" />
                  <Label
                    htmlFor="nails"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <User className="mb-3 h-6 w-6" />
                    Nail Services
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="makeup" id="makeup" className="peer sr-only" />
                  <Label
                    htmlFor="makeup"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <User className="mb-3 h-6 w-6" />
                    Makeup Services
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="spa" id="spa" className="peer sr-only" />
                  <Label
                    htmlFor="spa"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <User className="mb-3 h-6 w-6" />
                    Spa Services
                  </Label>
                </div>
              </RadioGroup>
            </TabsContent>
          </Tabs>

          {selectedStaffMember && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-3">How would you like to book with {selectedStaffMember.name}?</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {selectedStaffMember.booksyUrl && (
                  <Button
                    variant={contactMethod === "online" ? "default" : "outline"}
                    className="flex gap-2 justify-center"
                    onClick={() => setContactMethod("online")}
                  >
                    <Calendar className="h-4 w-4" />
                    Book Online
                  </Button>
                )}

                <Button
                  variant={contactMethod === "call" ? "default" : "outline"}
                  className="flex gap-2 justify-center"
                  onClick={() => setContactMethod("call")}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>

                <Button
                  variant={contactMethod === "text" ? "default" : "outline"}
                  className="flex gap-2 justify-center"
                  onClick={() => setContactMethod("text")}
                >
                  <MessageSquare className="h-4 w-4" />
                  Text
                </Button>
              </div>

              <Button onClick={handleBooking} className="w-full">
                {contactMethod === "online" ? "Book Online" : contactMethod === "call" ? "Call Now" : "Text Now"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type BookingContextType = {
  selectedStylistId: string | null
  setSelectedStylistId: (id: string | null) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(null)

  return (
    <BookingContext.Provider value={{ selectedStylistId, setSelectedStylistId }}>{children}</BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider")
  }
  return context
}

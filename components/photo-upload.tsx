"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhotoUploadProps {
  userPhoto: string | null
  setUserPhoto: (photo: string | null) => void
}

export function PhotoUpload({ userPhoto, setUserPhoto }: PhotoUploadProps) {
  const [isOpen, setIsOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUserPhoto(e.target?.result as string)
        setIsOpen(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = () => {
    setUserPhoto(null)
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed top-24 left-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="relative p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl transition-all duration-300 hover:scale-110 cursor-none border-2 border-white/20"
        >
          <Camera className="h-6 w-6 text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white font-heading">Upload Photo</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full cursor-none"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="space-y-4">
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-none"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Choose Photo
                </Button>

                {userPhoto && (
                  <Button
                    onClick={removePhoto}
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent py-3 rounded-xl font-semibold transition-all duration-300 cursor-none"
                  >
                    Remove Current Photo
                  </Button>
                )}
              </div>

              <p className="text-white/60 text-sm mt-4 text-center">
                Upload a professional photo to personalize your portfolio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

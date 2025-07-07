"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Certificate } from "@/app/page"

interface CertificatesSectionProps {
  setSelectedCertificate: (certificate: Certificate) => void
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2024",
    description: "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and database management.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://freecodecamp.org/certification/saniya/full-stack",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "Advanced JavaScript programming concepts, algorithms, and data structures implementation.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://freecodecamp.org/certification/saniya/javascript",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: "3",
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "Modern responsive web design techniques using HTML5, CSS3, Flexbox, and CSS Grid.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://freecodecamp.org/certification/saniya/responsive-web-design",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
  },
  {
    id: "4",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    description: "Professional React development certification covering hooks, state management, and best practices.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://coursera.org/verify/professional-cert/react-meta",
    skills: ["React", "JSX", "Hooks", "State Management", "Component Design"],
  },
  {
    id: "5",
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    description: "User experience design principles, prototyping, and user research methodologies.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://coursera.org/verify/professional-cert/ux-google",
    skills: ["UI Design", "UX Research", "Prototyping", "Figma", "User Testing"],
  },
  {
    id: "6",
    title: "Cloud Computing Essentials",
    issuer: "AWS",
    date: "2024",
    description: "Fundamentals of cloud computing, AWS services, and cloud architecture principles.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://aws.amazon.com/certification/verify/cloud-essentials",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "Cloud Architecture"],
  },
]

export function CertificatesSection({ setSelectedCertificate }: CertificatesSectionProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30">
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="p-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30"
                    >
                      <Award className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center text-white/80 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificate.date}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {certificate.title}
                  </h3>
                  <p className="text-purple-300 font-medium mb-3 text-sm">{certificate.issuer}</p>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{certificate.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-white/10 text-white/80 text-xs px-2 py-1">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-white/10 text-white/80 text-xs px-2 py-1">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedCertificate(certificate)
                      }}
                    >
                      View Details
                    </Button>

                    {certificate.credentialUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

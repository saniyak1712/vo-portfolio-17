"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/app/page"

interface ProjectsSectionProps {
  setSelectedProject: (project: Project) => void
}

const projects: Project[] = [
  {
    id: "1",
    title: "Advanced Portfolio Website",
    description: "A modern, responsive portfolio with advanced animations and interactive features.",
    longDescription:
      "This portfolio website showcases advanced web development skills using React, Next.js, and Framer Motion. It features smooth animations, glassmorphism design, interactive project modals, and a responsive layout that works seamlessly across all devices. The site includes advanced CSS techniques, TypeScript for type safety, and modern UI components.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design with mobile-first approach",
      "Advanced animations and micro-interactions",
      "Interactive project and certificate modals",
      "Glassmorphism UI design",
      "TypeScript for type safety",
      "Optimized performance and SEO",
    ],
    demoUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/saniyakhandelwal/portfolio",
    category: "Web Development",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payment integration.",
    longDescription:
      "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing, order management, and admin dashboard. The application uses React for the frontend, Node.js for the backend, and MongoDB for data storage.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory management",
    ],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/saniyakhandelwal/ecommerce",
    category: "Full Stack",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates.",
    longDescription:
      "A collaborative task management application that helps teams organize and track their work efficiently. Built with React and Firebase, it features real-time synchronization, drag-and-drop functionality, team collaboration tools, and detailed analytics. The app supports multiple project views including Kanban boards and calendar views.",
    image: "image.pngheight=300&width=500",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    features: [
      "Real-time collaboration and updates",
      "Drag-and-drop task management",
      "Multiple project views (Kanban, Calendar)",
      "Team member management",
      "Progress tracking and analytics",
      "Mobile-responsive design",
    ],
    demoUrl: "https://saniyak1712.github.io/coffee-shop/",
    githubUrl: "https://saniyak1712.github.io/coffee-shop/",
    category: "Web Application",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization and forecasting.",
    longDescription:
      "An interactive weather dashboard that provides current weather conditions, forecasts, and historical data visualization. Built with React and integrated with multiple weather APIs, it features interactive charts, location-based weather data, and customizable dashboard widgets. The application also includes weather alerts and notifications.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    features: [
      "Current weather and 7-day forecast",
      "Interactive charts and data visualization",
      "Location-based weather data",
      "Weather alerts and notifications",
      "Customizable dashboard widgets",
      "Historical weather data analysis",
    ],
    demoUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/saniyakhandelwal/weather-dashboard",
    category: "Data Visualization",
  },
]

export function ProjectsSection({ setSelectedProject }: ProjectsSectionProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing my development skills through practical applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-purple-500/80 text-white">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-white/10 text-white/80">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>

                    {project.demoUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
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

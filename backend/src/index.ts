import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';

const app = new Hono()

app.use("/*", cors());

app.get('/projects', (c) => {
  return c.json({projectList:[
    {
      id: "1",
      title: "E-commerce Platform Redesign",
      description: "Overhaul the user interface and improve the user experience of our online store.",
      createdAt: "2023-09-15T10:30:00Z",
      category: "Web Development"
    },
    {
      id: "2",
      title: "Mobile App for Fitness Tracking",
      description: "Develop a cross-platform mobile application for tracking workouts and nutrition.",
      createdAt: "2023-10-02T14:45:00Z",
      category: "Mobile Development"
    },
    {
      id: "3",
      title: "AI-powered Customer Service Chatbot",
      description: "Implement an AI chatbot to handle common customer inquiries and support requests.",
      createdAt: "2023-10-20T09:15:00Z",
      category: "Artificial Intelligence"
    },
    {
      id: "4",
      title: "Data Visualization Dashboard",
      description: "Create an interactive dashboard to visualize and analyze company sales data.",
      createdAt: "2023-11-05T11:00:00Z",
      category: "Data Analysis"
    },
    {
      id: "5",
      title: "Blockchain-based Supply Chain System",
      description: "Develop a blockchain solution to enhance transparency and traceability in the supply chain.",
      createdAt: "2023-11-18T16:20:00Z",
      category: "Blockchain"
    },
    {
      id: "6",
      title: "Cloud Migration Strategy",
      description: "Plan and execute the migration of on-premises infrastructure to a cloud-based solution.",
      createdAt: "2023-12-01T13:10:00Z",
      category: "Cloud Computing"
    },
    {
      id: "7",
      title: "Augmented Reality Product Catalog",
      description: "Develop an AR application that allows customers to visualize products in their own space.",
      createdAt: "2023-12-15T10:45:00Z",
      category: "Augmented Reality"
    },
    {
      id: "8",
      title: "Cybersecurity Threat Detection System",
      description: "Implement an advanced system to detect and respond to potential security threats in real-time.",
      createdAt: "2024-01-03T09:30:00Z",
      category: "Cybersecurity"
    },
    {
      id: "9",
      title: "IoT-based Smart Home Solution",
      description: "Create a comprehensive IoT system for home automation and energy management.",
      createdAt: "2024-01-20T15:00:00Z",
      category: "Internet of Things"
    },
    {
      id: "10",
      title: "Machine Learning Model for Predictive Maintenance",
      description: "Develop a ML model to predict equipment failures and optimize maintenance schedules.",
      createdAt: "2024-02-05T11:20:00Z",
      category: "Machine Learning"
    }
  ]})
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
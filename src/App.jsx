
import React from 'react'
import { Button } from '../components/ui/button'
import './App.css'

function App() {
  const handleClick = () => {
    alert('Hello from React!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
            Hello World!
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to your React + Vite + Tailwind CSS application
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleClick}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </Button>
          <Button 
            variant="outline"
            className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Learn More
          </Button>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Built with ⚡ Vite, ⚛️ React, and 🎨 Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

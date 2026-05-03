'use client'

import React, { useState } from 'react'
import { Linkedin, Instagram, MessageCircle, Send, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          service: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-myblack text-white">
      {/* Header Section */}
      <div className="bg-myblack border-b-8 border-accentColor">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            <div>
              <h1 className="text-5xl md:text-8xl font-guzan font-bold mb-4 text-accentColor">
                GET IN TOUCH
              </h1>
              <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-2xl">
                Let&apos;s build something amazing together. Drop us a line and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <a
              href="https://wa.me/918938850519"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 self-start bg-white border-4 border-accentColor text-myblack font-inter font-bold text-base md:text-lg px-5 py-3 md:px-6 md:py-4 shadow-[4px_4px_0px_0px_rgba(162,242,62,1)] hover:shadow-[6px_6px_0px_0px_rgba(162,242,62,1)] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={22} className="flex-shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Social Links */}
          <div className="space-y-8">
            {/* Social Media Section */}
            <div className="bg-white border-8 border-accentColor p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(162,242,62,1)]">
              <h2 className="text-3xl md:text-4xl font-guzan font-bold text-myblack mb-6">
                CONNECT WITH US
              </h2>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/broocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-accentColor border-4 border-myblack text-myblack font-inter font-bold text-lg hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all"
                >
                  <Linkedin size={28} className="flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/broocode.grow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-accentColor border-4 border-myblack text-myblack font-inter font-bold text-lg hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all"
                >
                  <Instagram size={28} className="flex-shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/+918938850519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-accentColor border-4 border-myblack text-myblack font-inter font-bold text-lg hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all"
                >
                  <MessageCircle size={28} className="flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-accentColor border-8 border-myblack p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-guzan font-bold text-myblack mb-4">
                WHY CHOOSE US?
              </h3>
              <ul className="space-y-3 font-inter text-myblack font-semibold text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">→</span>
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">→</span>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">→</span>
                  <span>Fast response time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">→</span>
                  <span>Customized solutions for your needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white border-8 border-accentColor p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(162,242,62,1)]">
            <h2 className="text-3xl md:text-4xl font-guzan font-bold text-myblack mb-8">
              SEND US A MESSAGE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-myblack font-inter font-bold text-lg mb-2">
                  NAME *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-4 border-myblack bg-white text-myblack font-inter font-semibold text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-myblack font-inter font-bold text-lg mb-2">
                  EMAIL *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-4 border-myblack bg-white text-myblack font-inter font-semibold text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Mobile Field */}
              <div>
                <label htmlFor="mobile" className="block text-myblack font-inter font-bold text-lg mb-2">
                  MOBILE *
                </label>
                <Input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-4 border-myblack bg-white text-myblack font-inter font-semibold text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-myblack font-inter font-bold text-lg mb-2">
                  WHAT SERVICE DO YOU NEED? *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-4 border-myblack bg-white text-myblack font-inter font-semibold text-base px-3 py-2 appearance-none cursor-pointer focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-gray-50 transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23121212' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '40px'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="custom-software">Custom Software</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 border-4 border-myblack font-inter font-semibold ${
                    submitStatus.type === 'success'
                      ? 'bg-accentColor text-myblack'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-accentColor border-4 border-myblack text-myblack font-guzan font-bold text-xl hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={24} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />

     
    </div>
  )
}

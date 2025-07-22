// src/components/ContactForm.tsx
'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setMessage('')
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {status === 'sending'
          ? 'Sending...'
          : status === 'success'
          ? 'Sent!'
          : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-center mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
)
}

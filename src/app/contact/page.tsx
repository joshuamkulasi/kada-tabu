'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [product, setProduct] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: '',
    subject: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Get search params using the client-side API
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const productParam = searchParams.get('product');
    const serviceParam = searchParams.get('service');
    
    if (productParam) {
      setProduct(productParam);
      setFormData({ ...formData, product: productParam, subject: `Enquiry about ${productParam}` });
    } else if (serviceParam) {
      setProduct(serviceParam);
      setFormData({ ...formData, product: serviceParam, subject: `Enquiry about ${serviceParam}` });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you for your message!</h2>
          <p className="text-gray-600 text-lg">We will get back to you as soon as possible.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 px-6 py-2 bg-[#f5dd7b] text-[#83580b] rounded-lg hover:bg-[#ffd966] transition-colors text-lg"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-900 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="product" className="block text-lg font-medium text-gray-900 mb-2">
              Product/Service
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full h-32 px-4 border border-gray-300 rounded-lg focus:border-[#f5dd7b] focus:ring-[#f5dd7b] text-lg text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 flex justify-center items-center bg-[#f5dd7b] text-[#83580b] rounded-lg hover:bg-[#ffd966] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f5dd7b] text-lg font-medium transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

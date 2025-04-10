'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  category: string;
  images: string[];
}

interface Projects {
  [key: string]: Project;
}

const projects: Projects = {
  'corporate-branding': {
    title: 'Corporate Branding',
    description: 'Complete brand identity for a corporate client',
    category: 'Branding',
    images: [
      '/portfolio/corporate-branding-1.jpg',
      '/portfolio/corporate-branding-2.jpg',
      '/portfolio/corporate-branding-3.jpg',
    ],
  },
  'event-graphics': {
    title: 'Event Graphics',
    description: 'Designs for a major corporate event',
    category: 'Events',
    images: [
      '/portfolio/event-graphics-1.jpg',
      '/portfolio/event-graphics-2.jpg',
      '/portfolio/event-graphics-3.jpg',
    ],
  },
  'product-packaging': {
    title: 'Product Packaging',
    description: 'Custom packaging design for a new product launch',
    category: 'Packaging',
    images: [
      '/portfolio/packaging-1.jpg',
      '/portfolio/packaging-2.jpg',
      '/portfolio/packaging-3.jpg',
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Social media graphics and digital content',
    category: 'Digital',
    images: [
      '/portfolio/digital-1.jpg',
      '/portfolio/digital-2.jpg',
      '/portfolio/digital-3.jpg',
    ],
  },
};

export default function ProjectGallery() {
  const params = useParams();
  const slug = params.slug as string;
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = projects[slug];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleNextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const handlePrevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    },
    [handleCloseModal, handleNextImage, handlePrevImage]
  );

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#83580b' }}>
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{project.description}</p>
          <p className="text-lg text-gray-600">Category: {project.category}</p>
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onClick={() => {
                setCurrentImage(index);
                setIsModalOpen(true);
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-transparent group-hover:border-kada-brown transition-all duration-300">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div 
              className="relative max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={project.images[currentImage]}
                      alt={project.title}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-4 left-4 text-white">
                <button
                  onClick={handleCloseModal}
                  className="text-2xl hover:text-gray-300 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
                >
                  &times;
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 text-white">
                <button
                  onClick={handlePrevImage}
                  disabled={currentImage === 0}
                  className="text-2xl hover:text-gray-300 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 disabled:opacity-50"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNextImage}
                  disabled={currentImage === project.images.length - 1}
                  className="text-2xl hover:text-gray-300 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 disabled:opacity-50"
                >
                  &rarr;
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {project.images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentImage === index
                        ? 'bg-kada-brown'
                        : 'bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#83580b' }}>
            Enquire About This Project
          </h2>
          <Link
            href={`/contact?product=${encodeURIComponent(project.title)}`}
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300"
            style={{ backgroundColor: '#83580b' }}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

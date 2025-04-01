'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoArrowBack, IoArrowForward, IoLogoWhatsapp } from 'react-icons/io5';
import Link from 'next/link';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/cloudinary');
        const processedImages = response.data.map((img, index) => ({
          ...img,
          size: getRandomSize(index)
        }));
        setImages(processedImages);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        handleNext(e);
      } else if (e.key === 'ArrowLeft') {
        handlePrevious(e);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  const getRandomSize = (index) => {
    // Create more varied sizes for Pinterest-like layout
    const sizes = ['small', 'normal', 'medium', 'large'];
    const weights = [0.2, 0.4, 0.3, 0.1]; // Probability weights for each size
    
    const random = Math.random();
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (random < sum) return sizes[i];
    }
    return 'normal';
  };

  const getTileClassName = (size) => {
    switch (size) {
      case 'small':
        return 'row-span-1';
      case 'medium':
        return 'row-span-2';
      case 'large':
        return 'row-span-3';
      default:
        return 'row-span-1';
    }
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  if (loading) {
    return (
      <>
        <div className="w-full px-4 ">
          <motion.nav className="flex font-galactic h-24 justify-between w-full border border-black bg-[#ECDFCC] rounded-xl items-center font-satoshi mb-4 mt-4 px-6">
            {/* Contact Button */}
            <motion.a
              href="https://wa.me/972525076029"
              target="_blank"
              className="button-86 text-sm flex items-center  font-gambarino hover:scale-105 transform transition-all"
            >
              <IoLogoWhatsapp className="text-xl mr-2" />
              צור קשר
            </motion.a>

            {/* Centered Logo */}
            <motion.div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="profile"
                  className="rounded-xl hover:scale-110 transition-all"
                />
              </Link>
            </motion.div>

            {/* Empty div for spacing */}
            <div className="w-[88px]"></div>
          </motion.nav>

          {/* Loading container */}
          <div className="min-h-[calc(100vh-8rem)] flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#ECDFCC] border-t-transparent"></div>
              <span className="text-[#ECDFCC] font-gambarino">...טוען גלריה</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="text-[#ECDFCC] text-center py-8">
        שגיאה בטעינת התמונות: {error}
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-4 overflow-y-hidden">
      <motion.nav className="flex font-galactic h-24 justify-between w-full border border-black bg-[#ECDFCC] rounded-xl items-center font-satoshi mb-4 mt-4 px-6">
        {/* Contact Button */}

        <motion.a
          href="https://wa.me/972525076029"
          target="_blank"
          className="button-86 text-sm flex items-center  font-gambarino hover:scale-105 transform transition-all"
        >
          <IoLogoWhatsapp className="text-xl mr-2" />
          צור קשר
         </motion.a>


        {/* Centered Logo */}
        <motion.div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="profile"
              className="rounded-xl hover:scale-110 transition-all"
            />
          </Link>
        </motion.div>

        {/* Empty div for spacing */}
        <div className="w-[88px]"></div>
      </motion.nav>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 [column-fill:_balance] w-full">
          {images.map((image, index) => {
            // Calculate row and column position
            const columnCount = window.innerWidth >= 1536 ? 6 : // 2xl
                               window.innerWidth >= 1280 ? 5 : // xl
                               window.innerWidth >= 1024 ? 4 : // lg
                               window.innerWidth >= 768 ? 3 : // md
                               window.innerWidth >= 640 ? 2 : // sm
                               1; // mobile
            
            const row = Math.floor(index / columnCount);
            
            return (
              <motion.div
                key={image.public_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: { duration: 0.5, delay: row * 0.15 },
                  y: { duration: 0.5, delay: row * 0.15 },
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className={`relative break-inside-avoid mb-4 rounded-xl overflow-hidden cursor-pointer group ${getTileClassName(image.size)}`}
                onClick={() => handleImageClick(image, index)}
              >
                <div className={`relative ${
                  image.size === 'small' ? 'md:h-[300px] h-[500px]' :
                  image.size === 'medium' ? 'md:h-[400px] h-[500px]' :
                  image.size === 'large' ? 'md:h-[500px] h-[600px]' :
                  'md:h-[400px] h-[600px]'
                }`}>
                  <Image
                    src={image.secure_url}
                    alt="Gallery Image"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for fullscreen view */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-4xl hover:text-gray-300 transition-colors"
              >
                <IoClose />
              </button>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            >
              <IoArrowBack />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            >
              <IoArrowForward />
            </button>

            <motion.div
              key={selectedImage.public_id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="relative w-full max-w-7xl h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.secure_url}
                alt="Selected Image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
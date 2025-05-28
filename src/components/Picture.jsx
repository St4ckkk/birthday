import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { pic1, pic2, pic3, pic4, pic5} from '../assets';
import SectionWrapper from './SectionWrapper';

// Add your own images by putting them in the assets folder and import them.
const images = [
 pic1,
 pic2,
 pic3,
 pic4,
 pic5,
];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const allImagesLoaded = loadedImages === images.length;
  
  return (
    <SectionWrapper>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ 
            scale: 0.8, 
            opacity: 0,
            rotate: Math.random() * 10 - 5 
          }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: Math.random() * 10 - 5 
          }}
          exit={{ 
            scale: 1.2, 
            opacity: 0,
            rotate: Math.random() * 20 - 10 
          }}
          transition={{ duration: 0.5 }}
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Birthday image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad}
          />
          
          {allImagesLoaded && currentImageIndex === images.length - 1 && (
            <motion.div 
              className="absolute inset-0 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-customBlue text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/card'}
              >
                Continue to Birthday Card
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {allImagesLoaded && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-customBlue' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

export default Picture;
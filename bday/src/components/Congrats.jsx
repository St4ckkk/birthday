import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';
// Import the LPT image properly
import lptImage from '../assets/lpt.jpg';
// Import confetti gif - you'll need to add this to your assets folder
import confettiGif from '../assets/confetti.gif';

function Congrats() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
     <div className="relative w-full h-full flex flex-col items-center justify-center py-4">
        <motion.div 
          className="text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => setIsAnimationComplete(true)}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-customBlue mb-6">
            Congratulations!
          </h1>
          
        <div className="relative w-full max-w-2xl mx-auto mb-8">
  {/* Top left confetti */}
  <motion.img 
    src={confettiGif}
    alt="Confetti" 
    className="absolute top-0 left-0 w-20 h-20 z-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  />
  
  {/* Top right confetti */}
  <motion.img 
    src={confettiGif}
    alt="Confetti" 
    className="absolute top-0 right-0 w-20 h-20 z-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  />
  
  {/* The main LPT image as banner - with a more balanced size */}
  <motion.div
    className="relative shadow-2xl rounded-lg overflow-hidden border-4 border-customBlue"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <img 
      src={lptImage}
      alt="Congratulations on becoming an LPT"
      className="w-full h-auto object-cover"
    />
  </motion.div>
  
  {/* Bottom left confetti */}
  <motion.img 
    src={confettiGif}
    alt="Confetti" 
    className="absolute bottom-0 left-0 w-20 h-20 z-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  />
  
  {/* Bottom right confetti */}
  <motion.img 
    src={confettiGif}
    alt="Confetti" 
    className="absolute bottom-0 right-0 w-20 h-20 z-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  />
</div>
          
          {/* Congratulatory text below the banner */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              For Passing and Becoming an LPT!
            </h2>
            <p className="text-gray-700 mb-4">
              Your hard work, dedication, and perseverance have paid off! 
              This incredible achievement is just the beginning of 
              many more successes to come.
            </p>
            <p className="text-gray-700 mb-4">
              I'm so proud of everything you've accomplished as an LPT.
              This birthday is even more special because we're celebrating
              both your birth and your professional milestone!
            </p>
          </motion.div>
          
          {/* Button to continue */}
          {isAnimationComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/cake">
                <motion.button
                  className="bg-customBlue text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue to your Cake 🎂
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
  );
}

export default Congrats;
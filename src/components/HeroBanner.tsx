import { BsFillPlayFill, BsInfoCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <div className="relative h-screen text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Featured movie"
        className="w-full h-full object-cover object-center"
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-1/4 left-0 z-20 px-4 md:px-12 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Stranger Things</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-100 drop-shadow-md">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
          terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center justify-center bg-white text-black px-6 py-3 rounded hover:bg-opacity-80 transition-all duration-200 font-medium text-lg">
            <BsFillPlayFill className="mr-2 text-xl" /> Play
          </button>
          <button className="flex items-center justify-center bg-gray-600/70 text-white px-6 py-3 rounded hover:bg-opacity-50 transition-all duration-200 font-medium text-lg">
            <BsInfoCircle className="mr-2 text-xl" /> More Info
          </button>
        </div>
      </motion.div>
    </div>
  );
}
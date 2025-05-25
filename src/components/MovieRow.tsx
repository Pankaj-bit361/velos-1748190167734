import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface MovieRowProps {
  title: string;
  movies: Array<{
    id: number;
    title: string;
    imageUrl: string;
  }>;
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mb-16"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-12 text-shadow">{title}</h2>
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/80 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <FaChevronLeft className="text-white text-3xl cursor-pointer hover:text-red-500 transition-colors duration-200" />
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-3 px-4 md:px-12 py-2">
          {movies.map((movie) => (
            <motion.div 
              key={movie.id} 
              whileHover={{ scale: 1.05 }}
              className="flex-none w-48 h-72 relative group cursor-pointer rounded-md overflow-hidden shadow-lg"
            >
              <img 
                src={movie.imageUrl} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
                  <div className="flex space-x-2">
                    <span className="text-green-400 text-sm font-medium">98% Match</span>
                    <span className="text-gray-300 text-sm">TV-MA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <FaChevronRight className="text-white text-3xl cursor-pointer hover:text-red-500 transition-colors duration-200" />
        </div>
      </div>
    </motion.div>
  );
}
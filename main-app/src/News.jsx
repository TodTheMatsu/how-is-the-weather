import {motion} from "framer-motion"
import { del } from "framer-motion/client";
function News({ article }) {
    return (
      <motion.a
        href={article.link || '#'}
        target={article.link}       // Open in a new tab
        rel="noopener noreferrer"  // Security measure
        className="w-[360px] h-[300px] bg-white backdrop-blur-3xl bg-opacity-35 shadow-md rounded-lg flex flex-col items-center p-2 hover:scale-105 transition ease-in-out duration-300 delay-75 "
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        initial={{ scale: 1, opacity: 0, y: 0,transition: { duration: 1 } }}
      >
        <div className="w-full h-[150px]">
          <img
            src={article.image_url || 'default-image-url.jpg'}
            alt="News"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <h2 className="text-center font-bold text-sm mt-2">{article.title}</h2>
        <p className="text-xs text-center mt-1 text-gray-600">
          {article.description?.slice(0, 300) || ''}...
        </p>
      </motion.a>
    );
  }
  
  export default News;
  
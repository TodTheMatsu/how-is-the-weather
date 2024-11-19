import { motion } from "framer-motion";

function News({ article, index }) {
  return (
    <motion.a
      href={article.link || '#'}
      target={article.link}
      rel="noopener noreferrer"
      className="w-[360px] h-[300px] bg-transparent flex flex-col items-center p-1"
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: index * 0.1 }, 
      }}
      initial={{ opacity: 0, y: 50 }}
    >
      <motion.div
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.1 },
        }}
        className="w-full h-full bg-white backdrop-blur-3xl bg-opacity-35  rounded-lg shadow-lg hover:bg-opacity-100 hover:z-20"
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
      </motion.div>
    </motion.a>
  );
}

export default News;

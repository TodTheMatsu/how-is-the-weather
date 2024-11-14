function News({ article }) {
    return (
      <div className="w-[360px] h-[300px] bg-white  backdrop-blur-3xl bg-opacity-35  shadow-md rounded-lg flex flex-col items-center p-2 m-2">
        <img
          src={article.image_url || 'default-image-url.jpg'}
          alt="News"
          className="w-full h-[150px] object-cover rounded-t-lg"
        />
        <h2 className="text-center font-bold text-sm mt-2">{article.title}</h2>
        <p className="text-xs text-center mt-1 text-gray-600">
          {article.description?.slice(0, 50) || ''}...
        </p>
      </div>
    );
  }
  
  export default News;
  
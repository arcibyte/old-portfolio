import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Cómo instalar y configurar Arch Linux desde cero",
      date: "Dic 24",
      duration: "11 min lectura",
      link: "",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 mt-28 w-full mb-4 text-neutral-700 dark:text-neutral-300">
      <Helmet>
        <title>Jhon - blog</title>
      </Helmet>
      <h2 className="text-xl font-montserrat font-semibold mb-4">Últimas publicaciones</h2>
      <div className="flex flex-col space-y-4 mt-4">
        <div className="md:flex md:space-x-8">
          <div className="w-full">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={post.link}
                className="block border-b border-gray-500 hover:bg-emerald-600 hover:border-neutral-600 py-2"
              >
                <div data-testid="article-link" className="flex items-center">
                  <p className="text-sm dark:text-neutral-400 mr-4 font-poppins">
                    {post.date}
                  </p>
                  <div className="flex flex-col">
                    <span className="text-base font-poppins">
                      {post.title}
                    </span>
                    <div>
                      <div className="text-xs text-neutral-400 font-poppins mt-2"
                      > {post.duration}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

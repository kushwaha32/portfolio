import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import authContext from "../Context/auth/authContext";
import blogContext from "../Context/Blog/blogContext";
import layout from "../img/service/user-interface.png";

const Blogs = () => {
  const getBlogs = useContext(blogContext);
  const getAuthContext = useContext(authContext);

  useEffect(() => {
      getAuthContext.authAndLoading();

      // eslint-disable-next-line
  }, []);

  const { blogs } = getBlogs;

  return (
    <div className="BlogsPage padding-comman">
        <div className="blog-main-title">
            <Title title={"Blogs"} opaceTitle={"Blogs"} />
        </div>
      
      <div className="blogPageContent">
        {blogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={layout} alt="" />
                <Link to="/" className="blog-link">
                  {blog.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

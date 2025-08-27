
import { Link } from 'next-view-transitions'
import { getBlogs } from "@/utils/mdx";
import { Container } from './Container';
import { div } from 'motion/react-client';

export const LandingBlogs = async () => {
    const allBlogs = await getBlogs()
  
  // Date formatting options
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className='p-6 mt-20' >
        <h2 className='text-2xl md:text-2xl font-semibold text-primary mb-10'>Explore Blogs :</h2>
    <div className="flex items-start justify-start pt-3">
        
      <Container className="md:pb-5">
        {/* Blog List */}
        {allBlogs.length === 0 ? (
          <div className="text-center ">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-primary mb-2">No posts yet</h3>
            <p className="text-secondary">I'm working on some great content. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {allBlogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.slug} 
                className="block group"
              >
                <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-primary dark:hover:border-primary hover:border-gray-300 transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left Side - Title and Description */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-tertiary transition-colors">
                        {blog.title}
                      </h2>
                      
                      {blog.description && (
                        <p className="text-secondary leading-relaxed line-clamp-3">
                          {blog.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Right Side - Date */}
                    <div className="md:text-right md:min-w-[120px]">
                      {blog.date && (
                        <span className="text-sm text-secondary font-medium">
                          {new Date(blog.date).toLocaleDateString("en-US", dateOptions)}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
    </div>
    )
}
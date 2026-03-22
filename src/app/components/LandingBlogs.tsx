
import { Link } from 'next-view-transitions'
import { getBlogs } from "@/utils/mdx";
import { Container } from './Container';
import { Badge } from './ui/Badge';

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
    <div className='p-2 pt-5 pb-10 overflow-x-auto'>
      <div className='px-2'>
        <Badge>Things I&apos;ve shared so far...</Badge>
        </div>
    <div className="flex items-start justify-start pt-3 min-w-0">
        
      <Container className="min-w-0">
        {/* Blog List */}
        {allBlogs.length === 0 ? (
          <div className="text-center">
            <div className="text-4xl md:text-6xl mb-4">📝</div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">No posts yet</h3>
            <p className="text-secondary text-sm md:text-base">I&apos;m working on some great content. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {allBlogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.slug} 
                className="block group"
              >
                <article className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-md hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                    {/* Left Side - Title and Description */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 group-hover:text-tertiary transition-colors leading-tight">
                        {blog.title}
                      </h2>
                      
                      {blog.description && (
                        <p className="text-secondary text-sm leading-relaxed line-clamp-2">
                          {blog.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Right Side - Date */}
                    <div className="md:text-right md:min-w-[120px]">
                      {blog.date && (
                        <span className="text-xs md:text-sm text-secondary font-medium">
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
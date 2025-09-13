import { Container } from "../components/Container";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from 'next-view-transitions'
import { Title } from "../components/ui/Title";
import { Subtitle } from "../components/ui/Subtitle";


export const metadata: Metadata = {
  title: "Blog - Siddhant Kanawade",
  description: "Thoughts, experiences, and insights on technology and development",
};      

export default async function BlogsPage() {
  const allBlogs = await getBlogs()
  
  // Date formatting options
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className="min-h-screen flex items-start justify-start overflow-x-auto">
      <Container className="min-h-screen p-4 pt-14 md:p-6 md:pt-20 md:pb-16">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <Title>
            My Blogs
          </Title>
          <Subtitle>
            Sharing insights, experiences, and learnings from my journey in technology and development.
          </Subtitle>
        </div>

        {/* Blog List */}
        {allBlogs.length === 0 ? (
          <div className="text-center py-8 md:py-16">
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
                <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 hover:shadow-md dark:hover:border-gray-300 transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                    {/* Left Side - Title and Description */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 group-hover:text-tertiary transition-colors line-clamp-2 leading-tight">
                        {blog.title}
                      </h2>
                      
                      {blog.description && (
                        <p className="text-secondary text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
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

        {/* Footer Section */}
        <div className="text-center mt-8 md:mt-16 pt-4 md:pt-8 dark:border-gray-700">
          <p className="text-secondary text-sm md:text-base">
            Have a question or want to discuss any of these topics? 
            <Link href="/contact" className="text-primary hover:text-tertiary transition-colors ml-1">
              Let&apos;s connect!
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
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
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-6 md:pt-20 md:pb-16">
        {/* Header Section */}
        <div className="mb-16">
          <Title>
            My Blogs
          </Title>
          <Subtitle>
            Sharing insights, experiences, and learnings from my journey in technology and development.
          </Subtitle>
        </div>

        {/* Blog List */}
        {allBlogs.length === 0 ? (
          <div className="text-center py-16">
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
                <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-primary dark:hover:border-primary transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left Side - Title and Description */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-tertiary transition-colors line-clamp-2">
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

        {/* Footer Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-secondary">
            Have a question or want to discuss any of these topics? 
            <Link href="/contact" className="text-primary hover:text-tertiary transition-colors ml-1">
              Let's connect!
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
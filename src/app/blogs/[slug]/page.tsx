import { Container } from "@/app/components/Container";
import { Metadata } from "next";
import { redirect } from 'next/navigation'
import { getBlogContent, getAllBlogSlugs } from "@/utils/mdx";

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug)=>({slug})) 
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} - Siddhant Kanawade`,
    description: `Blog post about ${slug}`,
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  
    // Try to read the blog file based on the slug
    const { slug } = await params;
    const blog = await getBlogContent(slug)

    if(!blog) {
      redirect("/blogs")
    }

    const {content} = blog;

    return (
      <div className="overflow-x-auto">
        <Container className="min-h-screen p-4 md:p-6 md:pt-20 md:pb-10">
            <article className="blog-content prose prose-sm md:prose-base max-w-none min-w-3xl mx-auto">
             {content}
            </article>
        </Container>
      </div>
    );
  
}
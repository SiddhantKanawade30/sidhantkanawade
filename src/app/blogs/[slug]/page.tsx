import { Container } from "@/app/components/Container";
import { Metadata } from "next";
import { redirect } from 'next/navigation'
import { getBlogContent } from "@/utils/mdx";

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
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
      
        <Container className="min-h-screen  md:pt-20 md:pb-10">
            <article className="blog-content">
             {content}
            </article>
        </Container>
      
    );
  
}
import { ArrowLeft, Clock } from 'lucide-react';
import ContentRenderer from '../../../components/Blogs/BeezTechContentRenderer';
import { beezTechBlogPosts } from '../../../components/Blogs/BeezTechBlogData';
import Link from 'next/link';

// Related posts helper
const getRelatedPosts = (currentPostId, currentCategory) =>
  beezTechBlogPosts
    .filter(p => p.id !== currentPostId && p.category === currentCategory)
    .slice(0, 3);

// Generate static params for all blog posts
export async function generateStaticParams() {
  return beezTechBlogPosts.map(post => ({ slug: post.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = beezTechBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Not Found | BeezTech Studio',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | BeezTech Studio Blog`,
    description: post.excerpt || post.title,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.beeztech.studio/blogs/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
    },
  };
}

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const post = beezTechBlogPosts.find(p => p.slug === slug);

  if (!post)
    return (
      <div className="p-12 text-center text-xl bg-white min-h-screen">
        404 - Article not found.
      </div>
    );

  const relatedPosts = getRelatedPosts(post.id, post.category);

  // JSON-LD structured data for blog article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "BeezTech Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.beeztech.studio/Logo_Black.png"
      }
    },
    "description": post.excerpt || post.title,
    "keywords": post.keywords.join(', '),
    "articleSection": post.category,
    "url": `https://www.beeztech.studio/blogs/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.beeztech.studio/blogs/${slug}`
    }
  };

  return (
    <div className="bg-white min-h-screen font-inter">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="pt-24 pb-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <span className="font-semibold text-yellow-600">{post.category}</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {post.readingTime}
            </span>
            <span>Published: {post.date}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">Cover Image Placeholder</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-12 pb-4 border-b border-gray-100">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm text-gray-500">Written by</p>
            <p className="text-lg font-semibold text-gray-900">{post.author}</p>
          </div>
        </div>

        <article className="prose max-w-none">
          <ContentRenderer content={post.content} />
        </article>

        <div className="mt-16 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Keywords:</h3>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full hover:bg-yellow-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16 border-t border-gray-100 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              More {post.category} Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(rPost => (
                <Link
                  key={rPost.id}
                  href={`/blogs/${rPost.slug}`}
                  className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-sm font-medium text-yellow-600 mb-1">{rPost.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-yellow-700 transition-colors">
                    {rPost.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">{rPost.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

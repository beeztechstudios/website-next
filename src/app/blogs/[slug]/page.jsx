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
// ✅ Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = beezTechBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Not Found | BeezTech Studio',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const fullUrl = `https://www.beeztech.studio/blogs/${slug}`;
  // const ogImage = post.image || 'https://www.beeztech.studio/images/og-blogs.png';

  return {
    title: `${post.title} | BeezTech Studio Blog`,
    description: post.excerpt || post.title,
    keywords: post.keywords?.join(', ') || 'BeezTech Studio Blog, branding, design, marketing, Udaipur',
    authors: [{ name: post.author || 'BeezTech Studio' }],
    openGraph: {
      title: `${post.title} | BeezTech Studio Blog`,
      description: post.excerpt || post.title,
      type: 'article',
      url: fullUrl,
      siteName: 'BeezTech Studio',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      // images: [
      //   {
      //     url: ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: `${post.title} - BeezTech Studio Blog`,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | BeezTech Studio Blog`,
      description: post.excerpt || post.title,
      // images: [ogImage],
      creator: '@beeztechstudio',
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}


export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
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
  "image": post.image || "https://www.beeztech.studio/images/og-blogs.png",
  "datePublished": post.date,
  "dateModified": post.updatedAt || post.date,
  "author": {
    "@type": "Person",
    "name": post.author || "BeezTech Studio",
    "url": "https://www.beeztech.studio"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BeezTech Studio",
    "url": "https://www.beeztech.studio",
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
    <div className="bg-white min-h-screen">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Insights
          </Link>

          

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-gray-600">
            <span className="flex items-center font-medium">
              <Clock className="w-5 h-5 mr-2" /> {post.readingTime}
            </span>
            <span className="font-medium">{post.date}</span>
            <span className="font-medium">By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Cover Image */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-white shadow-lg">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        {/* Main Article */}
        <article className="prose prose-lg max-w-none">
          <ContentRenderer content={post.content} />
        </article>

        {/* Keywords */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-3">
            {post.keywords.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white py-20 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
              More From This Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(rPost => (
                <Link
                  key={rPost.id}
                  href={`/blogs/${rPost.slug}`}
                  className="group bg-[#FFFDF8] rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 shadow-md hover:shadow-xl"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-orange-600 mb-2">{rPost.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                      {rPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {rPost.readingTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

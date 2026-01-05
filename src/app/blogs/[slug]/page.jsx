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
  const articleSchema = { /* ... same as before */ };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-900">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Navigation / Back Button */}
      <nav className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
      </nav>

      {/* Header Section */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center mb-12">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-8">
          {post.title}
        </h1>

        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 border-y border-gray-100 py-4">
          <span className="font-medium text-gray-900">{post.author}</span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {post.readingTime}
          </span>
          <span className="text-gray-300">•</span>
          <span>{post.date}</span>
        </div>
      </header>

      {/* Hero Image - Slightly wider than text for visual impact */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <article className="prose prose-slate lg:prose-xl prose-headings:font-bold prose-headings:tracking-tight prose-a:text-orange-600 hover:prose-a:text-orange-500 prose-img:rounded-xl">
          {/* Note: ContentRenderer should output standard HTML tags 
            (p, h2, h3, etc.) to benefit from the 'prose' styles.
          */}
          <ContentRenderer content={post.content} />
        </article>

        {/* SEO Tag Section */}
        <footer className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm text-gray-600 bg-gray-50 rounded-md border border-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-default"
              >
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </footer>
      </main>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <aside className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Recommended Reading</h2>
              <Link href="/blogs" className="text-sm font-semibold text-orange-600 hover:underline">
                View all posts →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(rPost => (
                <Link
                  key={rPost.id}
                  href={`/blogs/${rPost.slug}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {rPost.title}
                    </h3>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <span>{rPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{rPost.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

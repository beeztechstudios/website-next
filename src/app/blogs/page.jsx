"use client"
import React, { useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Code, Palette } from 'lucide-react';
import { beezTechBlogPosts } from '../../components/Blogs/BeezTechBlogData';
import Link from 'next/link';

const categories = [
    { name: 'All', icon: Zap },
    { name: 'Product & Startup Insights', icon: TrendingUp },
    { name: 'Technology & Development', icon: Code },
    { name: 'Design & User Experience', icon: Palette },
    { name: 'Growth & Retention', icon: TrendingUp },
];

const BeezTechBlogPage = () => {
    const [filter, setFilter] = useState('All');

    const filteredPosts = filter === 'All' 
        ? beezTechBlogPosts 
        : beezTechBlogPosts.filter(post => post.category === filter);

    const categoriesMap = {
        'Product & Startup Insights': 'bg-green-100 text-green-800',
        'Technology & Development': 'bg-blue-100 text-blue-800',
        'Design & User Experience': 'bg-orange-100 text-orange-800',
        'Growth & Retention': 'bg-purple-100 text-purple-800',
    };

    return (
        <>
        import Head from "next/head";

<Head>
  <title>Blogs – BeezTech IT, Branding & Digital Marketing Insights in Udaipur</title>

  <meta
    name="description"
    content="Read the latest insights, tips, and case studies on IT solutions, branding, website development, digital marketing, and media production from BeezTech, the leading agency in Udaipur."
  />

  <meta
    name="keywords"
    content="BeezTech Blogs, IT blogs Udaipur, Branding blogs Udaipur, Website Development blogs Udaipur, Digital Marketing blogs Udaipur, Media Production blogs Udaipur, BeezTech Insights"
  />

  <meta name="author" content="BeezTech Solutions" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Blogs – BeezTech IT, Branding & Digital Marketing Insights in Udaipur" />
  <meta property="og:description" content="Stay updated with the latest insights, tips, and case studies on IT solutions, branding, website development, digital marketing, and media production from BeezTech in Udaipur." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.beeztech.studio/blogs" />
  <meta property="og:image" content="https://www.beeztech.studio/images/og-blogs.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blogs – BeezTech IT, Branding & Digital Marketing Insights in Udaipur" />
  <meta name="twitter:description" content="Stay updated with the latest insights, tips, and case studies on IT solutions, branding, website development, digital marketing, and media production from BeezTech in Udaipur." />
  <meta name="twitter:image" content="https://www.beeztech.studio/images/og-blogs.png" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.beeztech.studio/blogs" />
</Head>

        
        <div className="bg-white min-h-screen font-inter">
            {/* Hero Section */}
            <div className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                         BeezTech Hive
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Explore ideas, learnings, and resources for founders, startups, and tech enthusiasts.
                    </p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="bg-white py-6 border-none sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => {
                            const isActive = filter === cat.name;
                            return (
                                <button
                                    key={cat.name}
                                    onClick={() => setFilter(cat.name)}
                                    className={`
                                        px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-2
                                        ${isActive 
                                            ? 'bg-orange-500 text-white shadow-md' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }
                                    `}
                                >
                                    <cat.icon className="w-4 h-4" />
                                    <span>{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article key={post.id} className="group flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                    <span className="text-gray-500 text-sm">Image for {post.category}</span>
                                    <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${categoriesMap[post.category] || 'bg-gray-200 text-gray-800'}`}>
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm text-gray-500 mb-2">{post.date} · {post.readingTime}</p>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors flex-grow">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        className="mt-auto inline-flex items-center text-orange-500 font-semibold hover:text-orange-700 transition-colors"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="md:col-span-3 text-center text-xl text-gray-500 py-10">No posts found in this category.</p>
                    )}
                </div>
            </div>
        </div>
        
</>

    );
};

export default BeezTechBlogPage;

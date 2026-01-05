"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { beezTechBlogPosts } from "../../components/Blogs/BeezTechBlogData";

const BeezTechBlogPageClient = () => {
    const posts = [...beezTechBlogPosts].sort((a, b) => b.id - a.id);
    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1);

    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* HERO */}
            <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                   

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                        Thoughts, Ideas &
                        <span className="block text-orange-500">Digital Perspectives</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        Explore meaningful articles on technology, design, startups, and
                        building products that matter.
                    </p>
                </div>
            </section>

            {/* FEATURED ARTICLE */}
            {featuredPost && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
                    <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                        Featured Article
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-full">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full min-h-[300px] object-cover"
                            />
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 text-sm text-gray-600 font-medium mb-4">
                                <Clock className="w-4 h-4" />
                                <span>{featuredPost.readingTime}</span>
                                <span>•</span>
                                <span>{featuredPost.date}</span>
                            </div>

                            <h2 className="text-xl sm:text-3xl font-bold leading-tight text-gray-900 mb-4">
                                {featuredPost.title}
                            </h2>

                            <p className="text-xs sm:text-md text-gray-600 font-medium leading-relaxed mb-6">
                                {featuredPost.excerpt}
                            </p>

                            <Link
                                href={`/blogs/${featuredPost.slug}`}
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                            >
                                Read Full Article
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* BLOG GRID */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16 pb-24">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
                    Latest Articles
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium mb-3">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readingTime}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-extrabold leading-snug mb-3 text-gray-900 group-hover:text-orange-500 transition-colors">
                                    <Link href={`/blogs/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 text-xs font-medium line-clamp-3 mb-5 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:gap-3 transition-all"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BeezTechBlogPageClient;

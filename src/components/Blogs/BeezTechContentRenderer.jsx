"use client";
import React from "react";
import { Lightbulb, Code } from "lucide-react";

const ContentRenderer = ({ content = [] }) => {
  if (!Array.isArray(content) || content.length === 0) {
    return (
      <p className="text-gray-500 text-lg">
        No content available for this blog.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        if (!block?.type) return null;

        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-gray-700 leading-relaxed text-lg font-medium">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={index}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 pt-8 mt-8 mb-4"
              >
                {block.text}
              </h2>
            );

          case "list":
            return (
              <ul
                key={index}
                className="space-y-3 pl-6 text-gray-700 text-lg"
              >
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-orange-500 pl-6 py-4 italic text-xl text-gray-700 my-8 bg-orange-50/50 rounded-r-xl font-medium"
              >
                "{block.text}"
              </blockquote>
            );

          case "tip":
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500 my-8 flex items-start space-x-3 shadow-sm"
              >
                <Lightbulb className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-800 font-medium text-base leading-relaxed">{block.text}</p>
              </div>
            );

          case "code":
            return (
              <pre
                key={index}
                className="bg-gray-900 text-white p-5 sm:p-6 rounded-xl overflow-x-auto my-8 font-mono text-sm shadow-lg"
              >
                <div className="flex items-center mb-3 text-orange-400 font-semibold">
                  <Code className="w-5 h-5 mr-2" />
                  Code Example
                </div>
                <code className="text-gray-100">{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

// Sample data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "10 Essential Tips for Passing Your Next Certification Exam",
        excerpt: "Discover the key strategies that will help you ace your upcoming certification test and advance your career.",
        author: "Jane Doe",
        date: "May 15, 2023",
        category: "Study Tips",
        imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 2,
        title: "The Future of Cloud Computing: Trends to Watch",
        excerpt: "Explore the emerging trends in cloud technology that are shaping the future of IT infrastructure and services.",
        author: "John Smith",
        date: "May 10, 2023",
        category: "Technology",
        imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        title: "How to Build a Successful Career in Cybersecurity",
        excerpt: "Learn the essential skills and certifications needed to thrive in the rapidly growing field of cybersecurity.",
        author: "Alice Johnson",
        date: "May 5, 2023",
        category: "Career Advice",
        imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 4,
        title: "Understanding the Basics of Machine Learning",
        excerpt: "Get a comprehensive introduction to machine learning concepts and their practical applications in various industries.",
        author: "Bob Wilson",
        date: "April 30, 2023",
        category: "Artificial Intelligence",
        imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 5,
        title: "The Importance of Continuous Learning in IT",
        excerpt: "Discover why ongoing education is crucial for IT professionals and how to stay ahead in a rapidly evolving industry.",
        author: "Eva Brown",
        date: "April 25, 2023",
        category: "Professional Development",
        imageUrl: "/placeholder.svg?height=400&width=600",
    },
]

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-12">
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <Image
                            src="/placeholder.svg?height=600&width=1200"
                            alt="Featured post"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                            <div className="p-6 text-white">
                                <h2 className="text-3xl font-bold mb-2">Featured: Mastering DevOps Practices</h2>
                                <p className="mb-4">Dive deep into the world of DevOps and learn how to streamline your development and operations processes for maximum efficiency.</p>
                                <Link href="/blog/featured-post" className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="text-sm font-medium text-indigo-600 mb-1">{post.category}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <Link href={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                                    Read full article →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
                        <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
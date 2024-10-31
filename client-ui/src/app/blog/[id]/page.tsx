import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ShareIcon, BookmarkIcon, ThumbsUpIcon, ThumbsDownIcon, MessageCircleIcon } from 'lucide-react'

const BlogDetailPage = () => {
    const blogPost = {
        title: "The Future of Cloud Computing: Trends to Watch",
        author: "John Smith",
        authorAvatar: "/images/author-avatar.jpg",
        date: "May 10, 2023",
        readTime: "8 min read",
        category: "Technology",
        imageUrl: "/images/cloud-computing.jpg",
        content: `
      <p class="lead">Cloud computing has revolutionized the way businesses operate, offering unprecedented scalability, flexibility, and cost-efficiency. As we look to the future, several emerging trends are set to shape the landscape of cloud computing.</p>

      <h2>1. Edge Computing</h2>
      <p>Edge computing is gaining traction as a complement to cloud computing. By processing data closer to the source, edge computing reduces latency and bandwidth usage, making it ideal for IoT devices and applications requiring real-time processing.</p>

      <blockquote>
        <p>"Edge computing is not just a trend, it's a necessity for the future of IoT and real-time applications."</p>
        <cite>- Dr. Jane Doe, IoT Specialist</cite>
      </blockquote>

      <h2>2. Serverless Computing</h2>
      <p>Serverless computing abstracts away infrastructure management, allowing developers to focus solely on writing code. This trend is expected to grow as businesses seek to reduce operational overhead and improve development efficiency.</p>

      <h2>3. Multi-Cloud and Hybrid Cloud Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud and hybrid cloud strategies to avoid vendor lock-in, optimize costs, and leverage the strengths of different cloud providers. This approach offers greater flexibility and resilience.</p>

      <figure>
        <Image src="/images/multi-cloud-diagram.jpg" alt="Multi-cloud strategy diagram" width={800} height={400} className="rounded-lg shadow-lg" />
        <figcaption>Fig.1 - A typical multi-cloud architecture</figcaption>
      </figure>

      <h2>4. AI and Machine Learning Integration</h2>
      <p>Cloud providers are integrating advanced AI and machine learning capabilities into their offerings, making these technologies more accessible to businesses of all sizes. This trend is driving innovation across various industries.</p>

      <h2>5. Enhanced Security Measures</h2>
      <p>As cloud adoption grows, so does the need for robust security measures. Cloud providers are investing heavily in advanced security features, including AI-powered threat detection and quantum-resistant encryption.</p>

      <h2>Conclusion</h2>
      <p>The future of cloud computing is bright and full of possibilities. By staying informed about these trends, businesses can position themselves to take full advantage of the cloud's evolving capabilities and drive innovation in their respective fields.</p>
    `,
        tags: ["Cloud Computing", "Technology Trends", "Edge Computing", "Serverless", "AI"],
        likes: 127,
        dislikes: 3,
        comments: 42,
    }

    const relatedPosts = [
        {
            id: 1,
            title: "Understanding the Basics of Machine Learning",
            excerpt: "Get a comprehensive introduction to machine learning concepts and their practical applications in various industries.",
            author: "Alice Johnson",
            date: "May 5, 2023",
            imageUrl: "/images/machine-learning.jpg",
        },
        {
            id: 2,
            title: "The Rise of Quantum Computing",
            excerpt: "Explore the potential of quantum computing and its implications for cryptography, drug discovery, and complex system modeling.",
            author: "Bob Wilson",
            date: "May 15, 2023",
            imageUrl: "/images/quantum-computing.jpg",
        },
        {
            id: 3,
            title: "Cybersecurity in the Age of Cloud Computing",
            excerpt: "Learn about the latest cybersecurity challenges and solutions in the era of widespread cloud adoption.",
            author: "Eva Brown",
            date: "May 20, 2023",
            imageUrl: "/images/cybersecurity.jpg",
        },
    ]

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article>
                    <header className="mb-8 text-center">
                        <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                {blogPost.category}
              </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {blogPost.title}
                        </h1>
                        <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                            <UserIcon className="h-5 w-5 mr-2" />
                            <span className="mr-4">{blogPost.author}</span>
                            <CalendarIcon className="h-5 w-5 mr-2" />
                            <span className="mr-4">{blogPost.date}</span>
                            <ClockIcon className="h-5 w-5 mr-2" />
                            <span>{blogPost.readTime}</span>
                        </div>
                    </header>

                    <div className="mb-12 relative">
                        <Image
                            src={blogPost.imageUrl}
                            alt={blogPost.title}
                            width={1200}
                            height={630}
                            className="rounded-xl shadow-2xl"
                            priority
                        />
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                                <ShareIcon className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                                <BookmarkIcon className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {blogPost.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full hover:bg-gray-300 transition-colors cursor-pointer">
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-b border-gray-200 py-8 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                    <ThumbsUpIcon className="h-5 w-5" />
                                    <span>{blogPost.likes}</span>
                                </button>
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                                    <ThumbsDownIcon className="h-5 w-5" />
                                    <span>{blogPost.dislikes}</span>
                                </button>
                            </div>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                                <MessageCircleIcon className="h-5 w-5" />
                                <span>{blogPost.comments} Comments</span>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src={blogPost.authorAvatar}
                                alt={blogPost.author}
                                width={64}
                                height={64}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{blogPost.author}</h3>
                                <p className="text-gray-600">John is a technology enthusiast and cloud computing expert with over 10 years of experience in the field.</p>
                            </div>
                        </div>
                    </div>
                </article>

                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <UserIcon className="h-4 w-4 mr-1" />
                                        <span>{post.author}</span>
                                        <span className="mx-2">•</span>
                                        <CalendarIcon className="h-4 w-4 mr-1" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50">
                                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                        Read full article
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BlogDetailPage
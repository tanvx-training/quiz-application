"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'

type CourseType = {
    id: string
    title: string
    description: string
    image: string
    learners: number
    practiceTests: number
    questions: number
    videos?: number
    rating: number
    ratingCount: number
}

const courses: CourseType[] = [
    {
        id: "1",
        title: "Oracle Certified Associate, Java SE 8 Programmer (OCAJP 8) 1Z0-808",
        description: "Strengthen your knowledge in Java programming (Java SE 8) and raise your earning potential in the Job market with the Oracle Certified Associate Java Programmer (OCAJP 8) certification. Al...",
        image: "/images/java-associate.png",
        learners: 17800,
        practiceTests: 19,
        questions: 635,
        videos: 42,
        rating: 4.5,
        ratingCount: 172
    },
    {
        id: "2",
        title: "Oracle Certified Professional, Java SE 8 Programmer (1Z0-809)",
        description: "The Oracle Certified Professional, Java SE 8 Programmer - 1Z0-809 course will master you in learning Java programming concepts using Java SE 8, Servlets, Java Server Pages, Java Server...",
        image: "/images/java-professional.png",
        learners: 7156,
        practiceTests: 21,
        questions: 602,
        videos: 56,
        rating: 5.0,
        ratingCount: 2
    },
    {
        id: "3",
        title: "Java SE 11 Programmer | 1Z0-815] [Retired]",
        description: "Oracle Certified Professional Java SE 11 Programmer is a professional-level certification exam that validates the Java professional's skills related to Oracle Java Platform such as Java SE...",
        image: "/images/java-se11.png",
        learners: 4581,
        practiceTests: 8,
        questions: 415,
        rating: 4.5,
        ratingCount: 54
    },
    {
        id: "4",
        title: "Oracle Certified Professional, Java SE 8 Programmer (Upgrade) 1Z0-810",
        description: "Upgrade your Java SE 7 certification to Java SE 8 with this comprehensive course. Learn about lambda expressions, functional interfaces, and more.",
        image: "/images/java-upgrade.png",
        learners: 3200,
        practiceTests: 15,
        questions: 500,
        videos: 35,
        rating: 4.7,
        ratingCount: 89
    },
    {
        id: "5",
        title: "Java SE 11 Developer | 1Z0-819",
        description: "Become a certified Java SE 11 Developer. This course covers all the latest features of Java 11 and prepares you for the 1Z0-819 exam.",
        image: "/images/java-se11-dev.png",
        learners: 5600,
        practiceTests: 18,
        questions: 550,
        videos: 48,
        rating: 4.8,
        ratingCount: 112
    },
    {
        id: "6",
        title: "Oracle Certified Expert, Java EE 6 Web Component Developer",
        description: "Master Java EE 6 web technologies. This certification validates your expertise in developing and deploying web applications using Java technologies.",
        image: "/images/java-ee6.png",
        learners: 2800,
        practiceTests: 12,
        questions: 480,
        videos: 40,
        rating: 4.6,
        ratingCount: 75
    },
    {
        id: "7",
        title: "Oracle Certified Master, Java SE 11 Developer",
        description: "Achieve the highest level of certification for Java SE 11. This course prepares you for the challenging Oracle Certified Master exam.",
        image: "/images/java-se11-master.png",
        learners: 1500,
        practiceTests: 25,
        questions: 700,
        videos: 60,
        rating: 4.9,
        ratingCount: 45
    }
]

const CertificationList = () => {
    const [activeTab, setActiveTab] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const coursesPerPage = 6

    const indexOfLastCourse = currentPage * coursesPerPage
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

    const totalPages = Math.ceil(courses.length / coursesPerPage)

    const renderRatingStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-orange-400 text-orange-400" />)
        }

        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-4 h-4 fill-orange-400 text-orange-400" />)
        }

        const remainingStars = 5 - stars.length
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
        }

        return stars
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-4">
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                <span className="mx-2 text-gray-400">&gt;</span>
                <span className="text-orange-500">Oracle Java Certification Exam Preparation</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Oracle Java Certification Exam Preparation
                </h1>
                <p className="text-gray-600">
                    Become a certified programmer with an Oracle Java certification and take a step ahead toward the bright development career.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`pb-2 px-1 ${activeTab === 'all' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab('free')}
                    className={`pb-2 px-1 ${activeTab === 'free' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                >
                    Free Test
                </button>
                <button
                    onClick={() => setActiveTab('practice')}
                    className={`pb-2 px-1 ${activeTab === 'practice' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                >
                    Practice Test
                </button>
                <button
                    onClick={() => setActiveTab('video')}
                    className={`pb-2 px-1 ${activeTab === 'video' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                >
                    Video
                </button>
            </div>

            {/* Course List */}
            <div className="space-y-4">
                {currentCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="flex items-start gap-6">
                            <div className="w-48 h-48 relative flex-shrink-0">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {course.description}
                                </p>
                                <div className="flex items-center gap-8 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <span>{course.learners.toLocaleString()} Learners</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>{course.practiceTests} Practice Tests</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>{course.questions} Questions</span>
                                    </div>
                                    {course.videos && (
                                        <div className="flex items-center gap-1">
                                            <span>{course.videos} Videos</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {renderRatingStars(course.rating)}
                                        </div>
                                        <span className="text-gray-500 text-sm">
                      {course.rating} ({course.ratingCount} ratings)
                    </span>
                                    </div>
                                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                    aria-label="Next page"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default CertificationList
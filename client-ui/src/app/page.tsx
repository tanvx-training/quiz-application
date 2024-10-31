"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
    const features = [
        { icon: "🎯", title: "Mục tiêu", count: "200" },
        { icon: "📚", title: "Khóa học", count: "150" },
        { icon: "✍️", title: "Bài tập", count: "500" },
        { icon: "🎥", title: "Video", count: "1000" },
        { icon: "👥", title: "Học viên", count: "5000" },
        { icon: "🌟", title: "Đánh giá", count: "4.8" },
    ]

    const partners = [
        "JPMorgan", "Deloitte", "Microsoft", "Google Cloud",
        "KPMG", "Statefarm", "UPS", "Cognizant"
    ]

    const certPaths = [
        {
            title: "AWS Certified Solutions Architect",
            description: "Trở thành kiến trúc sư giải pháp AWS được chứng nhận"
        },
        {
            title: "Google Cloud Professional",
            description: "Làm chủ nền tảng Google Cloud với chứng chỉ chuyên nghiệp"
        },
        {
            title: "Microsoft Azure Expert",
            description: "Phát triển kỹ năng Azure của bạn lên cấp độ chuyên gia"
        }
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">
                                THÔNG MINH HƠN<br />
                                BẢN THÂN BẠN
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Đồng hành cùng bạn trên con đường phát triển sự nghiệp công nghệ
                            </p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                                Bắt đầu ngay
                            </button>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="/images/whizlabs-reviews.webp"
                                alt="Hero illustration"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        KHÁM PHÁ HƠN {features[0].count} KHÓA HỌC THÀNH CÔNG CỦA CHÚNG TÔI
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-2">{feature.icon}</div>
                                <div className="font-bold text-xl mb-1">{feature.count}+</div>
                                <div className="text-gray-600">{feature.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Paths */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        HỌC LỘ TRÌNH THEO CÁC BƯỚC TIẾN TOÀN CẦU
                    </h2>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-500 transform -translate-y-1/2 hidden md:block" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {certPaths.map((path, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                                    <h3 className="font-bold text-xl mb-4">{path.title}</h3>
                                    <p className="text-gray-600">{path.description}</p>
                                    <button className="mt-4 text-orange-500 font-medium">
                                        Tìm hiểu thêm →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        NGƯỜI SỬ DỤNG TỪ TIN TỪ CÁC WHIZLABS
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg">
                                <span className="text-gray-500 font-medium">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Sections */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                        <div className="relative h-80">
                            <Image
                                src="/images/whizlabs-labs.webp"
                                alt="Practice Exam"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">
                                PHÒNG THI NGHIỆM<br />
                                THỰC TẾ HÀNG CỦA<br />
                                WHIZLABS
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tự học và bắt đầu<br />
                                từ thuật
                            </p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit">
                                Xem thêm ngay bây giờ
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">
                                KHÓA HỌC VIDEO<br />
                                WHIZLABS
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Khám phá các khóa học<br />
                                video chất lượng cao
                            </p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit">
                                Xem thêm
                            </button>
                        </div>
                        <div className="relative h-80">
                            <Image
                                src="/images/whizlabs-video-course.webp"
                                alt="Video Courses"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h3 className="text-xl font-bold mb-4 md:mb-0">
                            THAM GIA CÙNG BẠN TRÊN HÀNH TRÌNH PHÁT TRIỂN SỰ NGHIỆP
                        </h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition-colors">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
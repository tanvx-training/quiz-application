'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Target, ClipboardList, Percent, Clock, Frown, Download, Share2, Check } from 'lucide-react'

interface DomainPerformance {
    id: number
    domain: string
    totalQuestions: number
    correct: number
    incorrect: number
    unattempted: number
    markedForReview: number
}

const domainPerformance: DomainPerformance[] = [
    { id: 1, domain: 'Java Basics', totalQuestions: 8, correct: 0, incorrect: 0, unattempted: 8, markedForReview: 0 },
    { id: 2, domain: 'Working With Java Data Types', totalQuestions: 2, correct: 0, incorrect: 0, unattempted: 2, markedForReview: 0 },
    { id: 3, domain: 'Using Operators and Decision Constructs', totalQuestions: 10, correct: 0, incorrect: 0, unattempted: 10, markedForReview: 0 },
    { id: 4, domain: 'Creating and Using Arrays', totalQuestions: 8, correct: 0, incorrect: 0, unattempted: 8, markedForReview: 0 },
    { id: 5, domain: 'Using Loop Constructs', totalQuestions: 8, correct: 0, incorrect: 0, unattempted: 8, markedForReview: 0 },
    { id: 6, domain: 'Working with Methods and Encapsulation', totalQuestions: 4, correct: 0, incorrect: 0, unattempted: 4, markedForReview: 0 },
]

interface Question {
    id: number
    domain: string
    given: string
    text: string
    options: string[]
    correctAnswer: string
    explanation: string
    userAnswer: string | null
}

const questions: Question[] = [
    {
        id: 1,
        domain: 'Creating and Using Arrays',
        given: "char [] chars = {'A', 'B', '1', '2', '@'};",
        text: "Which of the following can access the value of @ in this given array?",
        options: [
            "chars[3];",
            "chars[5];",
            "chars[chars.last];",
            "chars[chars.length-1];",
            "Given array is invalid."
        ],
        correctAnswer: "chars[chars.length-1];",
        explanation: "Option D is the correct answer. Size or length of the array is the number of elements in an array. Index positions of an array start from zero, so the last index is 1 less than the length. Here array has 5 elements, so the size of the array is 5 and the last index is 4. So we can access the last element by using chars.length-1 or 4. So option D is correct.",
        userAnswer: null
    },
    // Add more questions here...
]

export default function QuizResultPage() {
    const params = useParams()
    const { id, testId } = params
    const [filterBy, setFilterBy] = useState('All Questions')

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gray-700 text-white p-3 text-sm">
                <div className="container mx-auto">
                    <Link href="/">Home</Link> / <Link href="/dashboard">Dashboard</Link> / <Link href="/my-courses">My Courses</Link> / <Link href={`/certification/${id}`}>OCAJP 8 Training Course -1Z0 808</Link> / <Link href={`/certification/${id}/test/${testId}`}>Diagnostic Test</Link> / Report
                </div>
            </div>
            <div className="container mx-auto py-3">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                                <ClipboardList className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Level: Advanced</p>
                                <h1 className="text-2xl font-bold">OCAJP 8 Training Course -1Z0 808</h1>
                            </div>
                        </div>
                        <Link href={`/certification/${id}`} className="flex items-center text-blue-600 hover:underline">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to the Course
                        </Link>
                    </div>

                    <h2 className="text-xl font-semibold mb-2">Diagnostic Test</h2>
                    <p className="text-sm text-gray-500 mb-6">Completed on Fri, 18 Oct 2024</p>

                    <div className="grid grid-cols-5 gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            <Target className="w-8 h-8 text-blue-500 mb-2" />
                            <p className="text-2xl font-bold">3rd</p>
                            <p className="text-sm text-gray-500">Attempt</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ClipboardList className="w-8 h-8 text-green-500 mb-2" />
                            <p className="text-2xl font-bold">0/56</p>
                            <p className="text-sm text-gray-500">Marks Obtained</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Percent className="w-8 h-8 text-yellow-500 mb-2" />
                            <p className="text-2xl font-bold">0.00%</p>
                            <p className="text-sm text-gray-500">Your Score</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Clock className="w-8 h-8 text-purple-500 mb-2" />
                            <p className="text-2xl font-bold">0h 0m 58s</p>
                            <p className="text-sm text-gray-500">Time Taken</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Frown className="w-8 h-8 text-red-500 mb-2" />
                            <p className="text-2xl font-bold">FAIL</p>
                            <p className="text-sm text-gray-500">Result</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center">
                            <p className="mr-2">Share this Report in Social Media</p>
                            <button className="text-blue-500 hover:text-blue-600">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                        </button>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Domain wise Quiz Performance Report</h2>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">No.</th>
                                <th scope="col" className="px-6 py-3">Domain</th>
                                <th scope="col" className="px-6 py-3">Total Question</th>
                                <th scope="col" className="px-6 py-3">Correct</th>
                                <th scope="col" className="px-6 py-3">Incorrect</th>
                                <th scope="col" className="px-6 py-3">Unattempted</th>
                                <th scope="col" className="px-6 py-3">Marked for Review</th>
                            </tr>
                            </thead>
                            <tbody>
                            {domainPerformance.map((domain) => (
                                <tr key={domain.id} className="bg-white border-b">
                                    <td className="px-6 py-4">{domain.id}</td>
                                    <td className="px-6 py-4">{domain.domain}</td>
                                    <td className="px-6 py-4">{domain.totalQuestions}</td>
                                    <td className="px-6 py-4">{domain.correct}</td>
                                    <td className="px-6 py-4">{domain.incorrect}</td>
                                    <td className="px-6 py-4">{domain.unattempted}</td>
                                    <td className="px-6 py-4">{domain.markedForReview}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Review the Answers</h2>
                    <div className="flex justify-between items-center mb-4">
                        <div></div>
                        <div className="flex items-center">
                            <span className="mr-2">Filter By</span>
                            <select
                                className="border rounded p-2"
                                value={filterBy}
                                onChange={(e) => setFilterBy(e.target.value)}
                            >
                                <option>All Questions</option>
                                <option>Correct</option>
                                <option>Incorrect</option>
                                <option>Unattempted</option>
                            </select>
                        </div>
                    </div>

                    {questions.map((question) => (
                        <div key={question.id} className="mb-8 bg-green-50 rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Question {question.id}</h3>
                                <span className="text-gray-500">Unattempted</span>
                            </div>
                            <p className="mb-2"><strong>Domain:</strong> {question.domain}</p>
                            <p className="mb-2"><strong>Given:</strong></p>
                            <pre className="bg-gray-100 p-2 rounded mb-4">{question.given}</pre>
                            <p className="mb-4"><strong>{question.text}</strong></p>
                            <div className="space-y-2 mb-4">
                                {question.options.map((option, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`question-${question.id}-option-${index}`}
                                            name={`question-${question.id}`}
                                            className="mr-2"
                                            disabled
                                        />
                                        <label htmlFor={`question-${question.id}-option-${index}`} className="flex items-center">
                                            {option}
                                            {option === question.correctAnswer && (
                                                <Check className="text-green-500 ml-2" />
                                            )}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Explanation:</h4>
                                <p>{question.explanation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
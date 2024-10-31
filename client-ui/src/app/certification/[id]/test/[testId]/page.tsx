'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, FileText, CheckCircle } from 'lucide-react'

interface PreviousAttempt {
    id: number
    date: string
    status: string
    marks: string
    percentage: string
    timeTaken: string
    mode: string
    result: string
}

const previousAttempts: PreviousAttempt[] = [
    { id: 1, date: 'Sun, 04 Feb 2024', status: 'Complete', marks: '53/56', percentage: '94.00%', timeTaken: '0h 35m 31s', mode: 'Exam', result: 'Pass' },
    { id: 2, date: 'Sat, 20 Jan 2024', status: 'Complete', marks: '44/56', percentage: '78.00%', timeTaken: '0h 42m 24s', mode: 'Exam', result: 'Pass' },
]

export default function TestDetail() {
    const params = useParams()
    const router = useRouter()
    const { id, testId } = params

    return (
        <div className="container mx-auto py-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Exam Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <FileText className="w-5 h-5 text-gray-500" />
                                <div>
                                    <p className="text-2xl font-bold">56</p>
                                    <p className="text-sm text-gray-500">Question</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-gray-500" />
                                <div>
                                    <p className="text-2xl font-bold">2h</p>
                                    <p className="text-sm text-gray-500">Time</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-gray-500" />
                                <div>
                                    <p className="text-2xl font-bold">56</p>
                                    <p className="text-sm text-gray-500">Max. Marks</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">65%</p>
                                    <p className="text-sm text-gray-500">Passing</p>
                                </div>
                            </div>
                        </div>
                        <Link href={`/certification/${id}/test/${testId}/quiz`} className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors inline-block text-center">
                            Start Quiz
                        </Link>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Exam Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>The exam comprises of the following types of questions :
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li>Multiple Choice Single Response (MCSR)</li>
                                    <li>Multiple Choice Multiple Response (MCMR)</li>
                                </ul>
                            </li>
                            <li>There is no negative marking.</li>
                            <li>There is a timer at the upper-right corner of the exam screen that indicates the time remaining for the completion of the exam.</li>
                            <li>Pause Quiz - You can pause the ongoing quiz anytime by clicking on "Pause Quiz" button next to timer on the upper right corner. the timer/quiz will pause and resume only after you click on "continue the last attempt" button.</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Your Previous Attempts</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">#</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Marks</th>
                                <th scope="col" className="px-6 py-3">Percentage</th>
                                <th scope="col" className="px-6 py-3">Time Taken</th>
                                <th scope="col" className="px-6 py-3">Mode</th>
                                <th scope="col" className="px-6 py-3">Result</th>
                                <th scope="col" className="px-6 py-3">Report</th>
                            </tr>
                            </thead>
                            <tbody>
                            {previousAttempts.map((attempt) => (
                                <tr key={attempt.id} className="bg-white border-b">
                                    <td className="px-6 py-4">{attempt.id}</td>
                                    <td className="px-6 py-4">{attempt.date}</td>
                                    <td className="px-6 py-4">{attempt.status}</td>
                                    <td className="px-6 py-4">{attempt.marks}</td>
                                    <td className="px-6 py-4">{attempt.percentage}</td>
                                    <td className="px-6 py-4">{attempt.timeTaken}</td>
                                    <td className="px-6 py-4">{attempt.mode}</td>
                                    <td className="px-6 py-4">{attempt.result}</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-blue-600 hover:underline">Report</a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
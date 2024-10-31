'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Clock, FileText } from 'lucide-react'

interface Test {
    id: number
    name: string
    questions: number
    timeLimit: string
    attempts: number
    completed: boolean
}

const tests: Test[] = [
    { id: 1, name: 'Practice Test', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 2, name: 'Diagnostic Test', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 3, name: 'Practice Test I', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 4, name: 'Practice Test II', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 5, name: 'Practice Test III', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 6, name: 'Practice Test IV', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 7, name: 'Practice Test V', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
    { id: 8, name: 'Practice Test VI', questions: 56, timeLimit: '2h 0m 0s', attempts: 2, completed: true },
]

export default function CertificationDetail() {
    const params = useParams()
    const certificationId = params.id

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Certification Tests</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {tests.map((test, index) => (
                    <div
                        key={test.id}
                        className={`flex items-center justify-between p-4 ${
                            index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                        }`}
                    >
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold">{test.id}. {test.name}</span>
                        </div>
                        <div className="flex items-center space-x-4 ">
                            <div className="flex items-center text-gray-600 mr-3">
                                <FileText className="w-4 h-4 mr-1" />
                                <span>{test.questions}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mr-3">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{test.timeLimit}</span>
                            </div>
                            <span className="text-gray-600 mr-3">{test.attempts} Attempts</span>
                            {test.completed ? (
                                <span className="text-green-500 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Completed
                </span>
                            ) : (
                                <span className="text-yellow-500">In Progress</span>
                            )}
                            <Link
                                href={`/certification/${certificationId}/test/${test.id}`}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Start
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
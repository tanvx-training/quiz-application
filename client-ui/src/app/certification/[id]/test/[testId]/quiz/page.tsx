'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Clock, ThumbsUp, ThumbsDown, Maximize2 } from 'lucide-react'

interface Question {
    id: number
    domain: string
    given: string
    text: string
    options: string[]
    correctAnswer: string
    explanation: string
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
    },
    // Add more questions here...
]

for (let i = 2; i <= 21; i++) {
    questions.push({
        id: i,
        domain: 'Sample Domain',
        given: 'Sample given code',
        text: `Question ${i} text...`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 'Option A',
        explanation: 'Sample explanation',
    })
}

export default function QuizPage() {
    const params = useParams()
    const router = useRouter()
    const { id, testId } = params
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answeredQuestions, setAnsweredQuestions] = useState<{[key: number]: string}>({})
    const [timeLeft, setTimeLeft] = useState(7200) // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const handleQuestionChange = (index: number) => {
        setCurrentQuestionIndex(index)
    }

    const handleAnswerSelect = (answer: string) => {
        setAnsweredQuestions(prev => ({...prev, [currentQuestionIndex]: answer}))
    }

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gray-700 text-white p-3 text-sm">
                <div className="container mx-auto">
                    <Link href="/">Home</Link> / <Link href="/dashboard">Dashboard</Link> / <Link href="/my-courses">My Courses</Link> / <Link href={`/certification/${id}`}>OCAJP 8 Training Course -1Z0 808</Link> / Diagnostic Test
                </div>
            </div>
            <div className="container mx-auto p-4 flex">
                <div className="w-1/4 bg-white rounded-lg shadow-md p-4 mr-4 h-[calc(100vh-100px)] overflow-y-auto">
                    <div className="grid grid-cols-7 gap-2">
                        {questions.map((q, index) => (
                            <button
                                key={q.id}
                                className={`w-8 h-8 rounded ${
                                    index === currentQuestionIndex
                                        ? 'bg-blue-500 text-white'
                                        : answeredQuestions[index]
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200'
                                }`}
                                onClick={() => handleQuestionChange(index)}
                            >
                                {q.id}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-md p-6 h-[calc(100vh-100px)] ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Question {currentQuestion.id} of {questions.length}</h2>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span className="font-mono">{formatTime(timeLeft)} left</span>
                                </div>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                                    Exit Quiz
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Domain: {currentQuestion.domain}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Given:</p>
                            <pre className="bg-gray-100 p-2 rounded mt-2">{currentQuestion.given}</pre>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">{currentQuestion.text}</p>
                        </div>
                        <div className="space-y-2">
                            {currentQuestion.options.map((option, index) => (
                                <label key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={answeredQuestions[currentQuestionIndex] === option}
                                        onChange={() => handleAnswerSelect(option)}
                                        className="form-radio"
                                    />
                                    <span>{String.fromCharCode(65 + index)}. {option}</span>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                onClick={() => handleQuestionChange(Math.max(0, currentQuestionIndex - 1))}
                            >
                                Prev
                            </button>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox mr-2" />
                                <span>Mark for review</span>
                            </label>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                onClick={() => handleQuestionChange(Math.min(questions.length - 1, currentQuestionIndex + 1))}
                            >
                                Next
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span>Did you like this Question?</span>
                                <button className="text-gray-600 hover:text-blue-500">
                                    <ThumbsUp className="w-5 h-5" />
                                </button>
                                <button className="text-gray-600 hover:text-red-500">
                                    <ThumbsDown className="w-5 h-5" />
                                </button>
                            </div>
                            <button className="flex items-center text-blue-500 hover:underline">
                                <Maximize2 className="w-4 h-4 mr-1" />
                                Switch to Fullscreen mode
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
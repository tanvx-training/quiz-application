// components/Quiz.tsx
'use client'

import React, { useState } from 'react';
import { Quiz } from '@/types';

interface QuizProps {
    quiz: Quiz;
}

export default function QuizComponent({ quiz }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const currentQuestion = quiz.questions[currentQuestionIndex];

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Quiz finished
            alert('Quiz completed!');
        }
    };

    const handleCheckAnswer = () => {
        setShowExplanation(true);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
            <p className="mb-4">{quiz.description}</p>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">{currentQuestion.text}</h2>
                {currentQuestion.options.map((option, index) => (
                    <div key={index} className="mb-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => handleAnswerSelect(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            {!showExplanation && (
                <button
                    onClick={handleCheckAnswer}
                    disabled={!selectedAnswer}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                >
                    Check Answer
                </button>
            )}
            {showExplanation && (
                <div className="mb-4">
                    <p className={`font-bold ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                        {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p>{currentQuestion.explanation}</p>
                </div>
            )}
            {showExplanation && (
                <button
                    onClick={handleNextQuestion}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Next Question
                </button>
            )}
        </div>
    );
}
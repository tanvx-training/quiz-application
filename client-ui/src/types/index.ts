// types/index.ts

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface Quiz {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface User {
    id: string;
    name: string;
    email: string;
}
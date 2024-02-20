export type Question = {
    question: {
        text: string,
        given: string
    },
    answer: number,
    options: string[],
    explanation: string[]
}

export type TestQuestion = {
    question: Question,
    selectedAnswer: number | null
}

export type Subsubject = {
    isSupported: boolean,
    name: string,
    display_name: string,
    icon: string
}

export type Subject = {
    name: string,
    display_name: string,
    icon: string,
    subsubjects: Subsubject[]
}
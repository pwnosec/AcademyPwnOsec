import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { CourseModule } from '../types/course';

interface QuizProps {
  module: CourseModule;
  onComplete: () => void;
}

export function Quiz({ module, onComplete }: QuizProps) {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (submitted) return;
    
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Check if all answers are correct before completing
    const allCorrect = module.questions?.every(
      (q, i) => answers[i] === q.correctAnswer
    );
    if (allCorrect) {
      onComplete();
    }
  };

  const isAnswerCorrect = (questionIndex: number, answerIndex: number) => {
    if (!submitted) return null;
    const question = module.questions?.[questionIndex];
    return question?.correctAnswer === answerIndex;
  };

  return (
    <div className="space-y-8">
      {module.questions?.map((question, qIndex) => (
        <div key={qIndex} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option, aIndex) => {
              const isSelected = answers[qIndex] === aIndex;
              const isCorrect = isAnswerCorrect(qIndex, aIndex);
              
              return (
                <button
                  key={aIndex}
                  onClick={() => handleAnswerSelect(qIndex, aIndex)}
                  disabled={submitted}
                  className={`w-full text-left p-3 rounded-lg border ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  } ${submitted && isCorrect ? 'bg-green-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {submitted && isSelected && (
                      isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={answers.length !== module.questions?.length}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Submit Answers
        </button>
      )}

      {submitted && (
        <div className="text-center">
          <button
            onClick={() => {
              setSubmitted(false);
              setAnswers([]);
            }}
            className="text-blue-600 hover:text-blue-700"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
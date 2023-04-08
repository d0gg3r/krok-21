import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  const { questions, correct, wrong } = useSelector((state) => state.quiz)

  let percent = (correct / questions[0].length) * 100
  percent = Math.round(percent)
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-indigo-500 flex items-center justify-center">
      <div className="border border-black w-4/5 flex items-center justify-center flex-col backdrop-blur-lg bg-white bg-opacity-20 drop-shadow-lg p-6 rounded">
        <p>{percent > 64 ? `🫨🎉 🫵💋  ${percent}%` : `🤕 ${percent}% :((`}</p>
        <p>
          {correct}/{questions[0].length}
        </p>
      </div>
    </section>
  )
}

export default Result

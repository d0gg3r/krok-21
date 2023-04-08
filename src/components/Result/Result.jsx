import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  const { questions, correct } = useSelector((state) => state.quiz)
  const [openGift, setOpenGift] = React.useState(false)

  const handleGift = () => {
    setOpenGift(true)
  }

  let percent = (correct / questions[0].length) * 100
  percent = Math.round(percent)
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-indigo-500 flex items-center justify-center">
      <div className="border border-black w-4/5 flex items-center justify-center flex-col backdrop-blur-lg bg-white bg-opacity-20 drop-shadow-lg p-6 rounded">
        <p>{percent >= 23 ? `🫨🎉 🫵💋  ${percent}%` : `🤕 ${percent}% :((`}</p>
        <p>
          {correct}/{questions[0].length}
        </p>
        {openGift ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-black text-pink-500 text-center">
              СВИДАНИЕ <br /> С САМЫМ ЛУЧШИМ ПАРНЕМ!
            </h2>
            <div>
              <img
                src="https://static.wixstatic.com/media/5922a2_1a0ea89ffb174cc6af2743d021d053d0~mv2.gif"
                alt=""
              />
            </div>
            <a
              href="https://youtube.com/shorts/RIO94_vDNNY?feature=share"
              className="mt-2 bg-pink-400 p-2 rounded-md text-white"
            >
              ➡️ НАЖМИ ⬅️
            </a>
          </div>
        ) : (
          <button
            onClick={() => handleGift()}
            className="mt-2 bg-pink-400 p-2 rounded-md text-white"
          >
            ➡️ ЗАБРАТЬ ПРИЗ ⬅️
          </button>
        )}
      </div>
    </section>
  )
}

export default Result

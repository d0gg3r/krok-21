import React from 'react'
import Option from './Option'
import { Link } from 'react-router-dom'
import { BsClockHistory } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { clickNext, clickPrev, pickOption } from '../../features/quizSlice'
import {
  MdOutlineCheckBox,
  MdOutlineIndeterminateCheckBox,
} from 'react-icons/md'

const Quiz = () => {
  const dispatch = useDispatch()
  const { questions, score, correct, wrong, questionId } = useSelector(
    (state) => state.quiz
  )
  const [isPicked, setIsPicked] = React.useState(false)

  const handlePick = () => {
    setIsPicked(true)
  }

  React.useEffect(() => {
    setIsPicked(false)
  }, [questionId])

  console.log(questions[0].length)
  console.log(questionId)
  return (
    <>
      <section className="w-screen h-screen bg-gradient-to-r from-indigo-500 flex items-center justify-center">
        <div className="border border-black w-4/5 flex items-center justify-center flex-col backdrop-blur-lg bg-white bg-opacity-20 drop-shadow-lg p-6 rounded">
          <header className="w-full flex items-center justify-start gap-2">
            <BsClockHistory />
            <p>200:00</p>
          </header>
          <main className="mt-4 border-l-4 border-black px-5 w-full">
            <h5 className="text-xl font-medium	">
              {questions[0][questionId].question}
            </h5>
            <div className="flex flex-col">
              <Option
                icon={
                  questions[0][questionId].answer ===
                  questions[0][questionId].optionA ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineIndeterminateCheckBox />
                  )
                }
                optionText={questions[0][questionId].optionA}
                id={questionId}
                handlePick={handlePick}
                isPicked={isPicked}
              />
              <Option
                icon={
                  questions[0][questionId].answer ===
                  questions[0][questionId].optionB ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineIndeterminateCheckBox />
                  )
                }
                optionText={questions[0][questionId].optionB}
                id={questionId}
                handlePick={handlePick}
                isPicked={isPicked}
              />
              <Option
                icon={
                  questions[0][questionId].answer ===
                  questions[0][questionId].optionC ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineIndeterminateCheckBox />
                  )
                }
                optionText={questions[0][questionId].optionC}
                id={questionId}
                handlePick={handlePick}
                isPicked={isPicked}
              />
              <Option
                icon={
                  questions[0][questionId].answer ===
                  questions[0][questionId].optionD ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineIndeterminateCheckBox />
                  )
                }
                optionText={questions[0][questionId].optionD}
                id={questionId}
                handlePick={handlePick}
                isPicked={isPicked}
              />
              <Option
                icon={
                  questions[0][questionId].answer ===
                  questions[0][questionId].optionE ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineIndeterminateCheckBox />
                  )
                }
                optionText={questions[0][questionId].optionE}
                id={questionId}
                handlePick={handlePick}
                isPicked={isPicked}
              />
            </div>
            {/* <div className="mt-4 text-xl gap-2 flex flex-col">
              <button
                value={questions[0][questionId].optionA}
                onClick={(e) => dispatch(pickOption(e.target.value))}
                className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in"
              >
                {questions[0][questionId].optionA ===
                questions[0][questionId].answer ? (
                  <MdOutlineCheckBox className={''} />
                ) : (
                  <MdOutlineIndeterminateCheckBox />
                )}{' '}
                {questions[0][questionId].optionA}
              </button>
              <button
                value={questions[0][questionId].optionB}
                onClick={(e) => dispatch(pickOption(e.target.value))}
                className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in"
              >
                {questions[0][questionId].optionB}
              </button>
              <button
                value={questions[0][questionId].optionC}
                onClick={(e) => dispatch(pickOption(e.target.value))}
                className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in"
              >
                {questions[0][questionId].optionC}
              </button>
              <button
                value={questions[0][questionId].optionD}
                onClick={(e) => dispatch(pickOption(e.target.value))}
                className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in"
              >
                {questions[0][questionId].optionD}
              </button>
              <button
                value={questions[0][questionId].optionE}
                onClick={(e) => dispatch(pickOption(e.target.value))}
                className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in"
              >
                {questions[0][questionId].optionE}
              </button>
            </div> */}
          </main>
          <div className="mt-5 w-full flex items-start justify-start flex-row gap-5">
            <button
              onClick={() => dispatch(clickPrev())}
              className="bg-indigo-300 px-4 border border-black rounded text-lg"
            >
              Prev
            </button>
            {questionId === questions[0].length - 1 ? (
              <Link
                to="/result"
                className="bg-lime-300 px-4 border border-black rounded text-lg"
              >
                Finish
              </Link>
            ) : (
              <button
                onClick={() => dispatch(clickNext())}
                className="bg-lime-300 px-4 border border-black rounded text-lg"
              >
                Next
              </button>
            )}
            <Link
              to={'/'}
              className="bg-rose-300 px-4 border border-black rounded text-lg"
            >
              Quit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quiz

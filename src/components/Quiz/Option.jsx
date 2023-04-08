import React from 'react'
import { useDispatch } from 'react-redux'
import { pickOption } from '../../features/quizSlice'

const Option = ({ id, icon, optionText, handlePick, isPicked }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-row items-center justify-start gap-2 mt-4">
      {isPicked && <span>{icon}</span>}
      <button
        value={optionText}
        className="text-left py-1 px-3 border border-black rounded hover:bg-black hover:text-white cursor-pointer transition-all duration-200 ease-in w-full"
        onClick={(e) => {
          dispatch(pickOption(e.target.value))
          handlePick()
        }}
      >
        {optionText}
      </button>
    </div>
  )
}

export default Option

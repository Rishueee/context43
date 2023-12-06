import React from 'react'
import styling from './Result.module.css'
import { useContext } from 'react'
import { ScoreBoard } from './QuestionBox'
import { useState } from 'react'
import { useEffect } from 'react'

function Result() {
  const {resu, setreso,setnum} = useContext(ScoreBoard)
  const [bgColor , setscolor] = useState(true)

  function BackGroundColor(){
    setscolor(!bgColor)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor? '#5FBDFF' : '#3081D0'
  })

  function HandleReset(){
    setreso(0)
    setnum(1)
  }
  return (
    <>
    <h3 className={styling.webname}>RIDDLE RAVE</h3>
      <button className={styling.bgcolor} onClick={BackGroundColor}  >{bgColor? 'Light':'Dark'}</button>
      <div className={styling.questdiv}>
          <h1 className={styling.head}>Result</h1>
          <h2>Your Score:- {resu} out of 5 ({(resu/5)*100}%) </h2>
        
      </div>
      <button className={styling.buttn} onClick={HandleReset} >PLAY AGAIN</button>
      </>
    
  )
}
export default  Result


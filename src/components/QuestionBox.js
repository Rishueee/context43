import React from 'react'
import { useRef , useState, useEffect} from 'react'
import { createContext } from 'react'
import style from './Questionbox.module.css'
import questions from '../questions'
import Result from './Result'


export const ScoreBoard = createContext()
function QuestionBox() {
  const [num,setnum] = useState(1)

  const quest = questions[num-1]

  const [higlight , sethilight] = useState(true)

  const [bgcolor , setbackcolor] = useState(true)

  const [transfer , settransfer]= useState(false)

  let higref = useRef()
  const [resu, setreso] = useState(0)

  function higligh(){
    sethilight(true)
  }
  function Removehigligh(){
    sethilight(false)
  }
  function Bgcolo(){
    setbackcolor(!bgcolor)
  }

  function ChangeCount(correct) {
    if (num < questions.length+1) {
      
      setnum(num + 1);
  
      if (correct) {
        setreso(resu + 1);
      } else {
        setreso(resu);
      }
    }
  }
  
  

  // useEffect(()=>{
  //   higref.current.style.color = 
   
  // })

  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor? '#5FBDFF' : '#3081D0'
  })

  useEffect(()=>{
    if (num === questions.length){
      settransfer(true)
    }
  },[num])
  return (
    <>
    {(num > questions.length)? 
    <div>
    <ScoreBoard.Provider value={{resu,setreso,setnum}}>
      {transfer ? <Result /> : null}
      </ScoreBoard.Provider>
    </div>
    :
    <div>
    <h1 className={style.name}>RIDDLE RAVE</h1>
    <div>
      <button className={style.bgcolo} onClick={Bgcolo}  >{bgcolor? 'Light':'Dark'}</button>
      <div className={style.questdiv}>

        <h1 className={style.ques} >Question{num}/5</h1>

        <h1 className={style.realquestion} ref={higref} style={{color: higlight? 'Red' : 'darkblue' }}>Q{num} {quest.text}</h1>

        <h1 className={style.Number}></h1>

        <div className={style.mark}>
        {quest.options.map((item,index)=>{
              return(
              <div className={style.opt} onClick={()=>ChangeCount(item.isCorrect)} key={index}>
                {item.text}
              </div>
              )
        })}
        </div>
        <button className={style.Higlight} onClick={higligh}>Highlight</button>
        <button className={style.RemoveHiglight} onClick={Removehigligh}>Remove Highlight</button>
      </div>
    
    </div>
    </div> 
    
    }
    
    </>
  )
  
}

export default QuestionBox
import {useState} from 'react'
import getRandomNumber from '../utils/getRandomNumber'

function RandomNumber({maxNum}) {
  const [randomNum, setRandomNum] = useState(getRandomNumber(maxNum))

  const changeRandomNumber = () => {
    setRandomNum(getRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNumber}>Сгенерировать число</button>
    </div>
  )
}

export default RandomNumber
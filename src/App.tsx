import { MouseEvent, useCallback, useEffect, useState } from 'react'

import { KeyboardState, KEYS } from 'constants/keyboard'
import { KeyboardButton, Keys } from 'types/keyboard'
import Keyboard from 'components/Keyboard'
import { getInitialKeyboardState } from 'utils/getInitialKeyboardState'

import styles from './App.module.scss'

const LENGTH = 6
const ROUNDS = 6
const INITIAL_INPUT = Object.freeze(Array(LENGTH).fill(undefined))
// TODO: update ANSWER to be random ${LENGTH} length word from dictionary.
const ANSWER = 'ABOARD'

// TODO: add game completion modal for scoring
// TODO: add timer
function App() {
  const [container, setContainer] = useState<HTMLDivElement | null>()
  const [currentInputs, setCurrentInputs] = useState<(Keys | undefined)[]>([
    ...INITIAL_INPUT,
  ])
  const [inputs, setInputs] = useState<(Keys | undefined)[]>(
    Array(LENGTH * ROUNDS).fill(undefined)
  )
  const [currentInputIdx, setCurrentInputIdx] = useState(0)
  const [currentRound, setCurrentRound] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [usedButtons, setUsedButtons] = useState<KeyboardButton>(
    getInitialKeyboardState()
  )

  const handleEnter = () => {
    checkAnswer()
  }

  const handleDel = () => {
    removePrevInput()
  }

  const handleKeyPress = useCallback(
    (input: Keys) => {
      if (currentInputs[currentInputIdx % LENGTH]) return

      setCurrentInputs((prev) => {
        prev[currentInputIdx % LENGTH] = input
        return [...prev]
      })

      setInputs((prev) => {
        prev[currentInputIdx] = input
        return [...prev]
      })

      if (currentInputIdx % LENGTH < LENGTH - 1) {
        setCurrentInputIdx((prev) => prev + 1)
      }
    },
    [currentInputIdx, currentInputs]
  )

  const onKeyButtonPressed = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isPlaying) return

    const input = e.currentTarget.innerText.toUpperCase()

    if (!Object.values(KEYS).includes(input)) return

    switch (input) {
      case KEYS.ENTER:
        handleEnter()
        return
      case KEYS.BACKSPACE:
        handleDel()
        return
      default:
        handleKeyPress(input as Keys)
    }
  }

  const removePrevInput = useCallback(() => {
    setCurrentInputIdx((prevInputIdx) => {
      const newInputIdx =
        currentInputs[prevInputIdx] && prevInputIdx % LENGTH > 0
          ? prevInputIdx
          : prevInputIdx - 1

      setCurrentInputs((prev) => {
        const index = newInputIdx - currentRound * LENGTH
        prev[index] = undefined
        return [...prev]
      })

      setInputs((prev) => {
        prev[newInputIdx] = undefined
        return [...prev]
      })

      return newInputIdx
    })
  }, [currentRound, currentInputs])

  const isCorrect = useCallback(
    (index: number) => {
      if (!container) return

      const inputEl = container.children[index + LENGTH * currentRound]

      inputEl.classList.add(styles.correct)
    },
    [container, currentRound]
  )

  const isWrongPosition = useCallback(
    (index: number) => {
      if (!container) return

      const inputEl = container.children[index + LENGTH * currentRound]

      inputEl.classList.add(styles.wrong_position)
    },
    [container, currentRound]
  )

  const isWrong = useCallback(
    (index: number) => {
      if (!container) return

      const inputEl = container.children[index + LENGTH * currentRound]

      inputEl.classList.add(styles.incorrect)
    },
    [container, currentRound]
  )

  const gameClear = () => {
    setIsPlaying(false)
  }

  const gameOver = () => {
    setIsPlaying(false)
  }

  const proceedToNextRound = () => {
    setCurrentInputs([...INITIAL_INPUT])
    setCurrentRound((prev) => {
      const nextRound = prev + 1
      setCurrentInputIdx(nextRound * LENGTH)
      return nextRound
    })
  }

  const updateUsedButtons = (value: Keys, state: KeyboardState) => {
    setUsedButtons((prev) => {
      prev[value] = state
      return prev
    })
  }

  const checkAnswer = useCallback(() => {
    const inputIsNotComplete =
      currentInputIdx % LENGTH < LENGTH - 1 ||
      inputs[currentInputIdx] === undefined

    if (inputIsNotComplete) return

    let correctCount = 0
    for (const [i, input] of currentInputs.entries()) {
      if (!input) continue

      if (input === ANSWER[i]) {
        isCorrect(i)
        updateUsedButtons(input, KeyboardState.CORRECT)
        correctCount = correctCount + 1
      } else if (ANSWER.includes(input)) {
        isWrongPosition(i)
        updateUsedButtons(input, KeyboardState.WRONG_POSITION)
      } else {
        isWrong(i)
        updateUsedButtons(input, KeyboardState.INCORRECT)
      }
    }
    if (correctCount === LENGTH) {
      gameClear()
    }
    if (currentRound === ROUNDS - 1) {
      gameOver()
      return
    }
    proceedToNextRound()
  }, [
    currentInputIdx,
    inputs,
    currentRound,
    currentInputs,
    isCorrect,
    isWrongPosition,
    isWrong,
  ])

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (!isPlaying) return

      const input = e.key.toUpperCase()

      if (!Object.keys(KEYS).includes(input)) return

      switch (input) {
        case 'BACKSPACE':
          removePrevInput()
          return
        case 'ENTER':
          checkAnswer()
          return
        default:
          handleKeyPress(input as Keys)
      }
    }

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [checkAnswer, handleKeyPress, isPlaying, removePrevInput])

  return (
    <div className={styles.App}>
      <div className={styles.board} ref={setContainer}>
        {inputs.map((val, i) => (
          <div className={styles.input} key={i}>
            {val}
          </div>
        ))}
      </div>
      <Keyboard usedButtons={usedButtons} onClick={onKeyButtonPressed} />
    </div>
  )
}

export default App

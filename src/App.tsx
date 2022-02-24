import {
  MouseEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { KeyboardState } from 'constants/keyboard'
import { KeyboardButton, Keys } from 'types/keyboard'
import Keyboard from 'components/Keyboard'
import { getInitialKeyboardState } from 'utils/getInitialKeyboardState'

import styles from './App.module.scss'

const LENGTH = 6
const ROUNDS = 6
const INITIAL_INPUT = Object.freeze(Array(LENGTH).fill(''))
// TODO: update ANSWER to be random ${LENGTH} length word from dictionary.
const ANSWER = 'ABOARD'

// TODO: add game completion modal for scoring
// TODO: add timer
function App() {
  const [container, setContainer] = useState<HTMLDivElement | null>()
  const [inputs, setInputs] = useState<Keys[]>([...INITIAL_INPUT])
  const [currentInputIdx, setCurrentInputIdx] = useState(0)
  const [currentRound, setCurrentRound] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [usedButtons, setUsedButtons] = useState<KeyboardButton>(
    getInitialKeyboardState()
  )

  const isInputEnabled = (index: number) =>
    index >= LENGTH * currentRound &&
    index < LENGTH * (currentRound + 1) &&
    isPlaying

  const onInputFocus = (index: number) => {
    setCurrentInputIdx(index)
  }

  const onInputChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.toUpperCase()
      setInputs((prev) => {
        prev[index % LENGTH] = e.target.value as Keys
        return prev
      })
      if (e.target.value && index % LENGTH < LENGTH - 1) {
        setCurrentInputIdx(index + 1)
      }
    }

  const handleEnter = () => {
    checkAnswer()
  }

  const handleDel = () => {
    removePrevInput()
  }

  const handleKeyPress = (input: Keys) => {
    setInputs((prev) => {
      if (prev[currentInputIdx % LENGTH] !== '') return prev
      prev[currentInputIdx % LENGTH] = input
      if (container && container.children[currentInputIdx]) {
        ;(
          container.children[currentInputIdx].children[0] as HTMLInputElement
        ).focus()
        ;(
          container.children[currentInputIdx].children[0] as HTMLInputElement
        ).value = input
      }
      return prev
    })
    if (currentInputIdx % LENGTH < LENGTH - 1) {
      setCurrentInputIdx(currentInputIdx + 1)
    }
  }

  const onKeyButtonPressed = (e: MouseEvent<HTMLButtonElement>) => {
    const input = e.currentTarget.innerText.toUpperCase() as Keys
    switch (input) {
      case 'ENTER':
        handleEnter()
        return
      case 'DEL':
        handleDel()
        return
      default:
        handleKeyPress(input)
    }
  }

  const removePrevInput = useCallback(() => {
    setCurrentInputIdx((prevInputIdx) => {
      const newInputIdx =
        inputs[prevInputIdx] === '' && prevInputIdx % LENGTH > 0
          ? prevInputIdx - 1
          : prevInputIdx

      setInputs((prev) => {
        const index = currentRound * LENGTH + newInputIdx
        prev[index] = ''
        if (container && container.children[index])
          (container.children[index].children[0] as HTMLInputElement).value = ''
        return prev
      })

      return newInputIdx
    })
  }, [container, currentRound, inputs])

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
    setInputs([...INITIAL_INPUT])
    setCurrentRound((prev) => prev + 1)
  }

  const updateUsedButtons = (value: Keys, state: KeyboardState) => {
    setUsedButtons((prev) => {
      prev[value] = state
      return prev
    })
  }

  const checkAnswer = useCallback(() => {
    const inputIsNotComplete = inputs.filter((input) => input === '').length > 0

    if (inputIsNotComplete) return

    let correctCount = 0
    for (const [i, input] of inputs.entries()) {
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
  }, [currentRound, inputs, isCorrect, isWrongPosition, isWrong])

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        removePrevInput()
      }
      if (e.key === 'Enter') {
        checkAnswer()
      }
    }

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [checkAnswer, removePrevInput])

  useEffect(() => {
    if (container)
      (
        container.children[currentInputIdx]?.children[0] as HTMLInputElement
      )?.focus()
  }, [container, currentInputIdx])

  useEffect(() => {
    if (container)
      (
        container.children[currentRound * LENGTH]
          ?.children[0] as HTMLInputElement
      )?.focus()
  }, [container, currentRound])

  return (
    <div className={styles.App}>
      <div className={styles.board} ref={setContainer}>
        {Array(LENGTH * ROUNDS)
          .fill(1)
          .map((_, i) => (
            <div className={styles.input} key={i}>
              <input
                type="text"
                onChange={onInputChange(i)}
                maxLength={1}
                disabled={!isInputEnabled(i)}
                onFocus={() => onInputFocus(i)}
              />
            </div>
          ))}
      </div>
      <Keyboard usedButtons={usedButtons} onClick={onKeyButtonPressed} />
    </div>
  )
}

export default App

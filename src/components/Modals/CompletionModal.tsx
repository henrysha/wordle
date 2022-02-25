import { useAtom } from 'jotai'

import { showCompletionModal } from 'atoms/modalState'
import { KeyboardState } from 'constants/keyboard'

import styles from './CompletionModal.module.scss'
import { ModalLayout } from './ModalLayout'

const keyboardStateToBlockStyle = {
  [KeyboardState.NOT_PRESSED]: styles.notPressed,
  [KeyboardState.CORRECT]: styles.correct,
  [KeyboardState.INCORRECT]: styles.incorrect,
  [KeyboardState.WRONG_POSITION]: styles.wrongPosition,
}

export const CompletionModal = ({
  inputState,
}: {
  inputState: KeyboardState[]
}) => {
  const [show, setShow] = useAtom(showCompletionModal)

  if (!show) return null

  const getBlockClass = (state: KeyboardState) =>
    keyboardStateToBlockStyle[state]

  return (
    <ModalLayout className={styles.wrapper}>
      <div>
        <h1>Congratulations!</h1>
        <h2>You&apos;ve got the answer!</h2>
      </div>
      <div className={styles.blocksWrapper}>
        <div className={styles.blocks}>
          {inputState.map((state, i) => (
            <div className={getBlockClass(state)} key={i}></div>
          ))}
        </div>
      </div>
      <button className={styles.closeButton} onClick={() => setShow(false)}>
        X
      </button>
    </ModalLayout>
  )
}

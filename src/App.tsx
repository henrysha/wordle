import { ChangeEvent, useEffect, useState } from "react";

import styles from "./App.module.scss";

const LENGTH = 6;
const INITIAL_INPUT = Array(LENGTH).fill("");
// TODO: update ANSWER to be random ${LENGTH} length word from dictionary.
const ANSWER = "ABOARD";

function App() {
  const [container, setContainer] = useState<HTMLDivElement | null>();
  const [answer, setAnswer] = useState(ANSWER);
  const [inputs, setInputs] = useState<string[]>(INITIAL_INPUT);
  const [currentInputIdx, setCurrentInputIdx] = useState(0);

  const onInputChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => {
        prev[index] = e.target.value;
        return prev;
      });
      if (e.target.value && index < inputs.length - 1) {
        setCurrentInputIdx(index + 1);
      }
    };

  const removePrevInput = () => {
    setInputs((prev) => {
      if (prev[currentInputIdx] === "" && currentInputIdx > 0) {
        prev[currentInputIdx - 1] = "";
        if (container)
          (container.children[currentInputIdx - 1] as HTMLInputElement).value =
            "";
      }
      return prev;
    });
    setCurrentInputIdx((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        removePrevInput();
      }
    };

    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (container)
      (container.children[currentInputIdx] as HTMLInputElement)?.focus();
  }, [currentInputIdx]);

  return (
    <div className={styles.App} ref={setContainer}>
      {Array(LENGTH)
        .fill(1)
        .map((_, i) => (
          <input
            type="text"
            onChange={onInputChange(i)}
            maxLength={1}
            key={i}
          />
        ))}
    </div>
  );
}

export default App;

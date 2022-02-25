import { PropsWithChildren } from 'react'

import styles from './modal.module.scss'

export const ModalLayout = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={styles.modalBackground}>
    <div className={[styles.modal, className].join(' ')}>{children}</div>
  </div>
)

import React, { useState } from 'react'
import styles from './AdviceCard.module.css'
import diceImage from '../../images/icon-dice.svg'
import desktopDivider from '../../images/pattern-divider-desktop.svg'

interface AdviceCardProps {
  slip: {
    id: number
    advice: string
  }
  setSlipLoaded: Function
}

const AdviceCard = (props: AdviceCardProps) => {
  const [disableButton, setDisableButton] = useState<Boolean>(false)
  const noop = () => {}
  const handleRefreshClick = () => {
    setDisableButton(true)
    props.setSlipLoaded(false)

    window.setTimeout(() => {
      setDisableButton(false)
    }, 2000)
  }

  return (
    <div className={styles['advice-card']}>
      <div className={styles['advice-card__id']}>A D V I C E # {props.slip.id}</div>
      <div className={styles['advice-card__advice']}>"{props.slip.advice}"</div>
      <div className={styles['advice-card__divider-container']}>
        <img className={styles['advice-card__divider']} src={desktopDivider} alt="dice" />
      </div>
      <div
        className={`${styles['advice-card__dice-container']} ${
          disableButton ? styles['advice-card__dice-container--disabled'] : ''
        }`}
        onClick={disableButton ? noop : handleRefreshClick}
      >
        <img
          className={styles['advice-card__dice']}
          src={diceImage}
          alt="dice"
        />
      </div>
    </div>
  )
}

export default AdviceCard

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getModeSelector,
  turnOnEditAction,
  turnOnFreeAction,
  turnOnNavigateAction,
} from 'store/mode'
import classNames from 'classnames'
import './ModeButtons.css'

const ModeButtons: React.FC = () => {
  const dispatch = useDispatch()
  const mode = useSelector(getModeSelector)

  const turnOnNavigateHandler = useCallback(
    () => dispatch(turnOnNavigateAction()),
    [dispatch]
  )
  const turnOnEditHandler = useCallback(
    () => dispatch(turnOnEditAction()),
    [dispatch]
  )

  const turnOnFreeHandler = useCallback(
    () => dispatch(turnOnFreeAction()),
    [dispatch]
  )

  return (
    <div className='mode-bar'>
      <button
        onClick={turnOnFreeHandler}
        className={classNames('mode-bar__button', {
          'mode-bar__button--active': mode === 'FREE',
        })}
        disabled={mode === 'FREE'}
      >
        Free mode
      </button>
      <button
        onClick={turnOnNavigateHandler}
        className={classNames('mode-bar__button', {
          'mode-bar__button--active': mode === 'NAVIGATE',
        })}
        disabled={mode === 'NAVIGATE'}
      >
        Navigate mode
      </button>
      <button
        onClick={turnOnEditHandler}
        className={classNames('mode-bar__button', {
          'mode-bar__button--active': mode === 'EDIT',
        })}
        disabled={mode === 'EDIT'}
      >
        Edit mode
      </button>
    </div>
  )
}

export default ModeButtons

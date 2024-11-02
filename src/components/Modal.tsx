'use client'

import React, {useState, useImperativeHandle, Ref} from 'react'
import {createPortal} from 'react-dom'
import clsx from 'clsx'

type ModalHandle = {
  show: () => any,
  close: () => any
}

interface ModalProps extends React.HTMLProps<ModalHandle> {
  onClose?: () => any
}

export default function Modal(props: ModalProps) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle<ModalHandle, ModalHandle>(ref, () => ({
    show: () => {
      setShow(true)
      setDisplay(true)
    },
    close: () => {
      setShow(false)
    }
  }), [])

  const base = 'fixed left-0 top-0 bottom-0 right-0 bg-black bg-opacity-40 z-[1000]'

  const cls = clsx(base, {
    'animation-in': show,
    'animation-out': !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    onClose && onClose()
  }

  if (!display) { return null }

  return (
    <>
      {
        createPortal(
          <div
            onAnimationEnd={__animationendHandler}
            className={cls}
            onClick={__closeHandler}
          >{children}</div>, document.body
        )
      }
    </>
  )
}


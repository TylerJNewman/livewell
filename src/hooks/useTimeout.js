import {useState, useRef, useEffect} from 'react'

export default function useTimeout(cb, timeoutDelayMs = 0) {
  const [isTimeoutActive, setIsTimeoutActive] = useState(false)
  const savedRefCallback = useRef()

  useEffect(() => {
    savedRefCallback.current = cb
  }, [cb])

  function callback() {
    savedRefCallback.current && savedRefCallback.current()
    clear()
  }

  function clear() {
    setIsTimeoutActive(false)
  }
  function start() {
    setIsTimeoutActive(true)
  }

  useEffect(() => {
    if (isTimeoutActive) {
      const timeout = window.setTimeout(callback, timeoutDelayMs)
      return () => {
        window.clearTimeout(timeout)
      }
    }
  }, [isTimeoutActive])
  return {
    clear,
    start,
    stop: clear,
    isActive: isTimeoutActive,
  }
}

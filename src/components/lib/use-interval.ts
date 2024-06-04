import {useEffect} from 'react'

export function useInterval (interval: number, enabled: boolean, cb: () => void) {
  useEffect(() => {
    if(!enabled) {
      return
    }
    
    const int = setInterval(() => {
      cb()
    }, interval)
    
  }, [interval, enabled])
}
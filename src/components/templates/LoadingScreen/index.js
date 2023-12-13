import React, { useEffect} from 'react'

const LoadingScreen = ({finishLoading}) => {
    
  useEffect(() => {
    finishLoading()
  }, []);

  return (
    <div class="spinner-container">
      <div class="b2x-spinner b2x-spinner--large">
        <svg viewBox="0 0 50 50">
          <circle class="b2x-spinner__circle" cx="25" cy="25" r="20"></circle>     
        </svg>
      </div>
    </div>
  )
}

export default LoadingScreen
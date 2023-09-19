import { useState } from 'react'
import { store } from '@/store'
import { updateThemeMode } from '@/store/reducers/customizationReducer'
import * as S from './styles'
import Lottie from 'react-lottie'
import LightDarkAnimation from '@/styles/lotties/LightDarkAnimation.json'

const DarkModeSwitch = () => {
  const reverseAnimation = -1
  const normalAnimation = 1

  const [isChecked, setIsChecked] = useState(false)
  const [animationState, setAnimationState] = useState({
    isPaused: false,
    isStopped: true,
    direction: reverseAnimation
  })

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: LightDarkAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 2.5
  }

  const handleChange = () => {
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction:
        animationState.direction === normalAnimation
          ? reverseAnimation
          : normalAnimation
    })
    setIsChecked(() => !isChecked)
    store.dispatch(updateThemeMode(isChecked ? 'light' : 'dark'))
  }

  return (
    <S.Wrapper>
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        isPaused={animationState.isPaused}
        isStopped={animationState.isStopped}
        speed={3}
      />
      <S.Switch>
        <S.Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <S.Slider />
      </S.Switch>
    </S.Wrapper>
  )
}
export default DarkModeSwitch

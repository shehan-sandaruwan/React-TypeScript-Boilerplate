import './styles.css'
import IMAGE from './react-logo.png'
import LOGO from './reactjs-icon.svg'
import { ClickCounter } from './Counter'

export const App = () => {
  const num = 'shehan'

  return (
    <>
      <h1>
        Edit Hello React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </>
  )
}

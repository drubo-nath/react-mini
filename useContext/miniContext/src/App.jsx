import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div>
      <h2>Hey React</h2>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App

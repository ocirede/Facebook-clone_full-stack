
import './App.css'
import SignIn from './pages/Sign-in'

function App() {
  const { user} = useUserContext();

  return (
    <>

    {user ? (
  <div className=' w-full h-full'>

  </div>
    ) : (
      <SignIn/>
    )}
  
    </>
  )
}

export default App

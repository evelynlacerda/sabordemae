import Router from './routes/Router'
import '@/assets/css/global.css'
import '@/assets/css/style.css'
import { SelectedItemsProvider } from './context/selectedItemsProvider'

function App() {

  return (
    <SelectedItemsProvider>
      <Router />
    </SelectedItemsProvider>
  )
}

export default App

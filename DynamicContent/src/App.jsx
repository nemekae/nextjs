
import { Person } from './assets/components/Person'
import { Product } from './assets/components/Product'
import { Password } from './assets/components/Password'
import './App.css'

function App() {

  return (
    <main id="center">
      <Person name= 'Emeka' age={30}/>
      <Product productName='ineegs' price={200.00}/>
      <Password isValid={true}/>
    </main>
  )
}

export default App

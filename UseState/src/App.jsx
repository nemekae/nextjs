import { Counter } from "./components/Counter"
import { TodoList } from "./components/TodoList"
import { Profile } from "./components/Profile"
import { ShoppingList } from "./components/ShoppingList"
import './App.css'


const App = () => {
  return (
    <main id="center">
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </main>
  )
}
export default App

import { Greeting } from  "./assets/components/Greeting"
import { Weather } from  "./assets/components/Weather"
import { UserStatus } from  "./assets/components/UserStatus"
import './App.css'


const values = {
  'temperatures' : [ 15, 18, 24, 27, 30, 33, 36],
 "timeOfDay":  [ "morning", "afternoon"],
  "loggedIn" : [true, false],
  "isAdmin" : [true, false],
}

function App() {
  return (
    <main id="center">
      <Weather temperatures={values.temperatures} />
      <Greeting timeOfDay={values.timeOfDay} />
      <UserStatus
        loggedIn={values.loggedIn}
        isAdmin={values.isAdmin}
      />
    </main>
  );
}

export default App





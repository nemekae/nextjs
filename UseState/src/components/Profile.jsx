import { useState } from "react"

export const Profile = () => {
    const [profile, setProfile] = useState({
        name:"", 
        age: "",
    })

    const handleChange = e => {
        const {name, value} = e.target

        setProfile((prevProfile) => ({
            ...prevProfile, 
            [name] : value,
        }))
    }

    return (
        <> 
           <h3>User Profile: </h3>
           <div>
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                </label>
           </div>
            <div>
                <label htmlFor="">
                    Age:
                    <input type="number" name="age" value={profile.age} onChange={handleChange} />
                </label>
           </div>

           <h3>Profile Information:</h3>
           <p>Name: {Profile.name}</p>
           <p>Age: {Profile.age}</p>

        </>
    )
}

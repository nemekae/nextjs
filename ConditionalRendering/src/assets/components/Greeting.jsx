export const Greeting = ({...timeOfDay}) => {
    return (
        timeOfDay ? "morning" : "afternoon"
    )
}
export const Weather = ({ temperatures }) => {
  const temperature =
    temperatures[Math.floor(Math.random() * temperatures.length)];

  return (
    <p>
      {temperature}°C —{" "}
      {temperature < 15
        ? "It's cold outside"
        : temperature <= 25
        ? "It's nice outside!"
        : "It's hot outside"}
    </p>
  );
};
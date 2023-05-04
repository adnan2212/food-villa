import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hey, I am from setInterval");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("Clean up useEffect ✅✅✅");
    };
  }, []);
  console.log("render");

  //   console.log("componet");

  return (
    <>
      {/* {console.log("render")} */}
      <h1>Profile Functional Component</h1>
      <h3>Name: {props.name}</h3>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>ADD +</button>
    </>
  );
};

export default Profile;

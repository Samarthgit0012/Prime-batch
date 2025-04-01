import { useState } from "react";
import "./App.css";

const App = () => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form refresh
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <section>
          <h2>Name: {userDetails.name}</h2>
          <h4>Email: {userDetails.email}</h4>
          <button onClick={handleEdit}>Edit</button>
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              placeholder="Type Here......."
              value={userDetails.name}
              onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
            />
            <br />

            <label>Email: </label>
            <input
              placeholder="Type Here......"
              value={userDetails.email}
              onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
            />
            <br />

            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;

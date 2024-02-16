import {useState, useEffect} from "react";

export default function SelectedContact() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    async function fetchSelectedContactId() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSelectedContactId(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSelectedContactId();
  }, [selectedContactId]);

  return (
    <div>
      <h2>Contact Details!</h2>
      {selectedContactId && (
        <div>
          <p>Name: {selectedContactId.name}</p>
          <p>Email: {selectedContactId.email}</p>
          <p>Phone: {selectedContactId.phone}</p>
        </div>
      )}
    </div>
  );
}
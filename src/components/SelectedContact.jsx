import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      <h2>Contact Details</h2>
      {contact && (
        <div>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      )}
    </div>
  );
}

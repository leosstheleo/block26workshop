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
  }, []);

  return(
        <table>
          <thead>
            <tr>
              <th colSpan="3">Single Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </tbody>
        </table>
    );
}

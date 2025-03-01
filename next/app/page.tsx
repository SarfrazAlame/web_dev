import Image from "next/image";
import axios from "axios";

async function getUserData() {
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}

export default async function Home() {
  const useDetails = await getUserData()


  return (
    <div>
      Hello World
      <br />
      {
        useDetails.email
      }
      <br />
      {useDetails.name}
    </div>
  );
}

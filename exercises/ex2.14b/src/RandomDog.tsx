import { useEffect, useState } from "react";

interface Dog {
    message: string;
    status: string;
  }

const RandomDog = () => {
    const [dog, setDog] = useState<Dog | undefined>(undefined);
    useEffect(() => {
      fetchDogs();
      const intervalId = setInterval(() => {
        fetchDogs();
      }, 5000);
  
      return () => clearInterval(intervalId);
      }, []);

      const fetchDogs = async () => {
        try {
          const reponse = await fetch("https://dog.ceo/api/breeds/image/random");
          if (!reponse.ok)
            throw new Error(
              `fetch error : ${reponse.status} : ${reponse.statusText}`
            );
            const data = await reponse.json();
            setDog({
              message: data.message ?? "No doggo found",
              status: data.status ?? "Error"
            });
        } catch (error) {
          console.error("HomePage::error: ", error);
        }
      }

      if (!dog) {
        return <p>Loading...</p>;
      }
    return (
        <div>
            <h3>Random dog</h3>
            <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
        </div>
    );
}

export default RandomDog;
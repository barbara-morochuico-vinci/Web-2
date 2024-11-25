import { useEffect, useState } from "react";

interface Dog {
    message: string;
    status: string;
  }

const RandomDog = () => {
    const [dog, setDog] = useState<Dog | undefined>(undefined);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setDog({
              message: data.message ?? "No doggo found",
              status: data.status ?? "Error"
            });
          });
      }, []);
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
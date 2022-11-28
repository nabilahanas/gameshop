


import { useEffect, useState } from "react";
import ItemCardNews from "./ItemCardNews"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID2_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID2_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://mmo-games.p.rapidapi.com/latestnews",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  });

  return (
    <section class="text-gray-600 body-font bg-black">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data === null ? (
            <p class="mx-auto text-center font-bold">Loading...</p>
          ) : (
            data.map((item, index) => <ItemCardNews key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}

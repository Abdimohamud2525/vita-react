import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/posts"
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Data &&
        Data.map((d, index) => <h1 key={index}>{d.title}</h1>)}
    </div>
  );
};

export default FetchData;





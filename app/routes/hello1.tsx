import React from "react";
type Data = {
  title: string;
  body: string;
};

export default function HelloWorld1() {
  const [data, setData] = React.useState<Data>({
    title: "hello",
    body: "hello body",
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Hello World 1 Component</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

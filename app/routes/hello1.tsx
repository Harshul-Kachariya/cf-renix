import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HelloWorld1: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
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
};

ReactDOM.render(<HelloWorld1 />, document.getElementById("root1"));

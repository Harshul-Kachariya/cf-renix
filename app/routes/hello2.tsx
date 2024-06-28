import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HelloWorld2: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Hello World 2 Component</h1>
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

export default HelloWorld2 ||
  ReactDOM.render(<HelloWorld2 />, document.getElementById("root2"));

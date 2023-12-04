import { useState, useEffect } from "react";
import "./quote.css";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        console.log(data);
      });
  }, []);
  const showQuoteHandler = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        console.log(data);
      });
  };
  return (
    <div className="quote">
      <h1 className="title "> Random Quote Generator </h1>
      <div className="house">
        <h1 className="content"> {quote} </h1>
        <div className="par"></div>
        <h1 className="author"> {author} </h1>
        <button onClick={showQuoteHandler} className="btn">
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;

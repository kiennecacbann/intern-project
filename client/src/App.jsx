import { useState } from "react";
import "./index.css";
import "./App.css";
import { baseURL } from "./baseUrl";

function App() {
  const [book_id, setBook_Id] = useState("");
  const [book_title, setBook_Title] = useState("");
  const [author_name, setAuthor_Name] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publication_day, setPublication_Day] = useState("");
  const [insert_day, setInsert_Day] = useState("");
  const [update_day, setUpdate_Day] = useState("");

  const handleAddBook = () => {
    const newBook = {
      book_id,
      book_title,
      author_name,
      publisher,
      publication_day,
      insert_day,
      update_day,
    };

    fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Do something with the response data if needed
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };
  const handleSearch = () => {
    fetch(`${baseURL}/${book_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log({data});
         const book = data.searchBook;
        setBook_Id(book.id);
        setBook_Title(book.book_title);
        setAuthor_Name(book.author_name);
        setPublisher(book.publisher);
        setPublication_Day(book.publication_day);
        setInsert_Day(book.insert_day);
        setUpdate_Day(book.update_day);
      })
      .catch((error) => {
      });
  };
  const handleUpdate = () => {};
  const handleDelete = () => {};
  const handleClear = () => {
    setBook_Id("");
    setBook_Title("");
    setAuthor_Name("");
    setPublisher("");
    setPublication_Day("");
    setInsert_Day("");
    setUpdate_Day("");
  };
  return (
    <div className="items-center justify-center flex">
      <div className="bg-gray-400 w-[50%] h-full p-5">
        <div className="flex items-center justify-between">
          <h2>本マスタメンテ</h2>
          <button>閉じる</button>
        </div>
        <form className=" space-y-3">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <babel>本ID：</babel>
              <input
                value={book_id}
                onChange={(e) => setBook_Id(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleSearch()}>検索</button>
            </div>
          </div>
          <div className="flex flex-col">
            <babel>本タイトル：</babel>
            <input
              value={book_title}
              onChange={(e) => setBook_Title(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <babel>著者名：</babel>
            <input
              value={author_name}
              onChange={(e) => setAuthor_Name(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <babel>出版社：</babel>
            <input
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div>
                <babel>出版年月日：</babel>
              </div>
              <div className="flex">
                <input
                  value={publication_day}
                  onChange={(e) => setPublication_Day(e.target.value)}
                />
                <babel>年</babel>
              </div>
            </div>
            <div className="flex">
              <input
                value={insert_day}
                onChange={(e) => setInsert_Day(e.target.value)}
              />
              <babel>月</babel>
            </div>
            <div className="flex">
              <input
                value={update_day}
                onChange={(e) => setUpdate_Day(e.target.value)}
              />
              <babel>日</babel>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={handleAddBook}>追加</button>
            <button onClick={handleUpdate}>更新</button>
            <button onClick={handleDelete}>削除</button>
            <button onClick={handleClear}>クリア</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

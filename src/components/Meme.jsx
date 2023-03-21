import React, { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const { data } = await res.json();
      setAllMemes(data.memes);
    }
    getMemes();
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="p-9">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="rounded border border-solid border-lightGray indent-1"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="rounded border border-solid border-lightGray indent-1"
        />
        <button
          className="grid col-span-2 rounded bg-darkPurple text-white border-none cursor-pointer"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img
          src={meme.randomImage}
          className="max-w-full mx-auto border-2"
          alt="meme"
        />
        <h2 className="absolute w-3/6 text-center left-1/2 -translate-x-1/2 my-4 px-1 text-[2em] uppercase text-white drop-shadow-lg top-0">
          {meme.topText}
        </h2>
        <h2 className="absolute w-3/6 text-center left-1/2 -translate-x-1/2 my-4 px-1 text-[2em] uppercase text-white drop-shadow-lg  bottom-0">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default Meme;

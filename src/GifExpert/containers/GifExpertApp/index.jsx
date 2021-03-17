import React, { useState } from 'react';
import AddCategory from "../../components/AddCategory";
import GifGrid from "../../components/GifGrid";

const Index = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon ball']
  const [categories, setCategories] = useState(['One Punch']);
  const [inputText, setInputText] = useState('');

  const handleAddCategorie = () => {
    setCategories([inputText, ...categories])
  }
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValueEmpy(inputText)) {
      return console.log("text empy");
    }
    handleAddCategorie();
    return setInputText('');
  }
  const isValueEmpy = (value) => {
    return value.length <= 3;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory
        inputText={inputText}
        handleInputChange={handleInputChange}
      />
      <ol>
        {
          categories.map((nameCategorie) => {
            return <GifGrid
              key={nameCategorie}
              category={nameCategorie}
            />
            //key don't cant key of map
          })
        }
      </ol>
    </form>
  )
}

export default Index;

import { useState } from "react";

export default function Verifier() {
  const languages = ['php', 'js', 'c++', 'python'];
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
     
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
  
    }
    console.log(
        selectedLanguages.map((e)=> e)
    )
  };

  return (
    <form>
      <label>Choisir un language :</label><br></br>
      {languages.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={item}
            name="lg"
            onChange={handleLanguageChange}
          />
          <label>{item}</label>
        </div>
      ))}
      <p>Selected languages: {selectedLanguages.join(', ')}</p>
    </form>
  );
}
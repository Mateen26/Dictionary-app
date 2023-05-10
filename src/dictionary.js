import React, { Fragment, useContext, useState } from 'react'
import axios from 'axios'
import 'animate.css';
import { ThemeContext } from './context';

const Dictionary = () => {
  const { theme, font } = useContext(ThemeContext);

  const [data, setData] = useState(null);
  const [word, setWord] = useState(null);
  const [animate, setAnimate] = useState(false);


  const handlesubmit = (e) => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        console.log('response: ', response);
        setData(response.data);
        setAnimate(true);
      })
      .catch((error) => {
        if (error?.response?.status && error?.response?.status === 404) {
          alert('No Data Found');
        }
      });
  };

  const onChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <>

      <div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

          <div className="flex justify-center mt-5" >
            <div className="relative  w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                onChange={onChange}
                type="search"
                id="default-search"
                className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${theme === "dark" ? "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" : "light:bg-white light:border-gray-300 light:placeholder-gray-400 light:text-gray-900 light:focus:ring-blue-500 light:focus:border-blue-500"}`}
                placeholder="Search a word"
                required
              />
              <button
                onClick={handlesubmit}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>
            </div>
          </div>
        </form>



        {data ? (
          <div
            className={`w-full font-${font} antialiased  max-w-3xl mx-auto rounded-lg shadow-2xl overflow-hidden mt-5 ${animate ? "animate__animated animate__fadeIn" : ""
              }`}
            onAnimationEnd={() => setAnimate(false)}
          >
            <div className={`bg-gray-100 py-4 px-6 ${theme === "dark" ? "dark" : "light"}`}>
              <h3 className={`text-6xl font-bold text-gray-900 mb-5`}>
                {data && data?.[0]?.word.charAt(0).toUpperCase() + data?.[0]?.word.slice(1) || 'Word'}
              </h3>

              {data?.[0]?.meanings.map((meaning, index) => (
                <div key={index}>
                  <p className="text-3xl font-medium text-gray-700 mb-5 mt-5">
                    {meaning.partOfSpeech.charAt(0).toUpperCase() + meaning.partOfSpeech.slice(1)}
                    <h3 className="text-lg font-medium text-gray-500">
                      Meaning
                    </h3>
                  </p>

                  {meaning.definitions.map((definition, index) => (
                    <p className="text-sm font-medium text-gray-500 ml-4" key={index}>
                      {index + 1}. {definition.definition}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className={`bg-white py-4 px-6 ${theme === "dark" ? "dark" : "light"}`}>
              <div className="flex items-center justify-between">
                {data?.[0]?.phonetics.map(({ text, audio }, index) => (
                  <Fragment key={index}>
                    {audio && (
                      <audio className="inline-block" src={audio} controls />
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Synonyms
                  </p>
                  <ul className="mt-1">
                    {data?.[0]?.meanings.map((meaning, index) => (
                      <div key={index}>
                        {meaning.synonyms && meaning.synonyms.map((synonyms, index) => (
                          <li className="text-sm text-gray-900" key={index}>
                            {index + 1}. {synonyms}
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Antonyms
                  </p>
                  <ul className="mt-1">
                    {data?.[0]?.meanings.map((meaning, index) => (
                      <div key={index}>

                        {meaning.antonyms && meaning.antonyms.map((antonyms, index) => (
                          <p className="text-sm text-gray-900" key={index}>
                            {index + 1}. {antonyms}
                          </p>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>) :
          <div
            className={`w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden mt-5 ${animate ? "animate__animated animate__fadeIn" : ""
              }`}
            onAnimationEnd={() => setAnimate(false)}
          >
          </div>

        }
      </div>



    </>
  )
}
export default Dictionary
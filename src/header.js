import React, { useContext } from 'react'
import { ThemeContext } from './context';
import sun from './sunrise_sun_sunny_shower_showers_sunny_cloudy_fog_day_time_1458.ico'
import moon from './pale_moon_browser_logo_icon_152969.ico'
import "./Header.css"
const Header = () => {
  const { theme, toggleTheme, changeFont } = useContext(ThemeContext);

  const handleFontChange = (event) => {
    const selectedFont = event.target.value;
    changeFont(selectedFont);
  };

  return (
    <header
      className={`text-gray-600 body-font ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          className={`${theme === "dark" ? "dark" : "light"}`}
        >
          <path
            d="M18,2 C19.3807,2 20.5,3.11929 20.5,4.5 L20.5,18.75 C20.5,19.1642 20.1642,19.5 19.75,19.5 L5.5,19.5 C5.5,20.0523 5.94772,20.5 6.5,20.5 L19.75,20.5 C20.1642,20.5 20.5,20.8358 20.5,21.25 C20.5,21.6642 20.1642,22 19.75,22 L6.5,22 C5.11929,22 4,20.8807 4,19.5 L4,4.5 C4,3.11929 5.11929,2 6.5,2 L18,2 Z M18,3.5 L6.5,3.5 C5.94772,3.5 5.5,3.94772 5.5,4.5 L5.5,18 L19,18 L19,4.5 C19,3.94772 18.5523,3.5 18,3.5 Z M16,5 C16.5523,5 17,5.44772 17,6 L17,8 C17,8.55228 16.5523,9 16,9 L8,9 C7.44772,9 7,8.55228 7,8 L7,6 C7,5.44772 7.44772,5 8,5 L16,5 Z M15.5,6.5 L8.5,6.5 L8.5,7.5 L15.5,7.5 L15.5,6.5 Z"
            id="🎨-Color"
          ></path>
        </svg>
        {/* <div className="my-hover-container ">
          <div className="my-hover-wrapper">
            <div className="w-con">
              <span className="w">D</span>
              <span className="w-rev">D</span>
            </div>
            <div className="e-con">
              <div className="e">i</div>
              <div className="e-rev">i</div>
            </div>
            <div className="l-con">
              <div className="l">c</div>
              <div className="l-rev">c</div>
            </div>
            <div className="c-con">
              <div className="c">t</div>
              <div className="c-rev">t</div>
            </div>
            <div className="o-con">
              <div className="o">i</div>
              <div className="o-rev">i</div>
            </div>
            <div className="m-con">
              <div className="m">o</div>
              <div className="m-rev">o</div>
            </div>
            <div className="e-con">
              <div className="e-2">n</div>
              <div className="e-2-rev">n</div>
            </div>
            <div className="n-con">
              <div className="n-2">a</div>
              <div className="n-2-rev">a</div>
            </div>
            <div className="r-con">
              <div className="r-2">r</div>
              <div className="r-2-rev">r</div>
            </div>
            <div className="y-con">
              <div className="y-2">y</div>
              <div className="y-2-rev">y</div>
            </div>
          </div>
        </div> */}
        <div className=" ml-4 flex items-center justify-center">
          <div className="group relative cursor-pointer  transition ease-in-out duration-500 hover:border-gray-100 hover:scale-110">
            <div className="uppercase text-4xl flex items-center relative">
                {"dictionary".split("").map((letter, index) => (
                  <div
                    key={index}
                    className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    {letter}
                  </div>
                ))}
              <div className="uppercase text-4xl flex items-center absolute bottom-0 left-0 item-center">
                {"dictionary".split("").map((letter, index) => (
                  <div
                    key={index}
                    className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>

        <div className="justify-between">
          <div className="relative inline-flex mr-3 sm:mr-5">
            <svg
              className="w-3 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                fill="#333"
                d="M.404 36.771C-3.302 30.173 3.628 24 9.854 24h392.291c6.225 0 13.156 6.173 9.449 12.771L217.557 207.23c-4.276 6.45-11.206 6.45-15.483 0L.404 36.771z"
              />
            </svg>
            <select
              onChange={handleFontChange}
              className={`w-full sm:w-56 appearance-none py-2 pl-4 pr-8 rounded-lg bg-white border border-gray-400 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${
                theme === "dark" ? "dark" : "light"
              }`}
            >
              <option
                className={`bg-white ${
                  theme === "dark" ? "dark:bg-gray-600" : "dark:bg-gray-300"
                }  hover:bg-blue-500 hover:text-white`}
                value="seriff"
              >
                Serif
              </option>
              <option
                className={`bg-white ${
                  theme === "dark" ? "dark:bg-gray-600" : "dark:bg-gray-300"
                }  hover:bg-blue-500 hover:text-white`}
                value="monox"
              >
                Monospace
              </option>
              <option
                className={`bg-white ${
                  theme === "dark" ? "dark:bg-gray-600" : "dark:bg-gray-300"
                }  hover:bg-blue-500 hover:text-white`}
                value="sanss"
              >
                Sans-serif
              </option>
            </select>
          </div>

          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={theme === "dark"}
            onChange={toggleTheme}
          ></input>
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="flexSwitchCheckDefault"
          >
            <img
              style={{ maxWidth: "20px" }}
              src={theme === "dark" ? moon : sun}
              alt="theme icon"
            />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header
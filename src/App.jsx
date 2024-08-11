import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { MdContentCopy } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

// const GreenSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked": {
//     color: pink[600],
//     "&:hover": {
//       backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
//     },
//   },
//   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//     backgroundColor: pink[600],
//   },
// }));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen w-screen items-center gap-4 pt-0 bg-[#002339] text-white">
      {/* Heading Container div */}
      <div className="flex my-6 ">
        <h1 className="text-4xl font-medium ">
          Generate
          <span className=" text-green-400 py-4  px-2 border-b-2 border-green-400 ">
            a random password
          </span>
        </h1>
      </div>

      {/* Input field container div */}
      <div className="flex  items-center gap-2 pr-2  bg-white h-14 w-[450px] rounded-lg ">
        <input
          type="text"
          placeholder="password"
          disabled
          className="h-full w-[90%] rounded-lg pl-4 placeholder:text-lg bg-white "
        />
        <button title="copy" className=" active:scale-105 " >
          <MdContentCopy size={24} color="#4ADE80" />
        </button>
      </div>

      {/* Password Options container div */}
      <div className="flex flex-col  py-6 px-4 justify-center items- gap-1 ">

        <h1 className="mb-2">Plese select at least one option</h1>
        <div className="option-box">
          <h2>Include Uppercase</h2>
          <Switch {...label} defaultChecked  />
        </div>
        <div className="option-box">
          <h2>Include Numbers</h2>
          <Switch {...label} defaultChecked  />
        </div>
        <div className="option-box mb-0">
          <h2>Include Symbols</h2>
          <Switch {...label} defaultChecked  />
        </div>

        <label for="password-len" class="my-2">password length</label>
        <input type="range" id="password-len" name="passwordLen" min="8" max="42"  className=" cursor-pointer w-full"></input>
      </div>


      <button className="flex justify-center items-center h-12 w-80 rounded-sm bg-green-500 hover:bg-green-400 active:opacity-70 transition-all ease-linear ">
        <IoIosFlash size={28} color="white" />
        Generate a Password
      </button>
    </div>
  );
}

export default App;

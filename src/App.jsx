import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { MdContentCopy } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [password, setPassword] = useState("");
  const [passwordLen, setPasswordLen] = useState(8);
  const [charAllowed, setCharAllowed] = useState(true);
  const [numAllowed, setNumAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    console.log("Generating password ...");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+";

    for (let i = 0; i < passwordLen; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [charAllowed, numAllowed, passwordLen, setPassword]);

  const copyToClipBoard = useCallback(() => {
    if (password.length > 0) {
      window.navigator.clipboard.writeText(password);
      // Alert("Copied to clipboard")
      toast("Copied to clipboard", { style: { backgroundColor: "" } });
    } else {
      toast("Generate a password to copy");
    }
  }, [password]);

  // ************************************************** RETURN ********************************************************

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-4 pt-0 bg-[#002339] text-white">
      {/* Heading Container div */}
      <div className="flex my-6 items-center justify-center ">
        <h1 className="text-2xl sm:text-4xl font-medium ">
          Generate
          <span className=" text-green-400 py-2  px-2 border-b-2 border-green-400 ">
            a random password
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------Input field container div----------------------------------------------------- */}

      <div className="flex  items-center gap-2 pr-2  bg-white h-14 w-80 sm:w-[450px] rounded-lg ">
        <input
          type="text"
          placeholder="password"
          value={password}
          readOnly
          onChange={(event) => setPassword(event.target.value)}
          className="h-full w-[90%] rounded-l-lg pl-4 placeholder:text-lg border-r-[1px]  bg-white text-gray-800 text-lg active: outline-none  "
        />
        <button
          title="copy"
          className=" active:scale-90 "
          onClick={() => copyToClipBoard()}
        >
          <MdContentCopy size={24} color="#4ADE80" />
        </button>
      </div>

      {/*------------------------------------------------------ Password Options container div-------------------------------------------------- */}

      <div className="flex flex-col  py-6 px-4 justify-center items- gap-1 ">
        <h1 className=" font-bold mb-2">Plese select at least one option</h1>
        <div className="option-box mb-0">
          <h2>Include special characters</h2>
          <Switch
            // {...label}
            // defaultChecked
            onChange={(event) => setCharAllowed(event.target.checked)}
          />
        </div>

        <div className="option-box">
          <h2>Include Numbers</h2>
          <Switch
            // {...label}
            onChange={(event) => setNumAllowed(event.target.checked)}
          />
        </div>

        {/* <div className="option-box">
          <h2>Include Uppercase</h2>
          <Switch defaultChecked  />
        </div> */}

        <label htmlFor="passLen" className=" font-bold my-2">
          password length :{" "}
          <span className="text-green-400">{passwordLen}</span>{" "}
        </label>
        <input
          type="range"
          id="passLen"
          name="passwordLen"
          min="8"
          max="42"
          value={passwordLen}
          onChange={(event) => setPasswordLen(event.target.value)}
          className=" cursor-pointer w-full"
        ></input>
      </div>

      {/* -------------------------------------------------------------- Generation Button --------------------------------------------------------- */}
      <button
        className="flex justify-center items-center h-12 w-80 rounded-sm bg-green-500 text-white text-lg
       hover:opacity-85 active:opacity-70 transition-all ease-linear "
        onClick={() => generatePassword()}
      >
        <IoIosFlash size={28} color="white" />
        Generate a Password
      </button>
    </div>
  );
}

export default App;

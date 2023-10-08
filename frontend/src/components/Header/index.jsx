import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="mockup-browser border bg-base-500" id="headerComponent">
      <div className="mockup-browser-toolbar">
        <div id="searchContainer">
          <input
            type="text"
            placeholder="Type here to search..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div id="bottonContainer">
          <button
            id="mostrarBotao"
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3855_552)">
                <path
                  d="M19.9759 9.1546C19.7898 6.39176 18.3945 3.81175 16.1851 2.0993C13.9759 0.386682 11.092 -0.32109 8.30125 0.135523C3.32444 0.980455 -0.326775 5.50121 0.0220669 10.4787C0.184939 12.8762 1.20809 15.0909 2.92908 16.7806C2.48717 17.4199 2.09186 17.8309 1.04538 18.6529C0.83611 18.8128 0.742998 19.0638 0.81275 19.315C0.859308 19.5662 1.04538 19.7716 1.27783 19.8401C1.62661 19.9543 2.13827 20 2.71967 20C3.95224 20 5.51036 19.7261 6.71972 19.1095C8.32444 19.6576 10.0453 19.7945 11.743 19.4977C16.7199 18.63 20.3246 14.0863 19.9757 9.15445L19.9759 9.1546ZM5.34776 11.5976C4.44077 11.5976 3.71987 10.8898 3.71987 9.99937C3.71987 9.10889 4.44077 8.40112 5.34776 8.40112C6.25475 8.40112 6.97565 9.10889 6.97565 9.99937C6.97565 10.8898 6.25475 11.5976 5.34776 11.5976ZM9.99898 11.5976C9.092 11.5976 8.3711 10.8898 8.3711 9.99937C8.3711 9.10889 9.092 8.40112 9.99898 8.40112C10.906 8.40112 11.6269 9.10889 11.6269 9.99937C11.6269 10.8898 10.906 11.5976 9.99898 11.5976ZM14.6502 11.5976C13.7432 11.5976 13.0223 10.8898 13.0223 9.99937C13.0223 9.10889 13.7432 8.40112 14.6502 8.40112C15.5572 8.40112 16.2781 9.10889 16.2781 9.99937C16.2781 10.8898 15.5572 11.5976 14.6502 11.5976Z"
                  fill="#F4F6F8"
                />
              </g>
              <defs>
                <clipPath id="clip0_3855_552">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button
            id="mostrarBotao"
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3326 13.0613H17.9129C19.0691 13.0613 20 13.9747 20 15.1015V15.511C20 15.9648 19.6268 16.3266 19.1662 16.3266H0.833903C0.372933 16.3266 3.05176e-05 15.9613 3.05176e-05 15.511V15.1015C3.05176e-05 13.9752 0.9345 13.0613 2.0872 13.0613H1.66751C2.12557 13.0613 2.49997 12.6955 2.49997 12.2442V7.34691C2.49997 3.28752 5.85785 0 10.0001 0C14.1434 0 17.5003 3.28927 17.5003 7.34691V12.2442C17.5003 12.6983 17.8729 13.0613 18.3328 13.0613H18.3326ZM7.08305 17.1429H12.9164C12.9164 18.7208 11.6105 20 9.9997 20C8.38895 20 7.08305 18.7208 7.08305 17.1429Z"
                fill="#F4F6F8"
              />
            </svg>
          </button>

          <div id="mainUserContainer">
            <div id="userContainer">
              <div className="background">
                <img src="assets/Memoji Boys 2-1.svg" alt="" />
              </div>
            </div>

            <div id="userNameContainer">
              <span>AR. Jakir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

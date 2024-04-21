import React from "react";
import Sroom from "./Sroom";
import Rroom from "./Rroom";
import Frontsroom from "./Frontsroom";
import Frontrroom from "./Frontrroom";

const Room = () => {
  return (
    <>
      <div>
        <div className=" w-full max-w-screen-xl p-4 py-6 ">
          <div className="md:flex md:justify-around">
            <div className="grid md:grid-cols-3  justify-center   gap-8 sm:gap-6 sm:grid-cols-2">
              <div className="max-w-md drop-shadow-xl bg-creame rounded-md overflow-hidden shadow-lg">
               <Frontsroom/>
              </div>
              <div className="max-w-md drop-shadow-xl bg-creame rounded-md overflow-hidden shadow-lg">
               <Frontrroom/>
              </div>
              <div className="flex drop-shadow-xl bg-creame flex-col justify-evenly items-center max-w-sm rounded-md overflow-hidden shadow-lg">
              <h1 className="text-center font-bold  mt-3 text-2xl">Important Links</h1>
                <ul className="list-disc">
                  <li>
                    <a   href="" className="hover:underline  text-2xl  font-bold hover:text-red-500 list-disc">
                      Welcome
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-2xl  font-bold hover:text-red-500 list-disc">
                      Safety
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-2xl  font-bold hover:text-red-500 list-disc">
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-2xl  font-bold hover:text-red-500 list-disc">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Room;

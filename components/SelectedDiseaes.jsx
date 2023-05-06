"use client";

import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const SelectedDiseaes = ({ diseaes, data, selectedSymptom ,showDiseasesItem}) => {
  const [symptomsOfSelectedDiseaes, setSymptomsOfSelectedDiseaes] = useState(
    []
  );
  const [showOtherSymptom, setShowOtherSymptom] = useState(false);
  let rr = data.filter((item) => item.includes(diseaes.value)).map((e) => e[0]);
  let qq = selectedSymptom
    .filter((item) => item.includes(diseaes.value))
    .map((e) => e[0]);
  const newArray = rr.filter((v) => !qq.includes(v));

  return (
    <div
      className={`flex  bg-white bg-opacity-90   my-2  flex-col justify-between rounded-2xl origin-right ${!showDiseasesItem && 'scale-x-0'} duration-300 `}
    >
      <div className="flex justify-between ">
        <div className="px-4 mt-3">{diseaes.value}</div>
        <div className=" bg-[#2d7cf1] py-2 px-3 rounded-br-2xl rounded-tl-2xl text-white ">
          {" "}
          +
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className=" flex flex-wrap px-3 mt-5 gap-2 rounded-xl">
            {selectedSymptom.map((symptom) =>
              symptom.map(
                (symptomItem) =>
                  symptomItem === diseaes.value && (
                    <div className="bg-[#edf8f7]  text-sm border rounded-2xl text-[15px] px-3 py-1 border-[#0067ff]">
                      {symptom[0]}
                    </div>
                  )
              )
            )}
            <div
              onClick={() => setShowOtherSymptom(!showOtherSymptom)}
              className={` ${
                newArray.length === 0 && "hidden"
              } text-sm border rounded-2xl cursor-pointer hover:bg-[#0067ff] hover:text-white duration-300  text-[15px] px-3 py-1 text-[#0067ff]`}
            >
              بقیه علائم
              <AiFillCaretDown
                className={`${
                  showOtherSymptom && "rotate-180"
                } duration-300 inline mr-1`}
              />
            </div>
          </div>
        </div>
          <div className={ `origin-right ${!showOtherSymptom ? 'scale-x-0 h-0 duration-0' : 'duration-500' }  flex flex-wrap px-3 pt-1 pb-3 gap-2 rounded-xl`}>
            {newArray.map((symptom) => (
              <div className={`bg-[#edf8f7] origin-right ${!showOtherSymptom && 'scale-x-0 w-0 h-0 duration-300'}  text-sm border rounded-2xl text-[15px] px-3 py-1 border-[#0067ff]`}>
                {symptom}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default SelectedDiseaes;

"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import bgImg from "../public/jpng.png";
import styles from "../styles/Home.module.css";
import SelectedDiseaes from "../components/SelectedDiseaes";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  let data = [
    // ["ش وزن غیرطبیعی", "تجمع ترشحات"],
    // ["ضعف جسمانی", "هایپر پلازی", "سنگ کلیه", "تومور"],



    ["تجمع ترشحات", 'پاكسازي غير موثر راه هوايي'],
    ["تجمع مايع", 'پاكسازي غير موثر راه هوايي'],
    ["کلاپس آلوئولها و تخريب بافت ريه", 'پاكسازي غير موثر راه هوايي'],
    ["افزايش مقاومت راه هوايی در نتیجه ادم مخاط برونشها", '565'],
    ["کاهش وزن غیرطبیعی", 'زردي نوزاد'],
    ["تاخیر در دفع مکونیوم", 'زردي نوزاد'],
    ["انسداد لارنکس بدلیل شل شدن و برگشت زبان بطرف عقب", 'پاكسازي غير موثر راه هوايي'],
    ["مشکل در تطابق با زندگی خارج رحمی", 'زردي نوزاد'],
    // ["55", '565', "rgrg",'575'],
        ["کاهش سطح هوشیاري", 'بروز اسپيراسيون'],
    ["کاهش رفلکس gag", 'بروز اسپيراسيون'],
    ["کاهش رفلکس سرفه", 'بروز اسپيراسيون'],
    ["اختلال در عمل بلع", 'بروز اسپيراسيون'],
    ["پوزش خوابیده به پشت بعد از عمل", 'بروز اسپيراسيون'],
    ["استفراغ بعد از بیهوشی", 'بروز اسپيراسيون'],


    // ["ضعب عضله", "ایدز", "تومور"],
    // ["تب", "تومور"],
    // ["ضعف جسمانی", "هایپر پلازی", "سنگ کلیه", "تومور"],
    // ["خلط", "سنگ کلیه", "rgrg"],
    // ["ضعب عضله", "ایدز", "تومور"],
    // ["تب", "تومور"],
    // ["ضعف جسمانی", "هایپر پلازی", "سنگ کلیه", "تومور"],
    // ["خلط", "سنگ کلیه", "rgrg"],
    // ["ضعب عضله", "ایدز", "تومور"],
    // ["تب", "تومور"],
    // ["ضعف جسمانی", "هایپر پلازی", "سنگ کلیه", "تومور"],
    // ["خلط", "سنگ کلیه", "rgrg"],
    // ["ضعب عضله", "ایدز", "تومور"],
  ];
  const [showDiseasesItem, setShowDiseasesItem] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedSymptom, setSelectedSymptomymptom] = useState([]);
  const [selectedDiseaes, setSelectedDiseases] = useState([]);
  const [diseasesSymptom, setDiseasesSymptom] = useState([]);
  useEffect(() => {
    setSelectedDiseases([
      selectedSymptom.map((symptom) =>
        symptom.filter((element, index) => index > 0)
      ),
    ]);
  }, [selectedSymptom]);
  useEffect(() => {
    setDiseasesSymptom(
      [...new Set(selectedDiseaes.flat(2))].map((value) => ({
        value,
        length: selectedDiseaes.flat(2).filter((diseaes) => diseaes === value)
          .length,
      }))
    );
  }, [selectedDiseaes]);
  return (
    <div>
      <Head>
        <title>Medical App</title>
        <link
          rel="icon"
          href="data:image/png;base64,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"
        />
      </Head>
      <main className={styles.q}>
        <div
          dir="rtl"
          className="bg-[#efefef] pt-56 md:pt-20 dark:bg-[#1c1d21] flex min-h-screen w-full  flex-col items-center  md:items-end  p-24 "
        >
          <div className="fixed z-0 rotate-[] -top-1 right-0 max-w-full  overflow-hidden ">
            <img
              src="https://www.medicalwebexperts.com/static/web-hero-7e8b752a930f8ea7c9c51f93daa31e2d.svg"
              alt=""
              className="min-w-[90vw] md:w-[70vw]  md:min-w-[50vw]  "
            />
            
          </div>
          <div className="rounded-3xl mb-3 z-[5] bg-[#fefefe] backdrop-blur-md  bg-opacity-40">
            <div className="w-[90vw] md:w-[90vw] md:w-[70vw] max-w-[550px] mt-3 px-3 flex flex-wrap gap-2 duration-300 ">
              {selectedSymptom.map((symptom) => (
                <div
                  className={`flex bg-[#2079ff] justify-between text-[#ffff] font-bold border rounded-2xl text-[15px]   border-[#0067ff] `}
                >
                  <p className="self-center px-3 py-1">{symptom[0]}</p>
                  <div
                    onClick={() => {
                      setSelectedSymptomymptom(
                        selectedSymptom.filter(
                          (element, index) => element !== symptom
                        )
                      );
                      setShowDiseasesItem(false);
                    }}
                    className="p-1 text-white font-semibold self-center"
                  >
                    <IoClose className="self-center cursor-pointer h-[30px] w-[30px] p-[5px] hover:text-red-600 hover:p-[2px] hover:pr-1 duration-200" />
                  </div>
                </div>
              ))}
            </div>
            <div className=" px-5 pt-3">
              <input
                className="h-16 px-5 rounded-3xl w-full outline-[#0067ff]"
                placeholder=" علائم را وارد کنید ..."
                id="5"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div
                className={`flex flex-col origin-top overflow-y-scroll max-h-[180px] mt-1 scrollbar duration-300 scrollbar dark:scrollbar-track-[#282a2c] scrollbar-track-secondtext dark:scrollbar-thumb-[#64778a] scrollbar-thumb-Darksecondtext scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm `}
                // onClick={() => {
                //   setIsOpen(true);
                // }}
              >
                {data.map(
                  (diseaesData) =>
                    diseaesData[0].includes(searchValue) && (
                      <div
                        className={`flex flex-col origin-top bg-white hover:bg-slate-300 duration-300 bg-opacity-[36%] backdrop-blur-sm py-[12px] rounded-2xl px-5 cursor-pointer  my-[2px] ${
                          selectedSymptom
                            .flat()
                            .find((e) => e === diseaesData[0]) && "hidden"
                        } duration-300 `}
                        onClick={() => {
                          setSelectedSymptomymptom([
                            ...selectedSymptom,
                            diseaesData,
                          ]);
                          setSearchValue("");
                          setShowDiseasesItem(false);
                        }}
                      >
                        {diseaesData[0]}
                      </div>
                    )
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setShowDiseasesItem(!showDiseasesItem);
              }}
              className="z-[5]  rounded-b-3xl mt-[3px] p-4  w-[90vw] md:w-[70vw] max-w-[550px] text-center "
            >
              <button className="bg-[#0067ff] text-lg w-[60vw] max-w-[470px] text-center text-white font-semibold rounded-2xl p-3">
                تشخیص!
              </button>
            </div>
          </div>
          <div
            className={` origin-top ${
              diseasesSymptom.length === 0 && "hidden"
            } ${
              !showDiseasesItem && "scale-y-0 h-0"
            } duration-300 z-10 rounded-3xl  w-[90vw] md:w-[70vw] bg-[#fefefe] backdrop-blur-md  bg-opacity-40 max-w-[550px] px-4 text-center py-5 rounded-b-3xl `}
          >
            {diseasesSymptom
              .sort((a, b) => b.length - a.length)
              .map((diseaes) => (
                <SelectedDiseaes
                  diseaes={diseaes}
                  selectedSymptom={selectedSymptom}
                  data={data}
                  showDiseasesItem={showDiseasesItem}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaPause, FaPlay } from "react-icons/fa";
import {
  IoBulbOutline,
  IoCopyOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const ContentCard = ({ content, index }) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);

  // console.log(content?.audio);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlay]);

  const handleAudioEnd = () => {
    setIsPlay(false);
  };

  return (
    <div className="px-8 py-4 rounded-xl border border-[#E2E2E2] bg-white">
      {/* card title  */}
      <div className="flex  items-center gap-2.5 ">
        <figure>
          <img src="/assets/allah 1 (Traced).png" alt="" />
        </figure>
        <h3 className="text-[#1FA45B] font-semibold text-base">
          {index + 1}. {content?.dua_name_en}
        </h3>
      </div>
      {/* card description  */}
      <div>
        {/* description 01 ::: intro  */}
        {content?.top_en && (
          <p className="font-normal text-base text-[#393939] py-7">
            {content?.top_en}
          </p>
        )}
        {/* dua arabic  */}
        {content?.dua_arabic && (
          <p
            className="font-normal text-2xl text-[#393939] py-7 text-end me_quran-font"
            style={{ lineHeight: "71px" }}
          >
            {content?.dua_arabic}
          </p>
        )}
        {/*  Transliteration  */}
        {content?.transliteration_en && (
          <p className=" font-semibold text-base text-[#393939] py-7">
            Transliteration:{" "}
            <span className="font-normal italic text-base">
              {content?.transliteration_en}
            </span>
          </p>
        )}
        {/*  Translation  */}
        {content?.translation_en && (
          <p className=" font-semibold text-base text-[#393939] py-2.5">
            Translation:{" "}
            <span className="font-normal text-base">
              {content?.translation_en}
            </span>
          </p>
        )}
      </div>
      {/* referance  */}
      {content?.refference_en && (
        <div className="my-7">
          <h3 className="font-semibold text-base text-[#1FA45B]">Reference:</h3>
          <p className="font-medium text-base text-[#393939]">
            {content?.refference_en}
          </p>
        </div>
      )}
      {/* player and icon section  */}
      <div className="flex items-center justify-between">
        <div>
          {content?.audio && (
            <div className="flex items-center justify-center w-12 h-12 bg-[#1FA45B] rounded-full cursor-pointer">
              <span onClick={() => setIsPlay(!isPlay)}>
                {isPlay ? (
                  <FaPause className="text-white text-2xl" />
                ) : (
                  <FaPlay className="text-white text-2xl" />
                )}
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-10 text-[#868686] text-xl ">
          <IoCopyOutline className="cursor-pointer" />
          <CiBookmark className="cursor-pointer" />
          <IoBulbOutline className="cursor-pointer" />
          <IoShareSocialOutline className="cursor-pointer" />
          <MdOutlineReportGmailerrorred className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

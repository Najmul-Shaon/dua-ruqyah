import { CiBookmark } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import {
  IoBulbOutline,
  IoCopyOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const ContentCard = () => {
  return (
    <div className="px-8 py-4 rounded-xl border border-[#E2E2E2] bg-white">
      {/* card title  */}
      <div className="flex  items-center gap-2.5 ">
        <figure>
          <img src="/assets/allah 1 (Traced).png" alt="" />
        </figure>
        <h3 className="text-[#1FA45B] font-semibold text-base">
          2. Conditions for Dua to be successful
        </h3>
      </div>
      {/* card description  */}
      <div>
        {/* description 01 ::: intro  */}
        <p className="font-normal text-base text-[#393939] py-7">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>
        {/* dua arabic  */}
        <p
          className="font-normal text-2xl text-[#393939] py-7 text-end me_quran-font"
          style={{ lineHeight: "71px" }}
        >
          لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
          مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
          ذَا الْجَدِّ مِنْكَ الْجَدُّ
        </p>
        {/*  Transliteration  */}
        <p className=" font-semibold text-base text-[#393939] py-7">
          Transliteration:{" "}
          <span className="font-normal italic text-base">
            All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy.
          </span>
        </p>
        {/*  Translation  */}
        <p className=" font-semibold text-base text-[#393939] py-2.5">
          Translation:{" "}
          <span className="font-normal text-base">
            All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy.
          </span>
        </p>
      </div>
      {/* referance  */}
      <div className="my-7">
        <h3 className="font-semibold text-base text-[#1FA45B]">Reference:</h3>
        <p className="font-medium text-base text-[#393939]">Bukhari: 844</p>
      </div>
      {/* player and icon section  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-12 h-12 bg-[#1FA45B] rounded-full">
          <FaPlay className="text-white text-2xl" />
        </div>
        <div className="flex gap-10 text-[#868686] text-xl">
          <IoCopyOutline />
          <CiBookmark />
          <IoBulbOutline />
          <IoShareSocialOutline />
          <MdOutlineReportGmailerrorred />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

import { FaInfinity, FaRegClock, FaRegFile } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import { RiFolderDownloadLine } from "react-icons/ri";

function CourseFeatures({ courseTime }: { courseTime: string }) {
  return (
    <div className=" text-gray1 mt-8 py-6">
      <div className="container mx-auto  px-4">
        <h2 className="text-4xl">This course includes: </h2>
        <ul className="grid grid-cols-2 mt-8 justify-between w-full gap-y-5 text-lg">
          <li className="flex gap-1">
            <FaRegClock />
            <span>{courseTime} hours on-demand videos</span>
          </li>
          <li className="flex gap-1">
            <IoPhonePortraitSharp />
            <span>Access on mobile and TV</span>
          </li>
          <li className="flex gap-1">
            <FaRegFile />
            <span>0 articles</span>
          </li>
          <li className="flex gap-1">
            <FaInfinity />
            <span>Full lifetime access</span>
          </li>
          <li className="flex gap-1">
            <RiFolderDownloadLine />
            <span>0 downloadable resources</span>
          </li>
          <li className="flex gap-1">
            <LuTrophy />
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseFeatures;

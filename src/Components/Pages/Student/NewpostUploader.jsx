import { BsImage, BsFillCalendar2HeartFill } from "react-icons/bs";
import { MdOutlineSlowMotionVideo, MdOutlinePoll } from "react-icons/md";
import { ImCross } from "react-icons/im";

import { useState } from "react";
import style from './NewpostUploader.module.css'
import profile from '../../../assets/Avatar (2).png'
function NewpostUploader() {
  const [uploadData, setUploadData] = useState(false);
  const [cover, setCover] = useState("");
  const [disc, setDisc] = useState("");
  const [value, setValue] = useState("Upload");

  

  const handleSubmit = async (e) => {
    e.preventDefault();
       setUploadData(false);
  };

  const handleClick = () => {
    const submit = document.querySelector(".submit");
    submit.style.cursor = "no-drop";
    setValue("Uploading..");
    setInterval(() => {
      setValue("Upload");
      submit.style.cursor = "pointer";
    }, 2500);
  };

  return (
    <div className={style.container}>


      <span className={style.span}>
        
          <img
            src={profile}
            alt=""
            className={style.imgOne}
          />
        <input
          type="text"
          className={style.inputOne}
          placeholder="Tell your friends about your thoughts..."
          maxLength={1}
          onChange={() => setUploadData(true)}
        />
      </span>

      <span className={style.spantwo}>
        <label
          className={style.labelOne}
          onClick={() => setUploadData(true)}
        >
          <BsImage className={style.BsImage} />
          <h3 className={style.videoText}>Photo</h3>
        </label>
        <label
          className={style.videoLabel}
          htmlFor="video"
        >
          {/* <input type="file" id='video' className='hidden' accept="video/mp4,video/mkv, video/x-m4v,video/*"/> */}
          <MdOutlineSlowMotionVideo
            fontSize={18}
            className={style.videoMd}
          />
          <h3 className={style.videoText}>Video</h3>
        </label>
        <label className={style.labelOne}>
          <MdOutlinePoll fontSize={18} className={style.textYellow} />
          <h3 className={style.videoText}>Poll</h3>
        </label>
        <label className={style.schedule}>
          <BsFillCalendar2HeartFill className={style.textYellow} />
          <h3 className={style.videoText}>Schedule</h3>
        </label>
      </span>

      {uploadData && (
        <div className={style.divupload}>
          <form
            className={style.uploadform}
            onSubmit={handleSubmit}
          >
            <div className={style.uploadDivTwo}>
              <input
                type="file"
                id="image"
                accept="image/*"
                className={style.fileupload}
                onChange={(e) => setCover(e.target.files[0])}
                required
              />
              <input
                type="text"
                maxLength={150}
                placeholder="post title...."
                onChange={(e) => setDisc(e.target.value)}
                value={disc}
                className="w-full my-3 bg-transparent border border-gray-900 rounded px-2 text-sm outline-none py-2 placeholder:text-gray-300"
                required
              />

              <input
                type="submit"
                className="bg-yellow-500 px-5 py-2 my-4 text-white font-semibold rounded-md cursor-pointer submit"
                value={value}
                onClick={handleClick}
              />
              <ImCross
                fontSize={15}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setUploadData(false)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewpostUploader;
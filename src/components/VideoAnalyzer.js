import React, { useState } from "react";
import axios from "axios";

export const VideoAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [breakdownTxt, setBreakdownTxt] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    const videoId = url.split("?v=")[1];
    setBreakdownTxt('')
    axios
      .get(`http://127.0.0.1:8000/fabrichof/${videoId}/`)
      .then((response) => {
        const content = response.data.response.replaceAll('-', '\n\n -')
        setBreakdownTxt(content)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-secondary">
      <h5 className="text-white">
        Want all the stats and predictions from your favorite sports analysts
        but don't have time to watch a long video?
      </h5>
      <h5 className="text-white">
        Paste the link to a YouTube video below to get a summary of stats and
        predictions in seconds
      </h5>
      <div className="join">
        <input
          className="input input-bordered input-primary min-w-full join-item"
          placeholder="YouTube Video URL"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="btn join-item rounded-r-half w-25"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Get Breakdown
        </button>
      </div>
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16">
            <p>{breakdownTxt}</p>
        </div>
    </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { VideoInfo, VideoAnnotations, VideoModule } from "../components/index";
import { getVideo } from '../services/index';
import './VideoDetail.css';

export const VideoDetail = () => {
    const params = useParams();
    const [ video, setVideo ] = useState([]);
    
    useEffect(() => {
        async function fetchOneVideo(){
          const data = await getVideo(params.uid);
          setVideo(data);
        }
        fetchOneVideo();
     }, []);

  return (
    <>
    <div className="video-display">
      <div className="row">
        <div className="col-6">
          <div className="row display-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="detailvideoframe" title={params.uid} stypeclass="embed-responsive-item" src={video.url}></iframe>
            </div>
          </div>
          <div className="row display-detail">
            <VideoModule name={"narration_pass_1.narrations"} />
          </div>
          <div className="row display-detail">
            <VideoModule name={"narration_pass_2.narrations"}/>
          </div>
          <div className="row display-detail">
            <VideoModule name={"narration_pass_1.summaries"}/>
          </div>
          <div className="row display-detail">
            <VideoModule name={"narration_pass_2.summaries"}/>
          </div>
        </div>
        <div className="col-6 right-scroll">
          <div className="video-type">
            <span>Info:</span>
          </div>
          <VideoInfo video={video}/>
          <div className="video-type">
            <span>Annotations:</span>
          </div>
          <VideoAnnotations />
        </div>
      </div>
      </div>
    </>
  )
}

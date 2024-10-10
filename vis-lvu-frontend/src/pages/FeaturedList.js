import { useState, useEffect } from "react";
import { VideoCard, Filter, VideoPagination } from "../components/index";
import { getFeaturedList } from '../services/index';
import { Link } from "react-router-dom";
import './FeaturedList.css';
import { useFilter } from "../context";

export const FeaturedList = () => {
    //const [videos, setVideos] = useState(featured_videos);
    const [show, setShow] = useState(true);
    const [videos, setVideos] = useState([]);
    const { initialFeatureList } = useFilter();
    let propertylist = ['summaries', 'device', 'dimensions', 'duration', 'fho_lta.action_nouns', 'fho_lta.action_verbs',
        'fho_scod.objects', 'fho_sta.objects', 'fho_sta.verbs', 'is_stereo', 'modalities', 'moments.activities', 'nlq.query_templates', 'num_frames',
        'physical_setting_name', 'scenarios', 'split_av', 'split_em', 'split_fho', 'splits', 'video_source', 'vq.objects'
    ];
    //initialFeatureList(propertylist);
    useEffect(() => {
        async function fetchVideo(){
            const data = await getFeaturedList();
            setVideos(data);
        }
        fetchVideo();
    }, []);
  return (
    <>
        <div className="container">
            <div className="row">
                <Filter />
            </div>
            <div className="row">
            { show && videos.map((video, index) => (
                <div key={index} className="col-4">
                    <Link className="card-link" to={`/videos/${video.uid}`}>
                        <VideoCard video={video}/>
                    </Link>
                </div>
             ))}
             </div>
             <div className="row">
                <VideoPagination />
            </div>
        </div>
    </>
  )
}

import { Routes, Route } from "react-router-dom";
import { FeaturedList, VideoDetail, PageNotFound } from '../pages/index';
export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<FeaturedList />} />
            <Route path="videos/:uid" element={<VideoDetail />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

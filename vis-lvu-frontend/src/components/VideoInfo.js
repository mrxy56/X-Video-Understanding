import './VideoInfo.css';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

export const VideoInfo = ({video}) => {
  const MUI_X_VIDEO_INFO = [
    {
      id: 'video_uid',
      label: 'video_uid: ' + video.uid,
      children: [],
    },
    {
      id: 'video_source',
      label: 'video_source: ' + video.source,
      children: [],
    },
    {
      id: 'device',
      label: 'device: ' + video.device,
      children: [],
    },
    {
      id: 'metadata',
      label: 'metadata',
      children: [
        { id: 'dimensions', label: 'dimensions: ' + video.dimensions},
        { id: 'duration', label: 'duration: ' + video.duration},
        { id: 'fps', label: 'fps: ' + video.fps},
        { id: 'num_frames', label: 'num_frames: ' + video.num_frames},
        { id: 'video_codec', label: 'video_codec: ' + 'libvpx-vp9'},
      ],
    },
    {
      id: 'scenarios',
      label: 'scenarios',
      children: [{ id: 'scenarios_0', label: '0: ' + video.scenarios }],
    },
    {
      id: 'splits',
      label: 'splits',
      children: [{ id: 'splits_0', label: '0: ' + video.splits}],
    },
    {
      id: 'summary',
      label: 'summary: ' + video.summary,
      children: [],
    },
  ];
  
  return (
    <>
      <div className='tree-view'>
        <RichTreeView items={MUI_X_VIDEO_INFO} />
      </div>
    </>
  )
}

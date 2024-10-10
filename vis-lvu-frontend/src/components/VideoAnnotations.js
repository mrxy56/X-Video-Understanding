import './VideoAnnotations.css';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

export const VideoAnnotations = () => {
  const MUI_X_VIDEO_ANNOTATIONS = [
    {
      id: 'narration_pass_1',
      label: 'narration_pass_1',
      children: [
        { id: 'narration1_0', 
          label: '0:00 #C C moves around in a living room.',
          children: [
            { id: "video_frame1_0", label: "video_frame: 19", children: []},
            { id: "label1_0", label: "label: #C C moves around in a living room.", children: []},
            { id: "video_time1_0", label: "video_time: 0:00", children: []},
          ],
        },
        { id: 'narration1_1', 
          label: '0:05 #O a woman X walks toward a couch in the living room.',
          children: [
            { id: "video_frame_1_1", label: "video_frame: 150", children: []},
            { id: "label_1_1", label: "label: #O a woman X walks toward a couch in the living room.", children: []},
            { id: "video_time_1_1", label: "video_time: 0:05", children: []},
          ], 
        },
        { id: 'narration1_2',
          label: '0:09 #O the woman X sits on the couch.',
          children: [
            { id: "video_frame_1_2", label: "video_frame: 285", children: []},
            { id: "label_1_2", label: "label: #O the woman X sits on the couch.", children: []},
            { id: "video_time_1_2", label: "video_time: 0:09", children: []},
          ],
        },
        { id: 'narration1_3',
          label: '0:09 #O the man Y stands beside the woman X.',
          children: [
            { id: "video_frame_1_3", label: "video_frame: 295", children: []},
            { id: "label_1_3", label: "label: #O the man Y stands beside the woman X.", children: []},
            { id: "video_time_1_3", label: "video_time: 0:09", children: []},
          ],
        },
        { id: 'narration1_4',
          label: '0.17 #O the woman X puts her and on the floor.',
          children: [
            { id: "video_frame_1_4", label: "video_frame: 535", children: []},
            { id: "label_1_4", label: "label: #O the woman X puts her and on the floor.", children: []},
            { id: "video_time_1_4", label: "video_time: 0:17", children: []},
          ], 
        },
      ],
    },
    {
      id: 'summaries_1',
      label: 'summaries',
      children: [
        { id: 'summaries1_0', 
          label: '0:00 - 05:00 #Summary C was in a living room, C played card on a table with a woman X and a man Y.',
          children: [
            { id: "start_time_1_0", label: "start_time: 0:00", children: []},
            { id: "end_time_1_0", label: "end_time: 05:00", children: []},
            { id: "summary_label_1_0", label: "label: #Summary C was in a living room, C played card on a table with a woman X and a man Y.", children: []},
          ]
        },
        { id: 'summaries1_1',
          label: '04:30 - 09:30 #Summary C was in a room, C played cards with a Man X and a Woman Y on a table.',
          children: [
            { id: "start_time_1_1", label: "start_time: 04:30", children: []},
            { id: "end_time_1_1", label: "end_time: 09:30", children: []},
            { id: "summary_label_1_1", label: "label: #Summary C was in a room, C played cards with a Man X and a Woman Y on a table.", children: []},
          ]
         },
        { id: 'summaries1_2',
          label: '09:00 - 14:00 #Summary C was in a room, C played card game with a Man X and a Woman Y.',
          children: [
            { id: "start_time_1_2", label: "start_time: 09:00", children: []},
            { id: "end_time_1_2", label: "end_time: 14:00", children: []},
            { id: "summary_label_1_2", label: "label: #Summary C was in a room, C played card game with a Man X and a Woman Y.", children: []},
          ]
        },
      ],
    },
    {
      id: 'narration_pass_2',
      label: 'narration_pass_2',
      children: [
        { id: 'narration2_0', 
          label: '0:00 #C C moves around in a living room.',
          children: [
            { id: "video_frame2_0", label: "video_frame: 19", children: []},
            { id: "label2_0", label: "label: #C C moves around in a living room.", children: []},
            { id: "video_time2_0", label: "video_time: 0:00", children: []},
          ],
        },
        { id: 'narration2_1', 
          label: '0:05 #O a woman X walks toward a couch in the living room.',
          children: [
            { id: "video_frame_2_1", label: "video_frame: 150", children: []},
            { id: "label_2_1", label: "label: #O a woman X walks toward a couch in the living room.", children: []},
            { id: "video_time_2_1", label: "video_time: 0:05", children: []},
          ], 
        },
        { id: 'narration2_2',
          label: '0:09 #O the woman X sits on the couch.',
          children: [
            { id: "video_frame_2_2", label: "video_frame: 285", children: []},
            { id: "label_2_2", label: "label: #O the woman X sits on the couch.", children: []},
            { id: "video_time_2_2", label: "video_time: 0:09", children: []},
          ],
        },
        { id: 'narration2_3',
          label: '0:09 #O the man Y stands beside the woman X.',
          children: [
            { id: "video_frame_2_3", label: "video_frame: 295", children: []},
            { id: "label_2_3", label: "label: #O the man Y stands beside the woman X.", children: []},
            { id: "video_time_2_3", label: "video_time: 0:09", children: []},
          ],
        },
        { id: 'narration2_4',
          label: '0.17 #O the woman X puts her and on the floor.',
          children: [
            { id: "video_frame_2_4", label: "video_frame: 535", children: []},
            { id: "label_2_4", label: "label: #O the woman X puts her and on the floor.", children: []},
            { id: "video_time_2_4", label: "video_time: 0:17", children: []},
          ], 
        },
      ],
    },
    {
      id: 'summaries_2',
      label: 'summaries',
      children: [
        { id: 'summaries2_0', 
          label: '0:00 - 05:00 #Summary C was in a room, he played cards with X and a man Y and conversed',
          children: [
            { id: "start_time_2_0", label: "start_time: 0:00", children: []},
            { id: "end_time_2_0", label: "end_time: 05:00", children: []},
            { id: "summary_label_2_0", label: "label: #Summary C was in a room, he played cards with X and a man Y and conversed", children: []},
          ]
        },
        { id: 'summaries2_1',
          label: '04:30 - 09:30 #Summary C was in a room, conversed and played cards with X and Y',
          children: [
            { id: "start_time_2_1", label: "start_time: 04:30", children: []},
            { id: "end_time_2_1", label: "end_time: 09:30", children: []},
            { id: "summary_label_2_1", label: "label: #Summary C was in a room, conversed and played cards with X and Y", children: []},
          ]
         },
        { id: 'summaries2_2',
          label: '09:00 - 14:00 #Summary C was in a room, played cards with X and Y and divided the cards',
          children: [
            { id: "start_time_2_2", label: "start_time: 09:00", children: []},
            { id: "end_time_2_2", label: "end_time: 14:00", children: []},
            { id: "summary_label_2_2", label: "label: #Summary C was in a room, played cards with X and Y and divided the cards", children: []},
          ]
        },
      ],
    },
  ];
  return (
    <>
        <div className='tree-view'>
          <RichTreeView items={MUI_X_VIDEO_ANNOTATIONS} />
       </div>
    </>
  )
}

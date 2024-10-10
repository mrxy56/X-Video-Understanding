import { TwelveLabs } from 'twelvelabs-js';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

const videoPath = '<YOUR_VIDEO_PATH>';

// Utility function to print a specific page
function printPage(searchData) {
  (searchData).forEach((clip) => {
    console.log(`video_id= ${clip.videoId} score=${clip.score} start=${clip.start} end=${clip.end} confidence=${clip.confidence}`);
  });
  }
  (async () => {
   const client = new TwelveLabs({ apiKey: 'tlk_0ZND3PH3PERH4N22MDB73041T1QV' });

   let index = await client.index.create({
    name: '<YOUR_INDEX_NAME>',
    engines: [
      {
        name: 'marengo2.6',
        options: ['visual', 'conversation', 'text_in_video'],
      },
    ],
    addons: ['thumbnail'], // Optional
  });
  console.log(`Created index: id=${index.id} name=${index.name} engines=${JSON.stringify(index.engines)}`);

  const files = await fsPromises.readdir(videoPath);
  for (const file of files) {
    const filePath = path.join(__dirname, file);
    console.log(`Uploading ${filePath}`);
    const task = await client.task.create({
      indexId: index.id,
      file: filePath,
    });
    console.log(`Created task: id=${task.id}`);
    await task.waitForDone(500, (task) => {
      console.log(`  Status=${task.status}`);
    });
    if (task.status !== 'ready') {
      throw new Error(`Indexing failed with status ${task.status}`);
    }
    console.log(`Uploaded ${videoPath}. The unique identifer of your video is ${task.videoId}`);
  }

  let searchResults = await client.search.query({
    indexId: index.id,
    queryText: '<YOUR_QUERY>',
    options: ['visual', 'conversation', 'text_in_video'],
   });
    printPage(searchResults.data);
   while (true) {
     const page = await searchResults.next();
     if (page === null) break;
     else printPage(page);
   }
})();

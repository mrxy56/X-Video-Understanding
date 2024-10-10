export async function getVideoList(){
    //const response = await fetch(`http://https://vis-lvu.onrender.com:10000/videos?name_like${searchTerm ? searchTerm : ""}`);
    //const data = await response.json();
    //return data;
}

export async function getVideo(uid){
    //const response = await fetch(`https://vis-lvu.onrender.com/dbvideos/${uid}`);
    const response = await fetch(`http://localhost:8080/dbvideos/${uid}`);
    const data = await response.json();
    return data;
}

export async function getFeaturedList(){
    //const response = await fetch("https://vis-lvu.onrender.com/dbvideos");
    const response = await fetch("http://localhost:8080/dbvideos");
    const data = await response.json();
    return data;
}

// API Token
const baseUrl = "https://api.twelvelabs.io/v1.2";
const apiKey = "tlk_081CFEB11MWJSR2M7QFG42STNS49";
//const video_id = "66b33e077b2deac81dd128f9";
//index_id = "65eff5ce6dc02a0c6004a05a";

export async function generateGist(video_id){
    // Variables
    const data = {
        "video_id": video_id,
        "types": [
            "title",
            "hashtag",
            "topic"
        ]
    }
    // Send request
    const response = await fetch(baseUrl + "/gist", {
        method: "POST",
        headers: { "x-api-key": apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}


export async function generateSummary(video_id){
    // Variables
    const data = {
        "video_id": video_id,
        "type": "summary"
    }

    // Send request
    const response = await fetch(baseUrl + "/summarize", {
        method: "POST",
        headers: { "x-api-key": apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export async function generateChapters(video_id){
    // Variables
    const data = {
        "video_id": video_id,
        "type": "chapter"
    }

    // Send request
    const response = await fetch(baseUrl + "/summarize", {
        method: "POST",
        headers: { "x-api-key": apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export async function generateHighlights(video_id){
    // Variables
    const data = {
        "video_id": video_id,
        "type": "highlight"
    }

    // Send request
    const response = await fetch(baseUrl + "/summarize", {
        method: "POST",
        headers: { "x-api-key": apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export async function generateWithPrompt(video_id, prompt){

    // Variables
    const data = {
        "prompt": prompt,
        "video_id": video_id,
        "stream": false
    }
    
    // Send request
    const response = await fetch(baseUrl + "/generate", {
        method: "POST",
        headers: { "x-api-key": apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    return json;
}

export async function searchClips(index_id, query_text){
    // Variables
    const data = {
        "index_id": index_id,
        "query_text": query_text,
        "group_by": "clip",
        "search_options": [
            "visual",
            "conversation",
            "text_in_video",
            "logo"
        ],
        "threshold": "low",
        "page_limit": 12,
    }
    const formData = new FormData()
    Object.keys(data).map(async (key) => {
        const param = data[key]
        if (Array.isArray(param)) {
            param.forEach((elem) => {formData.append(key, elem)})
        } else if (param) {
            formData.append(key, param)
        }
    })

    // Send request
    const response = await fetch(baseUrl + "/search-v2", {
            method: "POST",
            headers: { "x-api-key": apiKey, 'Content-Type': 'multipart/form-data'},
            body: formData
    })
    const json = await response.json();
    return json;
}


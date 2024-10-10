/*
function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return {token, cbid};
}
*/

export async function getOneVideo(){
    //const browserData = getSession();
    /*
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    }
    const response = await fetch(`http://localhost:8080/videos?user.id=${browserData.cbid}`, requestOptions);
    const data = await response.json();
    return data;
    */
}

export async function createOneVideo(TaskList, total, user){
    //const browserData = getSession();
    /*
    const video = {
    }
    const response = await fetch("http://localhost:8080/videos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(videodetail)
    });
    const data = await response.json();
    return data;
    */
}
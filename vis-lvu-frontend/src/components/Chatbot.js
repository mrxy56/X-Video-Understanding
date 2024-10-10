import "./Chatbot.css";
import { faComments, faReply, faCircleXmark, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDropzone } from 'react-dropzone';
import { generateWithPrompt } from '../services/index';

export const Chatbot = () => {
  const [boxshow, setBoxShow] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [chatLogs, setChatLogs] = useState([]);
  const { getRootProps, acceptedFiles } = useDropzone();
  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  const handleChange = (e) => {
      setInputVal(e.target.value);
  }

  const handleClickXmark = () => {
      setBoxShow(!boxshow); 
      setChatLogs([]);
  }

  const handleClick = (e) => {
      e.preventDefault();
      /*generateWithPrompt("66b33e077b2deac81dd128f9", inputVal).then(prompt_json=>{
          setChatLogs([...chatLogs, inputVal, prompt_json.data]);
          setInputVal("");
      });*/
      const prompt_json_data = "Thanks for your time.";
      setChatLogs([...chatLogs, inputVal, prompt_json_data]);
      setInputVal("");
  }
  return (
    <>
    <div id="chatbot"> 
        <div id="chat-circle" className="btn" onClick={() => setBoxShow(!boxshow)}>
            <div id="chat-overlay">
            </div>
		    <FontAwesomeIcon className="chat-icon" icon={faComments} />
	    </div>
        <div>
        { boxshow && <div className="row chat-box">
             <div className="chat-box-header">
                <span className="chat-box-header-icon"><FontAwesomeIcon icon={faCircleXmark} onClick={handleClickXmark}/></span>
              </div>
            <div className="col-5">
              <div {...getRootProps({className:"dropzone"})}>
               <div className="chat-box-video">
                  <div className="chat-box-video-span">Video</div>
                      <div className="chat-box-video-prompt">
                         <p><FontAwesomeIcon icon={faUpload}/></p>
                         <p>Drop Video Here</p>
                         <p>- or -</p>
                         <p>Click to Upload</p>
                       </div>
                </div>
              </div>
              <ul>{files}</ul>
            </div>
            <div className="col-7">
              <div className="chat-box-body">
                <div className="chat-logs">
                    {chatLogs.map((chatLog, index) => (
                      <div key={index} className="chat-box-overlay">
                        <div className={index % 2 === 0? "chat-box-overlay-right":"chat-box-overlay-left"}>
                          {chatLog}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="chat-input">      
               <form>
                  <input onChange={handleChange} value={inputVal} type="text" id="input" placeholder="Ask a question..."/>
                  <button onClick = {handleClick} type="submit" className="chat-submit" id="chat-submit"><FontAwesomeIcon className="chat-submit-icon" icon={faReply} /></button>
               </form>      
             </div>
            </div>
          </div>
        } 
        </div>
    </div>
    </>
  )
}

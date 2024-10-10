import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "./PlainFilterBar.css";
import { DropdownMenu, DropdownItem } from "react-bootstrap";
import { useState } from "react";
import { useFilter } from "../context";

export const PlainFilterBar = ({prompt, toggle}) => {
  let propertylist = ['video_uid', 'benchmarks', 'summaries', 'device', 'dimensions', 'duration', 'fho_lta.action_nouns', 'fho_lta.action_verbs',
    'fho_scod.objects', 'fho_sta.objects', 'fho_sta.verbs', 'is_stereo', 'modalities', 'moments.activities', 'nlq.query_templates', 'num_frames',
    'physical_setting_name', 'scenarios', 'split_av', 'split_em', 'split_fho', 'splits', 'video_source', 'vq.objects'
  ];
  const [menuShow, setMenuShow] = useState(false);
  const [properties, setProperties] = useState(propertylist);
  const {state, dispatch} = useFilter();
  console.log("my state", state);
  console.log(state.featureList);
  function handleDelete(value){
      setProperties(properties.filter(property => value !== property));
      state[value] = !state[value];
  }

  return (
    <>
        <div className="filterbar col-5">
            <form>
              {!state.device && <span onClick={()=>dispatch({type: "DEVICE", payload: {device: !state.device}})}>device</span>}
              {!state.dimensions && <span onClick={()=>dispatch({type: "DIMENSIONS", payload: {dimensions: !state.dimensions}})}>dimensions</span>}
              {!state.duration && <span onClick={()=>dispatch({type: "DURATION", payload: {duration: !state.duration}})}>duration</span>}
              {!state.is_stereo && <span onClick={()=>dispatch({type: "IS_STEREO", payload: {is_stereo: !state.is_stereo}})}>is_stereo</span>}
              {!state.split_av && <span onClick={()=>dispatch({type: "SPLIT_AV", payload: {split_av: !state.split_av}})}>split_av</span>}
              <label htmlFor="filter"></label>
              <input id="filter" name="filter" type="text" placeholder={prompt} autoComplete="off" onClick={()=>setMenuShow(!menuShow)}></input>
              <div>
                {menuShow && <DropdownMenu show className="menu-scroll">
                {properties.map((value, index) => (state[value] &&
                  <DropdownItem key={index} onClick={() => handleDelete(value)}>
                    {value}
                  </DropdownItem>
                ))}
                </DropdownMenu>
                }
              </div>
              <button onClick={() => dispatch({type: "CLEAR_FILTER"})} 
              type="button"><FontAwesomeIcon icon={faRotateLeft}/></button>
            </form>
        </div>
    </>
  )
}

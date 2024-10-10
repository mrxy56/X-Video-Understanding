import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    featureList: [],
    video_uid: false,
    summaries: false,
    device: false,
    dimensions: false,
    duration: false,
    fho_lta_action_nouns: false, 
    fho_lta_action_verbs: false,
    fho_scod_objects: false, 
    fho_sta_objects: false,
    fho_sta_verbs: false, 
    is_stereo: false, 
    modalities: false, 
    moments_activities: false, 
    nlq_query_templates: false, 
    num_frames: false,
    physical_setting_name: false, 
    scenarios: false, 
    split_av: false, 
    split_em: false, 
    split_fho: false, 
    splits: false, 
    video_source: false, 
    vq_objects: false
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
 
    function initialFeatureList(features){
        dispatch({type: "FEATURE_LIST", payload: {featureList: features}});
    }

    function video_uidFilter(features){
        return state.video_uid ? features.filter(feature => feature !== "video_uid") : features;
    }

    function summariesFilter(features){
        return state.summaries ? features.filter(feature => feature !== "summaries"): features;
    }

    function deviceFilter(features){
        return state.device ? features.filter(feature => feature !== "device"): features;
    }

    function dimensionsFilter(features){
        return state.dimensions ? features.filter(feature => feature !== "dimensions"): features;
    }

    function durationFilter(features){
        return state.duration ? features.filter(feature => feature !== "duration"): features;
    }

    function fho_lta_action_nounsFilter(features){
        return state.fho_lta_action_nouns ? features.filter(feature => feature !== "fho_lta_action_nouns"): features;
    }

    function fho_lta_action_verbsFilter(features){
        return state.fho_lta_action_verbs ? features.filter(feature => feature !== "fho_lta_action_verbs"): features;
    }

    function fho_scod_objectsFilter(features){
        return state.fho_scod_objects ? features.filter(feature => feature !== "fho_fho_scod_objects"): features;
    }

    function fho_sta_objectsFilter(features){
        return state.fho_sta_objects ? features.filter(feature => feature !== "fho_sta_objects"): features;
    }

    function fho_sta_verbsFilter(features){
        return state.fho_sta_verbs ? features.filter(feature => feature !== "fho_sta_verbs"): features;
    }

    function is_stereoFilter(features){
        return state.is_stereo ? features.filter(feature => feature !== "is_stereo"): features;
    }

    function modalitiesFilter(features){
        return state.modalities ? features.filter(feature => feature !== "modalities"): features;
    }

    function moments_activitiesFilter(features){
        return state.moments_activities ? features.filter(feature => feature !== "moments_activities"): features;
    }

    function nlq_query_templatesFilter(features){
        return state.nlq_query_templates ? features.filter(feature => feature !== "nlq_query_templates"): features;
    }

    function num_framesFilter(features){
        return state.num_frames ? features.filter(feature => feature !== "num_frames"): features;
    }

    function physical_setting_nameFilter(features){
        return state.physical_setting_name ? features.filter(feature => feature !== "physical_setting_name"): features;
    }

    function scenariosFilter(features){
        return state.scenarios ? features.filter(feature => feature !== "scenarios"): features;
    }

    function split_avFilter(features){
        return state.split_av ? features.filter(feature => feature !== "split_av") : features;
    }

    function split_emFilter(features){
        return state.split_em ? features.filter(feature => feature !== "split_em"): features;
    }

    function split_fhoFilter(features){
        return state.split_fho ? features.filter(feature => feature !== "split_fho"): features;
    }

    function splitsFilter(features){
        return state.splits ? features.filter(feature => feature !== "splits"): features;
    }

    function video_sourceFilter(features){
        return state.video_source ? features.filter(feature => feature !== "video_source"): features;
    }

    function vq_objectsFilter(features){
        return state.vq_objects ? features.filter(feature => feature !== "vq_objects"): features;
    }

    let filteredFeatureList = state.featureList;
    /*
    filteredFeatureList = video_uidFilter(filteredFeatureList);
    filteredFeatureList = summariesFilter(filteredFeatureList);
    filteredFeatureList = deviceFilter(filteredFeatureList);
    filteredFeatureList = dimensionsFilter(filteredFeatureList);
    filteredFeatureList = durationFilter(filteredFeatureList);
    filteredFeatureList = fho_lta_action_nounsFilter(filteredFeatureList);
    filteredFeatureList = fho_lta_action_verbsFilter(filteredFeatureList);
    filteredFeatureList = fho_scod_objectsFilter(filteredFeatureList);
    filteredFeatureList = fho_sta_objectsFilter(filteredFeatureList);
    filteredFeatureList = fho_sta_verbsFilter(filteredFeatureList);
    filteredFeatureList = is_stereoFilter(filteredFeatureList);
    filteredFeatureList = modalitiesFilter(filteredFeatureList);
    filteredFeatureList = moments_activitiesFilter(filteredFeatureList);
    filteredFeatureList = nlq_query_templatesFilter(filteredFeatureList);
    filteredFeatureList = num_framesFilter(filteredFeatureList);
    filteredFeatureList = physical_setting_nameFilter(filteredFeatureList);
    filteredFeatureList = scenariosFilter(filteredFeatureList);
    filteredFeatureList = split_avFilter(filteredFeatureList);
    filteredFeatureList = split_emFilter(filteredFeatureList);
    filteredFeatureList = split_fhoFilter(filteredFeatureList);
    filteredFeatureList = splitsFilter(filteredFeatureList);
    filteredFeatureList = video_sourceFilter(filteredFeatureList);
    filteredFeatureList = vq_objectsFilter(filteredFeatureList);
    */

    const value = {
        state,
        dispatch,
        featureList: filteredFeatureList,
        initialFeatureList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}
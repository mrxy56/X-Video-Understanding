export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case "FEATURE_LIST":
            return {...state, featureList: payload.featureList }
        
        case "VIDEO_UID":
            return {...state, video_uid: payload.video_uid }

        case "SUMMARIES":
            console.log(payload.summaries);
            return {...state, summaries: payload.summaries }

        case "DEVICE":
            return {...state, device: payload.device }

        case "DIMENSIONS":
            return {...state, dimensions: payload.dimensions }

        case "DURATION":
            return {...state, duration: payload.duration }

        case "FHO_LTA_ACTION_NOUNS":
            return {...state, fho_lta_action_nouns: payload.fho_lta_action_nouns }

        case "FHO_LTA_ACTION_VERBS":
            return {...state, fho_lta_action_verbs: payload.fho_lta_action_verbs }

        case "FHO_SCOD_OBJECTS":
            return {...state, fho_scod_objects: payload.fho_scod_objects }
        
        case "FHO_STA_OBJECTS":
            return {...state, fho_sta_objects: payload.fho_sta_objects }
        
        case "FHO_STA_VERBS":
            return {...state, fho_sta_verbs: payload.fho_sta_verbs }

        case "IS_STEREO":
            return {...state, is_stereo: payload.is_stereo } 

        case "MODALITIES":
            return {...state, modalities: payload.modalities }

        case "MOMENTS_ACTIVITIES":
            return {...state, moments_activities: payload.moments_activities }

        case "NLQ_QUERY_TEMPLATES":
            return {...state, nlq_query_templates: payload.nlq_query_templates }
        
        case "NUM_FRAMES":
            return {...state, num_frames: payload.num_frames }

        case "PHYSICAL_SETTING_NAME":
            return {...state, physical_setting_name: payload.physical_setting_name }

        case "SCENARIOS":
            return {...state, scenarios: payload.scenarios }

        case "SPLIT_AV":
            return {...state, split_av: payload.split_av }

        case "SPLIT_EM":
            return {...state, split_em: payload.split_em }
        
        case "SPLIT_FHO":
            return {...state, split_fho: payload.split_fho }

        case "SPLITS":
            return {...state, splits: payload.splits }

        case "VIDEO_SOURCE":
            return {...state, video_source: payload.video_source }

        case "VQ_OBJECTS":
            return {...state, vq_objects: payload.vq_objects }

        case "CLEAR_FILTER":
            return {...state,
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

        default:
            throw new Error("No Case Found!");
    }
}

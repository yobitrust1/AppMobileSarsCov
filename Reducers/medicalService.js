import { ACTION_TYPES } from "../Actions/medicalService";
const initialState = {
  loggedUser: null,
  message: "" , 
  patientList:[],
  antecedentList:[],
  diagnosticList:[],
  diagnostics:[],
  traitmentList:null,
  evolutionList:null
};

export const medicalService = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEL_ONE_EXAMEN_BIO:
      return {
        ...state,
        patientList: action.payload,
        //message:action.payload
      };
      case ACTION_TYPES.DEL_ONE_EXAMEN_RADIO:
        return {
          ...state,
          patientList: action.payload,
          //message:action.payload
        };
        case ACTION_TYPES.DEL_ONE_CONF_DIAG:
          return {
            ...state,
            patientList: action.payload,
            //message:action.payload
          };
          case ACTION_TYPES.LOGIN:
            return {
              ...state,
              loggedUser: action.payload,
              //message:action.payload
            };
            case ACTION_TYPES.REMOVE_ANTECEDENT_MEDICAL:
      return{
        ...state,
        antecedentList:action.payload
      }
      case ACTION_TYPES.REMOVE_P_ANTECEDENT_MEDICAL:
      return{
        ...state,
        patientList:action.payload
      }

      case ACTION_TYPES.REMOVE_P_INFOS_GENERALES:
      return{
        ...state,
        patientList:action.payload
      }
      case ACTION_TYPES.REMOVE_P_HABITUDES_DE_VIE:
      return{
        ...state,
        patientList:action.payload
      }
      case ACTION_TYPES.REMOVE_P_EXPO_RISQUE:
      return{
        ...state,
        patientList:action.payload
      }
      case ACTION_TYPES.REMOVE_P_CONF_DIAGS:
        return{
          ...state,
          patientList:action.payload
        }
        case ACTION_TYPES.REMOVE_P_EXAM_BIO:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.REMOVE_P_CARAC_CLINIQUES:
            return{
              ...state,
              patientList:action.payload
            }

            case ACTION_TYPES.REMOVE_P_ADMISSIONS:
              return{
                ...state,
                patientList:action.payload
              }

              case ACTION_TYPES.REMOVE_P_EXAMEN_CLI:
                return{
                  ...state,
                  patientList:action.payload
                }
                case ACTION_TYPES.REMOVE_P_EXAM_RADIO_PARA_CLI:
                  return{
                    ...state,
                    patientList:action.payload
                  }
                  case ACTION_TYPES.REMOVE_P_TRAITEMENT:
                  return{
                    ...state,
                    patientList:action.payload
                  }
                  case ACTION_TYPES.REMOVE_P_EVOLUATION_QUO:
                    return{
                      ...state,
                      patientList:action.payload
                    }
                    case ACTION_TYPES.REMOVE_P_EVALUATION_FINALE:
                    return{
                      ...state,
                      patientList:action.payload
                    }
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        loggedUser: action.payload,
        //message:action.payload
      };
      case ACTION_TYPES.LOGOUT:
        return{
          ...state,
          loggedUser:null
      }
      case ACTION_TYPES.ADD_PATIENT:
        return {
          ...state,
          message:action.payload
        }
      case ACTION_TYPES.SEARCH_PATIENT:
        return {
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.HABITUDES_DE_VIE_PATIENT:
        return{
          ...state,
          patientList:action.payload
        }
      
      case ACTION_TYPES.INFOS_GENERALES:
        return{
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.ANTECEDENTS_MEDICAUX:
        return{
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.GET_ALL_ANTECEDENTS_MEDICAUX:
        return{
          ...state,
          antecedentList:action.payload
        }
      
    case ACTION_TYPES.REMOVE_ANTECEDENT_MEDICAL:
      return{
        ...state,
        antecedentList:action.payload
      }
    case ACTION_TYPES.ADD_DIAGNOSTIC:
      return{
        ...state,
        message:action.payload,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.ADD_EXPOSITION:
      return {
        ...state,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.GET_ALL_DIAGNOSTICS:
      return{
        ...state,
        diagnostics:action.payload
      }
    case ACTION_TYPES.SEARCH_DIAGNOSTIC:
      return{
        ...state,
        patientList:action.payload
      }
    case ACTION_TYPES.ADD_CONF_DIAG:
      return {
        ...state,
        patientList:action.payload
      }
      case ACTION_TYPES.ADD_EXAM_BIO:
      return {
        ...state,
        patientList:action.payload
      }
    case ACTION_TYPES.ADD_ADMISSION:
      return {
        ...state,
        patientList:action.payload
      }
    case ACTION_TYPES.ADD_CARAC_CLINIQUES:
      return {
        ...state,
        message:action.payload
      }
    case ACTION_TYPES.ADD_EXAM_RADIO_PARA_CLI:
      return{
        ...state,
        patientList:action.payload
      }

    case ACTION_TYPES.ADD_EVALUATION_FINALE:
      return{
        ...state,
        patientList:action.payload
      }
      case ACTION_TYPES.GET_TRAITMENT:
        return{
          ...state,
          traitmentList:action.payload
        }
      case ACTION_TYPES.ADD_TRAITMENT:
        return {
          ...state
        }
      case ACTION_TYPES.ADD_EVOLUTION:
        return{
          ...state,
         // evolutionList:action.payload
        }
      case ACTION_TYPES.GET_EVOLUTION:
        return {
          ...state,
          evolutionList:action.payload
        }
       
      
    
    default:
      return state;
  }
};        
        
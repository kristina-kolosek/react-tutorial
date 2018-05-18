import * as TYPES from './constants';
import axios from 'axios';


export function restartBuild(build) {
 return dispatch => {
   //https://circleci.com/api/v1.1/recent-builds?circle-token=26cadeb471da9fba8177d46e4ded13f226638e9f&limit=20&offset=5
   //https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/retry?circle-token=:token
   dispatch({
     type: TYPES.RESET_BUILD,
     restarting: true,
     buildNum: build["buildNum"],
     restarted: false
   });
   axios.post(`https://circleci.com/api/v1.1/project/github/${build["username"]}/${build["project"]}/${build["buildNum"]}/retry`, null, {
     params: {
       "circle-token": "26cadeb471da9fba8177d46e4ded13f226638e9f"
     }
   })
   .then((response) => {
     dispatch({
       type: TYPES.RESET_BUILD,
       restarted: true,
       restarting: false
     })
   }).catch((error) => {
     dispatch({
       type: TYPES.RESET_BUILD,
       restarted: true,
       restarting: false
     })
   })
 }
}

export function cancelBuild(build) {
  return dispatch => {
    console.log("cancel " + build["buildNum"])
    axios.post(`https://circleci.com/api/v1.1/project/github/${build["username"]}/${build["project"]}/${build["buildNum"]}/cancel`, null, {
      params: {
         "circle-token": "26cadeb471da9fba8177d46e4ded13f226638e9f"
      }
    }).then((response) => {
      console.log("od")
      dispatch({
        type: TYPES.CANCEL_BUILD,
        restarted: true,
        restarting: false
      })
    }).catch((error) => {
      dispatch({
        type: TYPES.CANCEL_BUILD,
        restarted: true,
        restarting: false
      })
    })
  }
}

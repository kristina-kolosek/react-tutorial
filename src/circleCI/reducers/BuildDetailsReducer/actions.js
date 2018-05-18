import * as TYPES from './constants';
import axios from 'axios';

export function fetchBuild(id) {
 return dispatch => {
   //https://circleci.com/api/v1.1/recent-builds?circle-token=26cadeb471da9fba8177d46e4ded13f226638e9f&limit=20&offset=5
   //dispatch(setLoadingBookState()); // Show a loading spinner
   axios.get(`https://circleci.com/api/v1.1/project/github/secondrotation/channel_advisor/${id}?circle-token=def3839ecb44fa30feba6620930443b95d647222&limit=20&offset=5&filter=completed`).then((response) => {
     //dispatch(doneFetchingBuilds()); // Hide loading spinner
     if(response.status == 200){
       let build = response.data;
       let tempBuild = {
         status: build["status"],
         message: build["all_commit_details"][0]["subject"],
         branch: build["branch"],
         stopTime: build["stop_time"],
         buildNum: build["build_num"],
         vcsType: build["vcs-type"],
         username: build["username"],
         project: build["project"],
       }
       dispatch(setBuild(tempBuild)); // Use a normal function to set the received state
     }


   })
 }
}

function setBuild(data) {
 return { type: TYPES.SET_BUILD, build: data };
}

/*
* Prefix /api for api server
*/
const prefix : string = 'https://jsonplaceholder.typicode.com/';

const Routes = {
  Post:{
    FetchAll:()  => `${prefix}/posts`,
  },
}

export default Routes
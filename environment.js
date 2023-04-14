/*eslint-disable*/
const _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://192.168.1.6:8000', API_KEY: ''},
}

getEnvironment = ()=> {
    
    var platform = getPlatform()
    // ...now return the correct environment
    return _Environments[platform]
}

getPlatform = () =>{
    return 'development';
}

export const Environment = getEnvironment()

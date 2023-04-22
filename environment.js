/*eslint-disable*/
const _Environments = {
    // production:  {BASE_URL: 'https://quizgame-django-zd3x56gwza-uc.a.run.app', API_KEY: ''},
    production:  {BASE_URL: 'https://truepromise.pythonanywhere.com', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://192.168.1.5:8000', API_KEY: ''},
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

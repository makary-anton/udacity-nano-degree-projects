function urlValidation(inputUrl) {
    console.log("::: Running checkForUrl :::", inputUrl);
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
    // test url
    if(urlregex.test(inputUrl)){
        return true
    } else if(!urlregex.test(inputUrl)) {
        return false;
    }
}

export { urlValidation }

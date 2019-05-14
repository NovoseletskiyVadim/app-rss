// Describes server requests

export default class ServerRequests{


    constructor(){

    };


    // FIXME:
    
    serverRequestsNews(urlFromUser){

        let xhrUrl=urlFromUser;

        console.log('xhrUrl='+xhrUrl);

        let xhr=new XMLHttpRequest();

        xhr.open('GET', xhrUrl, true);
        
        xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0');
        xhr.setRequestHeader('Accept', '*/*');
        xhr.setRequestHeader('Access-Control-Allow-Origin',' *');

        xhr.setRequestHeader('Content-Type', 'charset=utf-8');

        // xhr.overrideMimeType('text/xml');

        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var receivedCategoryData = JSON.parse(xhr.responseXML);

                console.table(receivedCategoryData)
        
        
                // for(var i=0;i<receivedCategoryData.length;i++){
        
                //     var tr=tableFreeApi.insertRow(i+1);
                //     var td_0=tr.insertCell(0).innerText=receivedCategoryData[i].author;
                //     var td_1=tr.insertCell(1).innerText=receivedCategoryData[i].category;
                //     var td_2=tr.insertCell(2).innerText=receivedCategoryData[i].quote;
                    
                // }
            }
        }        
    };


    // срабатывает только для "@channel_1" https://itc.ua/feed/
    serverFetchNews(urlFromUser){

        fetch(urlFromUser, {"headers":{"content-type":"application/rss+xml"},"method":"GET","mode":"cors"})
        .then(res=>{console.log(res)})
        .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
      });
    }




};

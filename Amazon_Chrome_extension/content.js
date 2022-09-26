console.log('hit')
let products = document.querySelectorAll(".a-row.sc-list-item.sc-list-item-border.sc-java-remote-feature")
for(i = 0;i<products.length;i++){
    // chrome.runtime.sendMessage(products[i].innerText, function(response) {
    // });    
    let item = {};
    
    let subvals = products[i].innerText.split("\n");
    item.product_title = subvals[0];
    item.price = parseFloat(subvals[subvals.length - 1]);
    //item.product_link = JSON.stringify(products[i].firstElementChild);
    chrome.runtime.sendMessage(item, function(response) {
        //console.log(response);
        if(response == "increase"){
            alert(subvals[0]+" price increased");
        }
        else if(response == "decrease"){
            alert(subvals[0]+" price decreased");
        }
    });   
}


alert("Items from cart scraped");


    // for (i = 0; i < products.length; i++) {
    //     let item = {};
    //     let cleanedUpValues = products[i].innerText.split("\n");
    //     item.product_title = cleanedUpValues[0];    
    //     item.product_by = cleanedUpValues[1]; 
    //     item.product_cost = cleanedUpValues[cleanedUpValues.indexOf('Buy it again')-1];
    //     item.product_link = products[i].firstElementChild.firstElementChild.firstElementChild.href}
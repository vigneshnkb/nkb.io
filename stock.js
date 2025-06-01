var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")
var sortedproductlist = []

function sortproducts() {

    for(count=0;count<productlist.length;count=count+1)
    {
        sortedproductlist[count] = productlist[count].querySelector("p").textContent;
    }
    var i, switching, shouldSwitch;
    switching=true;
    while (switching)
    {
        switching=false;
        for (i = 0; i < (productlist.length - 1); i++) {
            shouldSwitch = false;
            if (sortedproductlist[i] > sortedproductlist[i + 1]) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            var swapvar = sortedproductlist[i];
            sortedproductlist[i] = sortedproductlist[i+1];
            sortedproductlist[i+1] = swapvar;
            switching = true;
        }
           
    }
    for(count=0;count<productlist.length;count=count+1)
    {
        productlist[count].querySelector("p").textContent = sortedproductlist[count];
    }

}
window.onload = sortproducts();

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"

        }
        else{
            productlist[count].style.display="block"
        }
    }

}
)



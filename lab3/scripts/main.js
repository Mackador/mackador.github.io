// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(displayProduct, nutAllergy, lactoseIntolerance, organic) {
    var dp = document.getElementById(displayProduct);
    
    var allergyRestriction = document.getElementById(nutAllergy)
    var lactoseRestriction = document.getElementById(lactoseIntolerance)
    var organicRestriction = document.getElementById(organic)

    // s1 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    dp.innerHTML = "";
    
    // obtain a reduced list of products based on restrictions
    var optionArrayNames = restrictListProductNames(products, allergyRestriction.checked, lactoseRestriction.checked, organicRestriction.checked);
    var optionArrayPrices = restrictListProductPrices(products, allergyRestriction.checked, lactoseRestriction.checked, organicRestriction.checked);
    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>
    
    for (i = 0; i < optionArrayNames.length; i++) {
        var productName = optionArrayNames[i];
        var productPrice = optionArrayPrices[i];
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        dp.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName + " - $" + String(productPrice)));
        dp.appendChild(label);

        // create a breakline node and add in HTML DOM
        dp.appendChild(document.createElement("br"));
    }
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var dC = document.getElementById('displayCart');
    var t = document.getElementById('total');
    dC.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    for (i = 0; i < ele.length; i++) { 
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }
    
    // add paragraph and total price
    dC.appendChild(para);
    t.appendChild(document.createTextNode("The total price is $" + getTotalPrice(chosenProducts)));
    
}

function order() {
    p = document.getElementById("Products");
    c = document.getElementById("Cart");
    pr = document.getElementById("PreferencesAndRestrictions");
    p.innerHTML = "Your order has been placed!"
    c.innerHTML = "";
    pr.innerHTML = "";
}
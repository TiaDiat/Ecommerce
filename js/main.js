// product constructor
function Jordans(name, color, size, price, image) {
	this.name  = name
	this.color = color
	this.size  = size
	this.price = price
	this.image = image
}

// create new products from the product constructor
var jordans1  = new Jordans("Air Jordans 1", "gym red, black-summit white", "8-12", 315, "img/jordans1.jpg")
var jordans2  = new Jordans("Air Jordans 2", "university blue, black-white", "7-8.5", 300, "img/jordans2.jpg")
var jordans3   = new Jordans("Air Jordans 3", "black, fire red-cement grey", "7-13", 250, "img/jordans3.jpg")
var jordans4   = new Jordans("Air Jordans 4", "white, game royal-black", "8.5-11", 270, "img/jordans4.jpg")
var jordans5   = new Jordans("Air Jordans 5", "white, fire red-black", "8.5-12", 340, "img/jordans5.jpg")
var jordans6   = new Jordans("Air Jordans 6", "white, sport blue-black", "7.5-13.5", 280, "img/jordans6.jpg")
var jordans7   = new Jordans("Air Jordans 7", "white, black cardinal-red bronze", "8, 11", 325, "img/jordans7.jpg")
var jordans8   = new Jordans("Air Jordans 8", " white, black-true red", "8-11", 275, "img/jordans8.jpg")
var jordans9   = new Jordans("Air Jordans 9", "medium grey, white-cool grey", "9-12", 385, "img/jordans9.jpg")
var jordans10   = new Jordans("Air Jordans 10", " white, concord-blue lagoon-black", "9.5-11.5", 200, "img/jordans10.jpg")
var jordans11   = new Jordans("Air Jordans 11", "white, university blue", "7-13", 305, "img/jordans11.jpg")
var jordans12   = new Jordans("Air Jordans 12", "black, varsity red", "7-13", 400, "img/jordans12.jpg")
var jordans13   = new Jordans("Air Jordans 13", "white, black-true red", "8-13", 365, "img/jordans13.jpg")

// create an array to add products to
var jordansArray = new Array

// add products to array of products
jordansArray.push(jordans1, jordans2, jordans3, jordans4, jordans5, jordans6, jordans7, jordans8, jordans9, jordans10, jordans11, jordans12, jordans13)

// loop through products array
for(var i = 0; i < jordansArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var colorH4  = document.createElement("h4")
	var sizeH4   = document.createElement("h4")
	var priceH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var jName   = document.createTextNode(jordansArray[i].name)
	var jColor  = document.createTextNode("Color: " + jordansArray[i].color)
	var jSize   = document.createTextNode("Available sizes: " + jordansArray[i].size)
	var jPrice  = document.createTextNode("$" + jordansArray[i].price)
	var jButton = document.createTextNode("ADD TO CART")

	// update source attribute
	image.src = jordansArray[i].image
	image.alt = jordansArray[i].name

	// update class attributes
	image.className = "img-responsive img-fluid"
	btn.className = "btn btn-info btn-lg"
	newItem.className = "col-sm-4"
	// newDiv.className = "jordans jordansNumber" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(jName)
	colorH4.appendChild(jColor)
	sizeH4.appendChild(jSize)
	priceH4.appendChild(jPrice)
	btn.appendChild(jButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="jordans"
	document.getElementById("products").appendChild(newItem)
	}
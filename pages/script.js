var data = {
    "images": [{

       "image1": "../images/im1.jpg",
       "Description":"Stylish Men's Belt",
       "Name":"Brown Colour Belt"
    },  
    {
      "image1": "../images/im2.jpg",
      "Description":"Stylish Men's Belt",
      "Name":"Belt"
   }, 
   {
      "image1": "../images/im3.jpg",
      "Description":"Stylish Leather Belt",
      "Name":"Belt"
   }, 
   {
      "image1": "../images/im4.jpg",
      "Description":"Black Shoes",
      "Name":"Shoes"
   }, 
   {
      "image1": "../images/im5.jpg",
      "Description":"Men's Leather Bag",
      "Name":"Leather Bag"
   }, 
   {
      "image1": "../images/im6.jpg",
      "Description":"Stylish Leather Laptop Bag",
      "Name":"Laptop Bag"
   }, 
   {
      "image1": "../images/im7.jpg",
      "Description":"Women's Hand Bag",
      "Name":"Hand Bag"
   }, 
   {
      "image1": "../images/im8.jpg",
      "Description":"Women's Hand Bag",
      "Name":"Hand Bag"
   }, 
   {
      "image1": "../images/im9.jpg",
      "Description":"Leather Purse",
      "Name":"Purse"
   }, 
   {
      "image1": "../images/img 10.jpg",
      "Description":"College Bag 15 litres bag.",
      "Name":"College Bag"
   }, 
   {
      "image1": "../images/img 11.jpg",
      "Description":"Stylish Leather Shoes for Men.",
      "Name":"Leather Shoe"
   },
   {
      "image1": "../images/img 12.jpg",
      "Description":"Woodland comfort Shoes for Men.",
      "Name":"WoodLand Shoes"
   },
    ]
 };
 data.images.forEach(function(obj) {
    var image = new Image();
    image.src = obj.image1;
    image.width="200";
    let getName = obj.Name;
    let getDesc = obj.Description;
    let name = document.createElement("h1");
    name.innerText=getName;
    let desc = document.createElement("p");
    
    desc.innerText=getDesc;
    document.getElementById("Cards").appendChild(name)
    document.getElementById("Cards").appendChild(image)
    document.getElementById("Cards").appendChild(desc)
 })
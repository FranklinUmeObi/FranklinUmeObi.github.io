//------------------------------------------------------------------------------
//My Variables
//------------------------------------------------------------------------------

let url = "https://jsonplaceholder.typicode.com/posts";
let url2 = "https://jsonplaceholder.typicode.com/posts?userId=1";

let myHeaders = {"Content-type": "application/json; charset=UTF-8"};

let myObject = {title: "foo", body: "bar", userId: 1};
let myObject2 = [
  {title: "king", body: "first", userId: 1},
  {title: "queen", body: "second", userId: 2},
  {title: "jack", body: "third", userId: 3}
];

let optionsForPost = {
  method: "POST",
  body: JSON.stringify(myObject2),
  headers: myHeaders
};

//------------------------------------------------------------------------------
//My Code
//------------------------------------------------------------------------------


GetRequest(url).catch(error => console.error(eror));
PostRequest(url, optionsForPost).catch(error => console.error(eror));

GetRequestManipulating(url).catch(error => console.error(eror));


//------------------------------------------------------------------------------
//Get Request
//------------------------------------------------------------------------------

async function GetRequest(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log("This is a snippet of the data : " + data[1].id);
  return data;
}

//------------------------------------------------------------------------------
//Post Request
//------------------------------------------------------------------------------

async function PostRequest(url, options) {
  const response = await fetch(url, options);
  let data = await response.json();
  console.log(data);
  return data;
}

//------------------------------------------------------------------------------
//Get Request
//------------------------------------------------------------------------------

async function GetRequestManipulating(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let x = data;
  console.log(x);
  return data;
}

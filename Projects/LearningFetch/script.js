
//My Variables
let url = "https://jsonplaceholder.typicode.com/posts";
//let url2 = "https://jsonplaceholder.typicode.com/posts?userId=1"

let optionsForPost = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),
  headers: {"Content-type": "application/json; charset=UTF-8"}
};

//My Code
GetRequest(url).catch(error => console.error(eror));
PostRequest(url, optionsForPost).catch(error => console.error(eror));






//Get Request, data is in var json//orange words are just var names
async function GetRequest(url){
  const response =await fetch(url)
  let data = await response.json()

  console.log("This is the GET request response");
  console.log(data);

  console.log("This is a snippet of that data");
  console.log(data[1]);

  console.log("This is a snippet of that snippet");
  console.log(data[1].id);
  return data;
}

//------------------------------------------------------------------------------
//Post Request

async function PostRequest(url, options){
  const response =await fetch(url, options)
  let data = await response.json()
  console.log("This is the POST request response");
  console.log(data);
  return data
}

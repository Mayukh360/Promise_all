const posts = [
{ title: "Post One", body: "This is Post One", createdAt: new Date().getTime() },
  { title: "Post Two", body: "This is Post Two", createdAt: new Date().getTime() }
];


function getPost() {
setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output += <li></li>;
    });
    document.body.innerHTML=output;
},1000);
}

function createPost(post){
    setTimeout(()=>{
posts.push(post);

    },2000)
}
getPost();
createPost({title : P})
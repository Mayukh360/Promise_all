
const userId = 'Mayukh'; // replace with actual user id
let posts = ["Post 1", "Post 2", "Post 3"]; // replace with actual posts
// Simulating an API request to create a post
function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Post "${post}" created at :${new Date().toLocaleString()}`);
        resolve();
      }, 1000);
    });
  }
  
  // Simulating an API request to update user's last activity time
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`User ${userId} last activity updated`);
        resolve();
      }, 1000);
    });
  }
  
  // Simulating an API request to delete a post
  function deletePost(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Post ${postId} deleted`);
        resolve();
      }, 1000);
    });
  }
  

  
  function updateLastUserActivityTimeWithPostCreation() {
    const newPost = { title: "New Post", body: "This is a new post" };
  
    Promise.all([createPost(newPost), updateLastUserActivityTime(userId)])
      .then(() => {
        // Log all posts and last activity time of the user
        console.log(`User ${userId} posts: ${posts.join(", ")}`);
        console.log(`User ${userId} last activity time: ${new Date().toLocaleString()}`);
  
        // Delete the last post
        const lastPostId = posts.pop();
        return deletePost(lastPostId);
      })
      .then(() => {
        // Log the new set of posts of the user
        console.log(`User ${userId} posts after deletion: ${posts.join(", ")}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  updateLastUserActivityTimeWithPostCreation();
  
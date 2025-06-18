document.getElementById("getUser").addEventListener("click", function () {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("username").innerText = 
        `${user.name.first} ${user.name.last}`;
      document.getElementById("userPic").src = user.picture.medium;
    })
    .catch((error) => console.log("Error:", error));
});

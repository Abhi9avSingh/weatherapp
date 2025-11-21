function loadUsers() {
      document.getElementById("users").innerHTML = "Loading...";
      document.getElementById("error").textContent = "";

      fetch(" https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true")  
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          const list = document.getElementById("users");
          list.innerHTML = ""; // clear old content
          data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            list.appendChild(li);
          });
        })
        .catch(err => {
          document.getElementById("error").textContent = "Error: " + err.message;
          document.getElementById("users").innerHTML = "";
        });}
         
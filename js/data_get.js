fetch("db/database.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("pl_name").innerText = data.pl_name[2]
    })
    .catch(error => {
        document.getElementById("response").innerText = "Falha ao pegar json"
    })
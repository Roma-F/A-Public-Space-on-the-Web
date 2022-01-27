let textFile = document.querySelector("#textFile");
let form  = document.querySelector("form");


form.addEventListener("submit", event => {
    event.preventDefault();
    let a = textFile.textContent;
    fetch("file.txt", {
        method: 'PUT', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        },
        body: JSON.stringify(a) // We send data in JSON format
    })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))

})

    fetch("file.txt", {method: "GET"})
        .then(
            function (response) {
                if (!response.ok) {
                    console.log("error" + response.status);
                }

                response.text().then(data => {
                    textFile.textContent = data;
                    // console.log(textFile.textContent)
                });
                console.log(textFile.textContent)
            }
        )
        .catch(err => {
            if (err) console.log('Fetch Error :-S', err);
        })


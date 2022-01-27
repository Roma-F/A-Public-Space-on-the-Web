let textFile = document.querySelector("#textFile");
let form  = document.querySelector("form");



    fetch("main.html")
        .then(
            function (response) {
                if (!response.ok) {
                    console.log("error" + response.status);
                }

                response.text().then(data => {
                    textFile.textContent = data;
                    console.log(textFile.textContent)



                    form.addEventListener("submit", event => {
                        fetch("main.html", {
                            method: "PUT",
                            body: textFile.textContent

                        })
                            .then(res => res.text().then(data => console.log(data)));
                    })


                });
            }
        )
        .catch(err => {
            if (err) console.log('Fetch Error :-S', err);
        })


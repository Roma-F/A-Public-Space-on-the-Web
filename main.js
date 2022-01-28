let textFile = document.querySelector("#textFile");
let form  = document.querySelector("form");
let fileList = document.querySelector("#fileList");


form.addEventListener("submit", event => {
    event.preventDefault();

    fetch(fileList.value, {
        method: 'PUT',
        body: textFile.value
    })
})



    fetch("/")
        .then(res => res.text().then(files => {
            for(let file of files.split("\n")){
                let option = document.createElement("option");
                option.textContent = file;
                fileList.appendChild(option);
            }
            loadCurrentFile()
        }))

        .catch(err => {
            if (err) console.log('Fetch Error :-S', err);
        })



function loadCurrentFile(){
    fetch(fileList.value).then(res => res.text().then(data => textFile.textContent = data));
}



fileList.addEventListener("change", loadCurrentFile);


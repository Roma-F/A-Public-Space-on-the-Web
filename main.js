
let filelist = document.querySelector("#filelist");
let textarea = document.querySelector("#file");


// Вы можете создать элемент textarea для хранения содержимого редактируемого файла.
// Запрос GET с использованием fetch может получить текущее содержимое файла.
// Вы можете использовать относительные URL-адреса, такие как index.html,
// вместо http://localhost:8000/index.html, чтобы ссылаться на файлы на том же сервере, что и работающий скрипт.

fetch("/main.html")
    .then(res =>{
        textarea.addEventListener("load", ()=> {
            if(res.ok){
                res.text();
            }
        })
    })
    .catch(err => {
        if (err) throw err;
    })




// function request (options, callback) {
//
//     let req = new XMLHttpRequest();
//     req.open(options.method || "GET", options.pathname, true);
//     req.addEventListener("load", function() {
//         if (req.status < 400)
//             callback(null, req.responseText);
//         else
//             callback(new Error("Request failed: " + req.statusText));
//     });
//     req.addEventListener("error", function() {
//         callback(new Error("Network error"));
//     });
//     req.send(options.body || null);
// }


//     fetch(option.pathname, {
//         method: option.method || "GET",
//         body: option.body || null
//     })
//         .then(res => {
//             if(res.ok){
//                 callback(null, res.responseText);
//             } else {
//                 callback(new Error("Request failed" + res.statusText))
//             }
//         })
//
//         .catch(err => {
//             if (err) throw err;
//         })





// request({pathname: "/"}, function(error, files) {
//
//     if (error) throw error;
//
//     files.split("\n").forEach(function(file) {
//         let option = document.createElement("option");
//         option.textContent = file;
//         filelist.appendChild(option);
//     });
//
//     loadCurrentFile();
// });
//
//
// function loadCurrentFile(){
//     request({pathname: filelist.value}, function (error, file){
//         if (error) throw error;
//         textarea.value = file;
//     })
// }

// filelist.addEventListener("change", loadCurrentFile);
//
// function saveFile(){
//     request({
//         pathname: filelist.value,
//         method: "PUT",
//         body: textarea.value
//     }, function (error){
//         if (error) throw error;
//     })
// }

//POST
// sendRequest("POST", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//GET
// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// fetch("main.html")
//     .then(data => {
//         console.log(data);
//     })

// let requestStream = http.request({
//     hostname: "eloquentjavascript.net",
//     path: "/20_node.html",
//     method: "GET",
//     headers: {Accept: "text/html"}
// }, response => {
//     console.log("Server responded with status code",
//         response.statusCode);
// });
// requestStream.end();

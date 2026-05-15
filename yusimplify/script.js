//None of the keyboard inputs work, view raw clicked also doesn't work

let user_in;
let is_formatted = true;
let result = "";


function call_api() {
    user_in = document.getElementById("main_input").value;
    
    if (user_in.trim() === "") {
        alert("You must enter something")
        return
    } else {
        show_loading_screen(); 

        fetch("https://newton.vercel.app/api/v2/simplify/".concat(encodeURIComponent(user_in)))
            .then(response => response.json())
            //.then(data => alert(data.result))
            .then(data => display_result(data.result))
            .catch(error => alert(error));
    }
}


function display_result(ascii_math) {
    result = ascii_math;

    document.getElementById("div1").remove();

    let temp = document.getElementById("result_template");
    let clon = temp.content.cloneNode(true);
    document.body.insertBefore(clon, document.body.children[0]);

    document.getElementById("span").innerText = "`".concat(result).concat("`");

    document.getElementById("anchor").setAttribute("href",location.href);

    MathJax.typesetPromise();

    document.getElementById("view_raw_button").onclick = view_raw_clicked;
}


function update_preview() {
    document.getElementById("preview").innerText = "`".concat(document.getElementById("main_input").value).concat("`");
    MathJax.typesetClear();
    MathJax.typesetPromise();
}


function view_raw_clicked() {
    is_formatted = !is_formatted;
    if (is_formatted) {
        document.getElementById("span").innerText = "`".concat(result).concat("`");
        document.getElementById("view_raw_button").innerText = "view raw";

        MathJax.typesetPromise();
    } else {
        document.getElementById("span").innerText = result;
        document.getElementById("view_raw_button").innerText = "view formatted";
    }

}


function show_loading_screen() {

    //Add here

}


function is_all_blanks(string) {
    is_blankfull = true

    return is_blankfull
}

document.getElementById("submit_button").onclick = call_api;

document.body.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
        call_api();
    }

});

document.getElementById("main_input").addEventListener("keyup", (e) => {
    update_preview();
});
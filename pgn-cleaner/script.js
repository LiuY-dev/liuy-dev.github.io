function clean_and_show(text) {
    if (document.getElementById("comments?").checked) {
        text = remove_comments(text)
    }
    if (document.getElementById("variations?").checked) {
        text = remove_variations(text)
    }


    show_stuff(text)
}


function show_stuff(text) {
    document.getElementById("init_content").remove()
    document.getElementById("clean_button").remove()
    document.getElementById("options").remove()

    let clon = document.getElementById("show_result").content.cloneNode(true);
    document.getElementById("main").appendChild(clon)

    document.getElementById("textout").innerText = text
}


function refresh() {
    window.location.reload();
}


function remove_comments(text) {
    let kill_mode = 0;
    let deathlist = [];

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === "{") {
            kill_mode = kill_mode + 1;
        } else {
            if (text.charAt(i) === "}") {
                kill_mode = kill_mode - 1;
            }
        }
        if (kill_mode > 0 || text.charAt(i) === "}") {
            deathlist.push(i)
        }
    }

    for (let i = deathlist.length - 1; i > -1; i--) {
        text = text.slice(0, deathlist[i]) + text.slice(deathlist[i] + 1)
    }

    return text
}


function remove_variations(text) {
    let kill_mode = 0;
    let deathlist = [];

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === "(") {
            kill_mode = kill_mode + 1;
        } else {
            if (text.charAt(i) === ")") {
                kill_mode = kill_mode - 1;
            }
        }
        if (kill_mode > 0 || text.charAt(i) === ")") {
            deathlist.push(i)
        }
    }

    for (let i = deathlist.length - 1; i > -1; i--) {
        text = text.slice(0, deathlist[i]) + text.slice(deathlist[i] + 1)
    }

    return text
}


function clean_and_show(text) {
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

    kill_mode = 0;
    deathlist = [];

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

    show_stuff(text)
}


function show_stuff(text) {
    document.getElementById("init_content").remove()
    document.getElementById("clean_button").remove()

    let clon = document.getElementById("show_result").content.cloneNode(true);
    document.getElementById("main").appendChild(clon)

    document.getElementById("textout").innerText = text
}

function refresh() {
    window.location.reload();
}
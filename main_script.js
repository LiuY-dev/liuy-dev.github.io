function set_all_empties() {
    const nodeList = document.querySelectorAll(".thumbnail_img");

    for (let i = 0; i < nodeList.length; i++) {
        if (!nodeList[i].getAttribute('src') || nodeList[i].getAttribute('src') === "") {
            nodeList[i].src = "main_res/images/thumbnails/no_thumbnail.png"
        }
    }
}

set_all_empties()

function launch(path) {
    window.open(path, "_blank").focus();
}

function goto(path) {
    window.open(path, "_self");
}
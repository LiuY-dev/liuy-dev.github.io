document.getElementById("input_guide_button").onclick = () => load_content("input_guide_content");
document.getElementById("about_button").onclick = () => load_content("about_content");
document.getElementById("contact_me_button").onclick = () => load_content("contact_me_content");
document.getElementById("other_projects_button").onclick = () => load_content("other_projects_content");


function load_content(content_id) {
    let container = document.getElementById("info-content-box");
    container.innerHTML = ""
    let temp = document.getElementById(content_id);
    let clon = temp.content.cloneNode(true);
    container.appendChild(clon);

    if (content_id === "about_content" || content_id === "input_guide_content") {
        MathJax.typeset()
    }
}
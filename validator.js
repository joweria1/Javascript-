document.getElementById("movie-form").onsubmit = function() {
    let isValid = true;

    let language = document.getElementById("language").value;
    if (language == "none") {
        document.getElementById("err-language").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("err-language").style.display = "none";
    }

    let radioSelected = false;
    let genre = document.getElementsByName("genre");
    for (let i in genre) {
        if (genre[i].checked) {
            radioSelected = true;
            break;
        }
    }

    if (!radioSelected) {
        document.getElementById("err-genre").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("err-genre").style.display = "none";
    }

    return isValid;
}
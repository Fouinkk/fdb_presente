let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".faisal-akhtar").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://www.facebook.com/Le-Fond-Du-Baril-108565799223813/photos/?ref=page_internal&tab=album")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://fouinkk.github.io/msn-window//")
}

document.querySelector(".my-games").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://poki.com/en/g/bubble-trouble?campaign=14726801000&adgroup=128802436698&target=kwd-58224766&location=9000256&creative=547315265407&placement=&gclid=CjwKCAjw8KmLBhB8EiwAQbqNoDSKYkLwr3_upVC5DhZmz8DVAbS0Jxu3gvT-uQAvN5obJbagNIiKfRoClCEQAvD_BwE")
}

document.querySelector(".my-network").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://www.facebook.com/photo/?fbid=27679084886&set=pob.612484886")
}

document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")
}

document.querySelector("textarea").value = "Hey Hustlers!\n\nAvant toute chose, nous tenons à vous mentionner qu'il faut être conscient qu'on est encore en temps de covid et par le fait même limité par des réglementations. Nous avons tout pris en compte afin de vous offrir le party le plus séquel tout en maximisant nos chances de ne pas avoir de problèmes judiciaires.\n\nCeci étant dit, le Party commence ici\n\nConsignes:\n- Afin d'obtenir les informations concernant le party, vous devrez aller sur MSN sporadiquement.\n\n- Toutes les icônes sur le bureau vous donnent un accès à du contenu exclusif.\n\n\nEnjoy\n\n"


dragWindow(document.querySelector(".window"));
function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.querySelector(".title-bar").onmousedown = dragging

    function dragging(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    }

    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

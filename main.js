/*      Hello, i'm your host, Zarashigal. You may call me ash. I shall guide you through this endless maze of fascinating void.     */
/*      This js needs to be clientsidedly injected, which i recommend this extension for:                                           */
/*      https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld                          */

/* First of all, we create a button to open a menu for us~ ^^ */
doorBtn = document.createElement("button")

/* Now we simply change its id so we can refer to it by css and html means. */
doorBtn.setAttribute("id", "doorBtn")
doorBtn.innerHTML = "Unveil~"

/* We create another, which leads to the sitemap i generated. */
sitemapBtn = document.createElement("button")

/* Now we simply change its id so we can refer to it by css and html means, part II. */
sitemapBtn.setAttribute("id", "sitemapBtn")
sitemapBtn.innerHTML = "Sitemap"

/* ----------     Style: Buttons    ---------- */
doorBtn.style = `
	position:fixed;
	left:1px; top:1px;
	background-color:#d2738a; color:#010101;
	padding:10px; margin:10px;
	z-index: 2147483647;
`
sitemapBtn.style = `
	position:fixed;
	left:1px; top:45px;
	background-color:#d2738a; color:#010101;
	padding:10px; margin:10px;
	z-index: 2147483647;
`
/* -------------------------------------------- */

/* We add our buttons to the body element. */
document.body.appendChild(doorBtn)
document.body.appendChild(sitemapBtn)

/* ----------------------------------  Style: Door Page  ------------------------------- */
let styleDoorsPage = `<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
html {
	background: url(https://i.imgur.com/E0hfoPq.gif);background-size:cover;
	font-family:Orbitron;
	background-color:#000000;color:#d2738a;
}
a { background-color:#d2738a !important;color:#000000 !important; }
p { margin:10px }
</style>`
/* ------------------------------------------------------------------------------------- */

/* Initialize linkDB for this origin. */
let linkDB = `<h3>${styleDoorsPage} - Room: ${window.location.href}</h3>`

/* Sift and collect, no door receives neglect! */
let doors = document.querySelectorAll("a")

/* We define its function and purpose, who would've guessed. */
function doorsClick() {
	
	/* Populate paths... */
	if (doors.length > 0) {
	
		/* With rows. :o */
		for (var i = 0; i < doors.length; i++) {
			
			/* Avoid duplicates. */
			if (linkDB.search(doors[i].href.toString()) <= 0) {
				linkDB = `${linkDB}<br > <p>--> Door: <a class="ashLink" href="${doors[i].href.toString()}">${doors[i].href.toString()}</a></p>`
			}
			
		}
	
	}
	
	/* Give out the html. */
	var w = window.open("")
    	w.document.write(`<h3>This terminal is now seized by ash. Here you go, traverse freely~ ^^</h3>\n${linkDB}`)

}

/* doorBtn eventlistener -> onClick */
doorBtn.addEventListener("click", doorsClick)

/* sitemapBtn eventlistener -> onClick */
let sitemapLink = "https://gist.github.com/A-12833248749832/1e953fc5f3bff8aee9da5aabaac145af"
sitemapBtn.addEventListener("click", (e) =>  {window.open(sitemapLink, "_blank")})

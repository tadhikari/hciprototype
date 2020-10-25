function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function setSelectionText() {
	document.getElementById("prof").innerHTML = getUrlParameter("q1");
	document.getElementById("purp").innerHTML = getUrlParameter("q2");
	document.getElementById("tier").innerHTML = getUrlParameter("q3");
}
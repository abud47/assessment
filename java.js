function Function() {
    
if (typeof(Storage) !== "undefined") {
	
	
    localStorage.setItem("username", "Abdulla");
	
    document.getElementById("signin").innerHTML= localStorage.username;
} else {
    document.getElementById("signin").innerHTML="browser not supported";
}
}
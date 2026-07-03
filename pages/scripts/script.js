function handleNext(event) {
    event.preventDefault();
    
    const identifierInput = document.getElementById('identifier').value;
    
    if(identifierInput.trim() !== "") {
        localStorage.removeItem("email");
        localStorage.clear();
        localStorage.setItem("email", `${identifierInput}`);
    }
}

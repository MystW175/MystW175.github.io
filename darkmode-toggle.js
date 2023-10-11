let darkMode = localStorage.getItem("darkMode");


const darkModeToggle = document.querySelector("#darkmode-toggle");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "dark");
};
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};
const toggleSun = () => {
    darkModeToggle.classList.add('fa-sun');
    darkModeToggle.classList.remove('fa-moon');
};
const toggleMoon = () => {
    darkModeToggle.classList.add('fa-moon');
    darkModeToggle.classList.remove('fa-sun');
};
if(darkMode === 'dark'){
    enableDarkMode();
    toggleSun();
}
darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'dark'){
        enableDarkMode();
        toggleSun();
    }
    else{
        disableDarkMode();
        toggleMoon();  
    } 
});

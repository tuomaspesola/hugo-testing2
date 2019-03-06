const lang_selects = [...document.querySelectorAll('.language-select')];
const handleChange = (event) => {
    window.location = event.target.value;
}

lang_selects.map((input) => {
    input.addEventListener('change', handleChange);
})

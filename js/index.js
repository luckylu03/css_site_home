document.querySelector('#contact').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.contact-form-holder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'contact-form.html', true);
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function(){
    let forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
        form.querySelector('button, input[type=button], input[type=submit]').addEventListener('click', function(){
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'roistat.php', true);
            // xhr.setRequestHeader('Content-type', 'text/html; charset=utf-8');

            var data = new FormData();
            form.querySelectorAll('input').forEach(function(input) {
                data.append(input.name, input.value);
            });

            let form_name = form.getAttribute("id");
            data.append('form', form_name);

            xhr.send(data);
            if (xhr.status != 200) {
                console.log('error');
            }
        });
    });
});

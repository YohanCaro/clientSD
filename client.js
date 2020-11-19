getList = function() {
    console.log("Get list")
    fetch('http://localhost:3000/person')
        .then(response => response.json())
        .then(
            data => {
                var panel = document.createElement("div");
                data.list.forEach(element => {
                    var card = document.createElement("h1");
                    card.innerText = element.name + " - " + element.document + " - " + element.profession;
                    panel.appendChild(card)
                });
                var body = document.getElementById("main");
                body.appendChild(panel);
            }
        );
}

sendInfo = function() {
    console.log("Recibiendo datos")
    const $form = document.querySelector('#form')

    const $name = document.querySelector('#name')
    const $doc = document.querySelector('#doc')
    const $p = document.querySelector('#pro')

    var formData = new FormData($form)
    const promise = formData.get('name')
        //promise.then(okCallback, fCallback)

    const name = formData.get('name')
    console.log(formData.get('name'))

    $name.textContent = name

    const doc = formData.get('doc')
    $doc.textContent = doc
    console.log(formData.get('doc'))

    const p = formData.get('pro')
    $p.textContent = p
    console.log(formData.get('pro'))

    var a = '{ "name":"' + name + '", "type": "cedula", "document": "' + doc + '", "profession": "' + pro + '", "brithday": "10-12-98" }'
    var j = JSON.parse(a)
    console.log(JSON.parse(a).name)
    console.log(JSON.parse(a).name)

    fetch('http://localhost:3000/person/add', {
            method: 'POST',
            body: j
        }).then(respuesta => respuesta.json())
        .then(respuesta => console.log(respuesta.name))
}

$(document).ready(function() {
    $("#buttonJquery").click(function() {
        $.ajax({
            url: "http://127.0.0.1:3000/person",
            success: function(result) {
                JSON.parse(result).list.forEach(element => {
                    list.push(element)
                    $("body").append('<h1>' + element.name + " " + element.document + " " + element.profession + '</h1>');
                });
            }
        });
    });
});
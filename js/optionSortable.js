


const lista = document.querySelector('#tecnologias_icons')

Sortable.create(lista, {
    group: {
        name: "tec"
    },
    animation: 300,
    easing: "cubic-bezier(0.64, 0, 0.78, 0)",
    handle: ".tecnologias_card",
    //dragClass: "invisible",
    ghostClass:"invisible",
    store: {
        set: function (sortable) {
            let orden = sortable.toArray();
            localStorage.setItem('tec', orden.join('|'))
        },
        get: function () {
            let orden = localStorage.getItem("tec")
            return orden ? orden.split('|') : []
        }
    }
})
let cv = document.querySelector('#cv')

Sortable.create(cv, {
    group: {
        name: "cv"
    },
    animation: 600,
    easing: "cubic-bezier(0.64, 0, 0.78, 0)",
    dragClass: "invisible",
    chosenClass:"invisible",
    //ghostClass:"invisible",
    store: {
        set: function (sortable) {
            let orden = sortable.toArray();
            localStorage.setItem('cv', orden.join('|'))
        },
        get: function () {
            let orden = localStorage.getItem("cv")
            return orden ? orden.split('|') : []
        }
    },
})

let menu = document.querySelector('#ListaMenu')
Sortable.create(menu, {
    group: {
        name: "menu"
    },
    handle:".fa-grip-lines-vertical",
    animation: 600,
    easing: "cubic-bezier(0.64, 0, 0.78, 0)",
    dragClass: "invisible1",
    //chosenClass:"invisible1",
    ghostClass:"invisible1",
    store: {
        set: function (sortable) {
            let orden = sortable.toArray();
            localStorage.setItem('lista-menu', orden.join('|'))
        },
        get: function () {
            let orden = localStorage.getItem("lista-menu")
            return orden ? orden.split('|') : []
        }
    },
})
let info = document.querySelector('#InfoContacto')
Sortable.create(info, {
    group: {
        name: "info-contacto"
    },
    animation: 600,
    easing: "cubic-bezier(0.64, 0, 0.78, 0)",
    dragClass: "invisible1",
    //chosenClass:"invisible1",
    ghostClass:"invisible1",
    store: {
        set: function (sortable) {
            let orden = sortable.toArray();
            localStorage.setItem('info-contacto', orden.join('|'))
        },
        get: function () {
            let orden = localStorage.getItem("info-contacto")
            return orden ? orden.split('|') : []
        }
    },
})


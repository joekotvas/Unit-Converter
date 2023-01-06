const converter = {
    'init': function() {
        converter.form = document.getElementById('form')
        converter.input = document.getElementById('x')
        converter.btn = document.getElementById('convert-btn')
        converter.xOutputs = [...document.getElementsByClassName('x-output')]
        converter.yOutputs = [...document.getElementsByClassName('y-output')]
        converter.input.addEventListener('change', converter.updateAll)
        converter.btn.addEventListener('click', converter.updateAll)
        converter.form.addEventListener('submit', function(event) {
            converter.updateAll()
            event.preventDefault()
        })
        converter.updateAll()
        converter.input.value = ''
        converter.input.focus()
        converter.input.addEventListener('keypress', function() {
            this.value = numbersOnly(this.value)
        })
        converter.input.addEventListener('keyup', function() {
            this.value = numbersOnly(this.value)
        })
    },
    'updateAll': function() {
        const x = converter.input.value
        for (let i of converter.xOutputs) {
            i.textContent = x
        }
        for (let i of converter.yOutputs) {
            i.textContent = converter.convert(i.getAttribute('data-factor'), x)
        }
    },
    'convert': function(unit, x) {
        return (converter.factors[unit] * x).toFixed(3)
    },
    'factors': {
        'm-ft': 3.28083,
        'ft-m': 1/3.28083,
        'l-gal': 0.26417,
        'gal-l': 1/0.26417,
        'kg-lb': 2.20462,
        'lb-kg': 1/2.20462
    }
}

const numbersOnly = (str) => str.replace(/[^0-9]/ig, '')

document.addEventListener('DOMContentLoaded', function() {
    converter.init()
})
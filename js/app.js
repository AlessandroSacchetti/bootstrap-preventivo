// prelevare i dati del form, calcolare il preventivo e comunicarlo in front end

console.log('my-js')

let btnElement = document.getElementById('formSubmit')
btnElement.addEventListener('click', function(){
    console.log('hello')
    
    //info dal form
    const nameElement = document.getElementById('formName')
    const surnameElement = document.getElementById('formSurname')
    const mailElement = document.getElementById('formMail')
    
    let elementValueName = nameElement.value
    let elementValueSurname = surnameElement.value  
    let elementValueMail = mailElement.value
    //info dalla lista
    var selectElement = document.getElementById('formSelect')
    var selectedIndex = selectElement.selectedIndex
    var selectedOption = selectElement.options[selectedIndex]
    var ordinalSelection = selectedOption.value
    //console.log(elementValueMail, elementValueName, elementValueSurname, ordinalSelection)

    //codici sconto YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
})
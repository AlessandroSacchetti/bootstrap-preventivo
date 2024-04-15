// prelevare i dati del form, calcolare il preventivo e comunicarlo in front end

//console.log('my-js')

let btnElement = document.getElementById('formSubmit')
btnElement.addEventListener('click', function(){
    //console.log('hello')
    
    //info dal form
    const nameElement = document.getElementById('formName')
    const surnameElement = document.getElementById('formSurname')
    const mailElement = document.getElementById('formMail')
    let pricePerHour = 0
    let valueName = nameElement.value
    let valueSurname = surnameElement.value  
    let valueMail = mailElement.value
    //info dalla lista
    var selectElement = document.getElementById('formSelect')
    var selectedIndex = selectElement.selectedIndex
    var selectedOption = selectElement.options[selectedIndex]
    var ordinalSelection = selectedOption.value
    if(ordinalSelection === 'sviluppo backend'){
        //console.log('1')
        pricePerHour = 20.50
    } else if(ordinalSelection === '1'){
        //console.log('2')
        pricePerHour = 15.30
    } else if(ordinalSelection === '2'){
        //console.log('3')
        pricePerHour = 33.60
    }
    let standardPrice = pricePerHour*10

    let discount = 0
    const discountElement = document.getElementById('formDiscount')
    let valueDiscount = discountElement.value
    if(valueDiscount === "YHDNU32"||valueDiscount === "JANJC63"||valueDiscount === "PWKCN25"||valueDiscount === "SJDPO96"||valueDiscount ==="POCIE24"){
        let discount = (standardPrice*25)/100
        //console.log('€' + discountedPrice)
    } else{
        let discount = 0
        window.alert('il preventivo viene calcolato senza applicare sconti perché il codice non è stato inserito o non è valido')
        //console.log('€' + standardPrice)
    }
    let discountedPrice = standardPrice-discount  

    /*DA CONTROLLARE*/
    if(discount != 0){
        document.getElementById('formTotalPrice').innerHTML = '€' + discountedPrice
    } else{
        document.getElementById('formTotalPrice').innerHTML = '€' + standardPrice
    }
})
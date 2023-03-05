function calculateTemp(){
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    //celcius to fahrenheit
    function celToFar(cel){
        let fahrenheit = ((cel * 9 / 5)+32).toFixed(1);
        return fahrenheit;
    }

    //fahrenheit to celcius
    function farToCel(far){
        let celsius = ((far - 32)*5/9).toFixed(1);
        return celsius;
    }

    if(valueTemp == 'cel'){
        document.getElementById("result").innerHTML = celToFar
        (inputTemp) + "&#176; Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML = farToCel
        (inputTemp) + "&#176; Celsius";
    }

}
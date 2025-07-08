
const dropdowns = document.querySelectorAll(".dropdown select");
const btn  = document.querySelector("form button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const refbtn= document.querySelector(".refresh")



function flagUpdate(element) {
    currcode = element.value;
    let Countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${Countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
}

function dorefresh(){
    document.querySelector(".amount input").value = "";
    document.querySelector(".result").innerText = "Your Conversion result will appear here";
    




}
// adding more option to a dropdown currncy list
for (let select of dropdowns) {
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";

        }
        else {

        }
        select.append(newOption);



    }
    select.addEventListener("change", (evt) => {
        flagUpdate(evt.target);
    })


}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amt = document.querySelector(".amount input");
    let amtvalue = amt.value;
    if ( amtvalue < 1) {
        amtvalue = 1;
        amt.value = "1";
    }

    const URL = `https://api.frankfurter.app/latest?amount=${amtvalue}&from=${fromCurr.value}&to=${toCurr.value}`;

    try {
          let response = await fetch(URL);
          let data = await response.json();
          document.querySelector(".result").innerText =  `${amtvalue} ${fromCurr.value} = ${data.rates[toCurr.value]} ${toCurr.value}`;
                                        

    }
    catch (error) {
        console.error("Conversion failed:", error);
        document.querySelector(".result").innerText = "Conversion failed. Try again.";
    }
});
refbtn.addEventListener("click",dorefresh);

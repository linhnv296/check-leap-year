function checkyear1() {
    let yearid = document.getElementById("idcheck").value;
    let year = parseInt(yearid);

    let Devision = year % 4 ==0;
    let isLeapYear = false;
    if (typeof year == "string" || !year){
        document.getElementById("ketqua").innerHTML = "Retype";
    }else {
        if (Devision) {
            let Devision100 = year % 100 == 0;
            if (Devision100) {
                let Devision400 = year % 400 == 0;
                if (Devision400) {
                    isLeapYear = true;
                } else {
                    isLeapYear = false;
                }

            }
        }
        if (isLeapYear) {
            document.getElementById("ketqua").innerHTML = year + " is a  leap year";
        } else {
            document.getElementById("ketqua").innerHTML = year + " is a Not leap year";
        }
    }
}
function checkyear() {
    let yearid = document.getElementById("idcheck").value;
    let year = parseInt(yearid);
    if (typeof year == "string" || !year){
        document.write("ReType");
    }else {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    document.getElementById("ketqua").innerHTML = "is a leap year";
                } else {
                    document.getElementById("ketqua").innerHTML = "is NOT a leap year";
                }
            } else {
                document.getElementById("ketqua").innerHTML = "is a leap year";
            }
        }else {
            document.getElementById("ketqua").innerHTML = "is a Not leap year";
        }
    }
}

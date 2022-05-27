document.getElementById("submit").addEventListener("click", doIt);
function doIt() {
    var listOfInputs = Array.from(document.querySelectorAll("input"));
    var dic = {};
    console.log(listOfInputs);
    for(var i = 0; i<25; i++){
        console.log(listOfInputs[i].id + ": " + listOfInputs[i].value);
        dic[listOfInputs[i].id] = listOfInputs[i].value;
    }
    dic.jobDetail1 = document.getElementById("jobDetail1").value;
    dic.jobDetail2 = document.getElementById("jobDetail2").value;
    dic.jobDetail3 = document.getElementById("jobDetail3").value;
    dic.schoolDetail = document.getElementById("schoolDetail").value;
    dic.school = document.querySelector('input[name="school"]:checked').value;
    console.log(dic.jobDetail2);
    // begHTML = "<html>\n<head>\n<title>Your Resume</title>\n</head>\n<body>\n";
    // bodyHTML = dic;
    // endHTML = "</body>\n</html>";
    var body = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <link rel="stylesheet" href="flyWindow.css">
</head>
<body>
    <div class="address">
        <p class="street">${dic.street}</p>
        <p class="cityState">${dic.city} ${dic.state}, ${dic.zip}</p>
    </div>
    <div class="contact">
        <p class="phone">${dic.phone}</p>
        <p class="email">${dic.email}</p>
    </div>
    <div class="name">
        <p class="l,f">${dic.lName}, ${dic.fName}</p> <!--Make bigger, Black Border Line-->
    </div>
    <div class="education"> <!-- wrap with thin borders-->
        <p class="subhead">--- Education ---</p>
        <p class="schoolName">${dic.schoolName} <span class="forDates">graduated or will graduate on ${dic.graduation}</span> </p>
        <ul>${dic.schoolDetail}</ul>
        <ul>${dic.school}</ul>
    </div>
    <div class="experience"> <!-- wrap with thin borders-->
        <p class="subhead">--- Experience ---</p>
        <p class="job1">${dic.job1} <span class="forDates">from ${dic.start1} to ${dic.end1}</span></p> <!-- No line breaks before for .forDates-->
            <p class="jobDetail">${dic.jobDetail1}</p>
        <p class="job2">${dic.job2} <span class="forDates">from ${dic.start2} to ${dic.end2}</span></p>
            <p class="jobDetail">${dic.jobDetail2}</p>
        <p class="job2">${dic.job3} <span class="forDates">from ${dic.start3} to ${dic.end3}</span></p>
            <p class="jobDetail">${dic.jobDetail3}</p>
    </div>


</body>
</html>
    `
    fly = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    fly.document.write(body);


}

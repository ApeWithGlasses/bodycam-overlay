// Generate the date and time for the bodycam
getFormatedDate = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${year}-${month}-${day}   ${hours}:${minutes}:${seconds}`;
}

// Generate random string for the bodycamID
stringGen = (len) => {
    var text = "";

    var charset = "A0124678";

    for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

// Set the date and time for the bodycam
const bodycamDateTime = document.getElementById("datetime");
const bodycamID = document.getElementById("bodycamID");

// Set the bodycamID
bodycamID.innerHTML = stringGen(7);

// Update the date and time every second
setInterval(() => {
    bodycamDateTime.innerHTML = getFormatedDate();
}, 1000);
console.log("This is popup.js")
const websiteData = [
    {name:"www.randomsite1.com",timeSpent:"3.5 hours"},
    {name:"www.randomsite2.com", timeSpent:"2 hours"}
]

function populateWebsiteList(){
    const websiteList = document.getElementById("website-list")
    websiteData.forEach(website => {
        const li = document.createElement("li")
        li.textContent = `${website.name}: ${website.timeSpent}`;
        websiteList.appendChild(li);
    })
}

function showMoreDetails(){
    //code to display more details when the button is clicked
    console.log("Show more details clicked")
}

populateWebsiteList();

document.getElementById("details-button").addEventListener("click",showMoreDetails)
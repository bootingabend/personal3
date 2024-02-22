fetch("./otherLinks.json")
.then(response => response.json())
.then(myLinks => getLinks(myLinks));

function getLinks(myLinks){
    var display = document.getElementById("myLinks");

    for (let i = 0; i < 5; i++){
        if (otherLinks.myLinks[i].project === newProject) {


        let project = otherLinks.myLinks[i].project;
        let pt1 = otherLinks.myLinks[i].pt1;
        let pt2 = otherLinks.myLinks[i].pt2;
        let pt3 = otherLinks.myLinks[i].pt3;

        // console.log(title);
        // construct the HTML element

        let division = document.createElement("div");

        division.innerHTML = `
        <h3>${project}
        
            ${pt1}
            ${pt2}
            ${pt3}
            `;
        // <img src=${url} />
        // `;
        newProject.appendChild(division);
    }  // end of for
}
}

const Index = require("./index");

const colors = 
{
    green: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "green",
        headerColor: "white",
        photoBorderColor: "white"
    },
    blue: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "blue",
        headerColor: "white" ,
        photoBorderColor: "white"
    },
    red: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "red",
        headerColor: "white",
        photoBorderColor: "white"
    },
    black: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "black",
        headerColor: "white",
        photoBorderColor: "white"
    },
    pink: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "pink",
        headerColor: "white",
        photoBorderColor: "white"
    },
    orange: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "orange",
        headerColor: "white",
        photoBorderColor: "white"
    },
    yellow: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "yellow",
        headerColor: "white",
        photoBorderColor: "white"
    },
    purple: {
        wrapperBackground: "#FFFFFF",
        headerBackground: "purple",
        headerColor: "white",
        photoBorderColor: "white"
    }
           
};

function pdftemplate(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title> Profle Generator </title>
    <style> 
    @page {
        margin: 0;
    }
    *,
    *:: after,
    *:: before {
        box-sizing: border-box;
    }
    html, body {
        padding: 0;
        margin: 0;
    }
    html, body, .wrapper {
        height: 100%;
    }
    .wrapper{
        background-color: ${colors[data.ghcolor].wrapperBackground};
        padding-top: 100px;
    }
    body {
        background-color: white;
        -webkit-print-color-adjust: exact !important;
        font-family: Tahoma, Geneva, sans-serif;
        }
        main {
        background-color: #E9EDEE;
        height: auto;
        padding-top: 30px;
        }
        h1, h2, h3, h4, h5, h6 {
        font-family: Tahoma, Geneva, sans-serif;
        margin: 0;
        }
        h1 {
        font-size: 3em;
        }
        h2 {
        font-size: 2.5em;
        }
        h3 {
        font-size: 2em;
        }
        h4 {
        font-size: 1.5em;
        }
        h5 {
        font-size: 1.3em;
        }
        h6 {
        font-size: 1.2em;
        }
        .photo-header {
        position: relative;
        margin: 0 auto;
        margin-bottom: -50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: ${colors[data.ghcolor].headerBackground};
        color:  ${colors[data.ghcolor].headerColor};
        padding: 10px;
        width: 95%;
        border-radius: 6px;
        }
        .photo-header img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        border: 6px solid ${colors[data.ghcolor].photoBorderColor};
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
        }
        .photo-header h1, .photo-header h2 {
        width: 100%;
        text-align: center;
        }
        .photo-header h1 {
        margin-top: 10px;
        }
        .links-nav {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 1.1em;
        }
        .nav-link {
        display: inline-block;
        margin: 5px 10px;
        }
        .workExp-date {
        font-style: italic;
        font-size: .7em;
        text-align: right;
        margin-top: 10px;
        }
        .container {
        padding: 50px;
        padding-left: 100px;
        padding-right: 100px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          margin-bottom: 20px;
        }
       .col-sm-8 {
           margin-left: 150px;
       }
        }
        .card {
          padding: 20px;
          border-radius: 6px;
          background-color: ${colors[data.ghcolor].headerBackground};
          color: ${colors[data.ghcolor].headerColor};
          margin: 20px;
        }
        
        .col {
        flex: 1;
        text-align: center;
        }
        a, a:hover {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
        }
        @media print { 
         body { 
           zoom: .75; 
         } 
        }
    
    
    </style>
    </head>
    <body>
    <div class="container">
    <div class="main">
       <div class="wrapper">
          <div class = "row photo-header">
          <div class= "col col-sm-8">
            <img src = "${data.profileImg}">
            <h2> ${data.userName} </h3>
            <h3> ${data.fullName}</h3>
            <h5>Currently  @ ${data.company}</h5>
            <div class="row">
              <div class="col">
                <a href="https://www.google.com/maps/search/?api= + ${data.location}"><i class="fas fa-location-arrow"></i><p>${data.location}</p></a>
              </div>
              <div class="col">
                <a href=${data.githubUrl}><i class="fab fa-github-alt"></i><p>GitHub</p></a>
              </div>
              <div class="col">
                <a href=${data.blog}><i class="fas fa-rss"></i><p>Blog</p></a>  
              </div>
            </div>
          </div>
        </div>
        <div class="col jumbotron">
          <h4>${data.userBio}</h4>
            <div class="row">
              <div class = "col ol-sm card">
                  <h5 class ="card-title">Public Repositories</h5>
                  <p class="card-text">${data.repos}</p>
              </div>
              <div class = "col col-sm card">
                  <h5 class ="card-title">Followers</h5>
                  <p class="card-text">${data.followers}</p>
              </div>
            </div>
            <div class="row">                 
              <div class = "col col-sm card">
                  <h5 class ="card-title">Stars</h5>
                  <p class="card-text">${data.stars}</p>             
              </div>
              <div class = "col col-sm card">
                  <h5 class ="card-title">Following</h5>
                  <p class="card-text">${data.following}</p>
              </div>
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 90vh; width: 100%; background: #F7F7F7; -webkit-print-color-adjust: exact;"></div>
    </body>`
}

module.exports = pdftemplate


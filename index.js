const fs = require("fs-extra");
const axios = require("axios");
const inquirer = require ("inquirer");
const generatePDF = require("./pdftemplate.js");
const puppeteer = require('puppeteer');


const prompts =[
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "favColor",
        choices: [
            'green',
            'blue',
            'red',
            'black',
            'pink',
            'orange',
            'yellow',
            'purple',
        ]
    }
]

async function init() {

    const x = await inquirer
    .prompt(prompts)

    .then(async function(userData){
        let ghname = userData.userName;
        let queryUrl = 'https://api.github.com/users/' + ghname;
        axios
        .get(queryUrl).then(async function(response){
            const userInfo = {
                "fullName": response.data.name,
                "userName": response.data.login,
                "profileImg": response.data.avatar_url,
                "location": response.data.location,
                "githubUrl": response.data.html_url,
                "userBio": response.data.bio,
                "stars": response.data.watchers_count,
                "followers": response.data.followers,
                "following": response.data.following,
                "repos": response.data.public_repos,
                "blog": response.data.blog,
                "company": response.data.company,
                "ghcolor": userData.favColor
            }
            await fs.writeFileSync(`./templates/${ghname}.html`, generatePDF(userInfo), function (err) {
                if ((err))
                {
                         console.log(err);
                }            
            })
        })
        return ghname
    })
    return x
}

const pdfGenerator = async (ghname) => {
    const userHTML = `./templates/${ghname}.html`;
    console.log("pup" + userHTML)

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({width: 1050, height: 1050});

    const html = fs.readFileSync(userHTML,"utf-8")

    await page.setContent(html, {
        waitUntil: "networkidle0"
    });

    await page.emulateMedia("screen");

    await page.screenshot({path: `./pngs/${ghname}.png`});

    await page.pdf({
        path: `./generated-pdfs/${ghname}.pdf`,
        format: "A4",
        pageRanges: '1',
        preferCSSPageSize: false, 
        printBackground: true
    })
    await browser.close()
}

const program = async () =>{
    const ghname = await init()
    await pdfGenerator(ghname)
}

program()
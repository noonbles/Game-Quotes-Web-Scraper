//Libraries
let fs  = require('fs')
let { JSDOM } = require('jsdom')

//User Variables
let filePath = "" //Put the absolute file path into this string; leave blank if you want it to be put in the same folder as this script
let fileName = "Output.txt" //Put the desired file name into this string
let webURL = "https://www.gamesradar.com/best-video-game-quotes-all-time/"

//Webscraping Magic
function spitter(arr){
    fs.writeFile(filePath + fileName, arr.reduce((acc, curr) => acc+=(curr + '\n'), ""), err => {if (err) throw err})
}

function sift(dom){
    let list = dom.window.document.querySelectorAll("h2")
    let separator = '\"'
    let arr = []
    for(let v of list.values()){
        str = v.innerHTML
        str = str.substring(str.indexOf(separator), str.lastIndexOf(separator)+1)
        if(str.length > 0)
            arr.push(str)
    }
    return arr
}

JSDOM.fromURL(webURL).then(sift).then(spitter)
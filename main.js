const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){
    if(process.argv.length < 3) {
        console.log("你没有提供网址")
        process.exit(1)
    }
    if(process.argv.length > 3) {
        console.log("你提供了过多参数")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`开始爬取${baseURL}`)
    const pages = await crawlPage(baseURL,baseURL,{})
    printReport(pages)
}
main()

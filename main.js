const { crawlPage } = require('./crawl.js')
const { print } = require('./crawl.js')

async function amain(){
    if(process.argv.length < 3) {
        console.log("no website provided")
        process.exit(1)
    }
    if(process.argv.length > 3) {
        console.log("too many command line args")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`开始爬取${baseURL}`)
    const pages = await crawlPage(baseURL,baseURL,{})
    printReport(pages)
}
main()
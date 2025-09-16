const {crawlPage} = require('./crawl.js')

function main(){
    console.log("从终端输入你要爬取的网站")
    if(process.length.length < 3) {
        console.log("no website provided")
        process.exit(1)
    }
    if(process.argv.length > 3) {
        console.log("too many command line args")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`开始爬取${baseURL}`)
    crawlPage(baseURL)
}
main()
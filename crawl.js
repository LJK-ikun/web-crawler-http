const { url } = require("inspector")
const {JSDOM} = require("jsdom")
const { normalize } = require("path")

//爬取url
async function crawlPage(baseURL,currentURL,pages){
    const baseURLObj = new URL(baseURL)
    const currentURLObj = new URL(currentURL)
    if (baseURLObj.hostname !== currentURLObj.hostname) {
        return pages
    }

    const normalizeCurrentURL = normalizeURL(currentURL)
    if( pages[normalizeCurrentURL] > 0){
        pages[normalizeCurrentURL]++
        return pages
    }

    pages[normalizeCurrentURL] = 1

    console.log(`正在爬取${currentURL}`)

    try {
        const resp = await fetch(currentURL)
        if(resp.status > 399){
            console.log(`fetch请求${currentURL}失败,错误代码是${resp.status}`)
            return pages
        }

        const contentType = resp.headers.get("content-type")
        if (!contentType.includes("text/html")){
            console.log(`内容类型不属于文本HTML,文本类型是${contentType},链接${currentURL}`)
            return pages
        }

        
        const htmlBody = await resp.text()

        const nextURLs = getURLsFromHTML(htmlBody, baseURL)

        for (const nextURL of nextURLs){
            pages = await crawlPage(baseURL,nextURL,pages)
        }
    } catch(err) {
        console.log(`fetch请求失败:${err.message}`)
    }
    return pages
}

//从html中爬取链接
function getURLsFromHTML(htmlBody,baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements){
        if (linkElement.href.slice(0, 1) === '/'){
            // relative
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)
            } catch (err){
                console.log(`error with relative url: ${err.message}`)
            }
        }else {
            //absolute
            try {
                const urlObj = new URL(`${baseURL}`)
                urls.push(urlObj.href)
            } catch (err){
                console.log(`error with relative url: ${err.message}`)
            }
        }
    }
    return urls
}

//测试规范化url
function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}

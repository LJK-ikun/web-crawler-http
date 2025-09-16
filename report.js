function printReport(pages){
    console.log("=========")
    console.log("报告")
    console.log("=========")
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`在网址${url}中找到${hits}个链接`)
    }
    console.log("=========")
    console.log("结束报告")
    console.log("=========")
}

//给pages排序，让出现多的链接出现在前面
function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a,b) => {
        return b[1] - a[1]
    })
    return pagesArr
}

module.exports = {
    sortPages,
    printReport
}

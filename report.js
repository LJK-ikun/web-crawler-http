function sortPages(pages) {
    pagesArr = Object.entries(pages)
    pagesArr.sort((a,b) => {
        return b[1] - a[1]
    })
}

module.exports = {
    sortPages
}
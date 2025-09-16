const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages sorts pages by count in descending order', () => {
    const inputPages = {
        'https://blog.boot.dev/path1': 3,
        'https://blog.boot.dev/path2': 1,
        'https://blog.boot.dev/path3': 2
    }
    const actual = sortPages(inputPages)
    const expected = [
        ['https://blog.boot.dev/path1', 3],
        ['https://blog.boot.dev/path3', 2],
        ['https://blog.boot.dev/path2', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages handles empty pages object', () => {
    const inputPages = {}
    const actual = sortPages(inputPages)
    const expected = []
    expect(actual).toEqual(expected)
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Modules ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")
const fetch = require('node-fetch')
const FormData = require('form-data')
const request = require("request")
const { rest } = require("lodash")

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > h6 > a').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            }),
            resolve(hasil)
        })
    })
}


module.exports = { styletext }

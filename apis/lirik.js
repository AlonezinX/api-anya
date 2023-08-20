const cheerio = require('cheerio')
const axios = require('axios')

const lirikLagu = async (query) => {
const res = await axios.get(`https://www.musixmatch.com/search/${query}`)
const sup = cheerio.load(res.data)
const hasil = []
const b = sup('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
let link = `https://www.musixmatch.com` + sup(b).find('h2 > a').attr('href')

const des = await axios.get(link)

const soup = cheerio.load(des.data)

const result = soup('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()

hasil.push({ result})
return hasil
}

const covid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/country/indonesia/`) 
const $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
kasus = $(a).find('div > span').eq(0).text()
kematian = $(a).find('div > span').eq(1).text() 
sembuh = $(a).find('div > span').eq(2).text() 
hasil.push({ kasus, kematian, sembuh}) 
return hasil
}


module.exports = { lirikLagu, covid }

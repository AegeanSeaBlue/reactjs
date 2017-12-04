const fs = require('fs')
const path = require('path')
const packagejson = fs.readFileSync(
    path.resolve(__dirname, '../package.json')
    , 'utf8')

const json = JSON.parse(packagejson)
const versionArr = json.version.split('-')
json.version = versionArr[0] + '-'+ (parseInt(versionArr[1])+1)

fs.writeFileSync(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(json, null, 2),
    'utf8'
)

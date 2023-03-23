const axios = require('axios');
const cheerio = require('cheerio');


const getTable = async () => {
    try {
        const { data } = await axios.get(
            'https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population'
        );
        const $ = cheerio.load(data);
        let row = [];

        $('table:eq(1)').find('tbody').find('tr').each((_idx, el) => {
            row.push(getChildsInItem(`<table>${$(el).html()}</table>`, 'td'));
        });

        return row;
    } catch (error) {
        throw error;
    }
};


const fs = require('fs');

getTable()
    .then((table) => {
        // let _top10rows = table.slice(0,10);
        table.forEach((row) => {
            const _row = `${row.join(',')}\n`;
            //fs.unlink('listCountries.csv', error => {if (error) {console.log(error)} console.log('file deleted correctly')});
            fs.appendFile('listCountries.csv', _row, error => {if (error) {console.log(error);}});
        });
    });


// const content = 'some content!';
// fs.appendFile('file.log', content, err => {
//     if (err){
//         console.log(err);
//     }
// })

//----------------------------------------------------------

function getChildsInItem(item, tag) {
    const data = cheerio.load(item);
    const elem = data(tag);
    let array = [];
    elem.each((_id, el) => {
        let nor_text = NormalizeString(data(el).text()); 
        array.push(nor_text);
    });
    while(array.length<6) array.push(',');
    return array;
}

function NormalizeString(str) {
    return str.replace('\n', '').replaceAll(',','.');
}
// const cheerio = require('cheerio');
// const $ = cheerio.load(
//     `<ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ul>
//     <ul>
//       <li>Item 3</li>
//       <li>Item 4</li>
//     </ul>`
// );


// let array = getChildsInItem($('ul:eq(1)').html());
// console.log(array);

//console.log(listItems.text());
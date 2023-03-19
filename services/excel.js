const excel = require('exceljs')
const path = require('path')
async function generateExcel(records){
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Masterlist')
    const masterlistCol = [
        {key: 'fullname', header: 'Fullname'},
        {key: 'year', header: 'Year'},
        {key: 'course', header: 'Course'}
    ]

    worksheet.columns = masterlistCol;
    records.forEach(record => {
        worksheet.addRow(record);
    });

    const exportPath = path.join(`${__dirname}/../../digitized`,'masterlist.xlsx')
    await workbook.xlsx.writeFile(exportPath)
    return exportPath
}

module.exports = {
    generateExcel
}


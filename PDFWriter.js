let pdf= require("html-pdf");

class PDFWriter{
    static WritePDF(nome, html){
        pdf.create(html, {}).toFile(nome, (erro) => {});
    }
}

module.exports = PDFWriter;
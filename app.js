let Reader = require("./Reader");
let Writer = require("./Writer");
let Processor = require("./Processor");
let Table = require("./Table");
let HTMLParser = require("./HTMLParser");
let PDFWriter = require("./PDFWriter");

let leitor = new Reader();
let escritor = new Writer();

async function main(){
    let dados = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);
    
    let html = await HTMLParser.Parse(usuarios);

    escritor.Write(Date.now()+".html", html);

    PDFWriter.WritePDF(Date.now()+".pdf", html);
}

main();
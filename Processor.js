class Processor{
    static Process(dados){
        let a = dados.split("\r\n");
        let rows = [];

        a.forEach(row => {
            let array = row.split(",");
            rows.push(array);
        });

        return rows;
    }
}

module.exports = Processor;
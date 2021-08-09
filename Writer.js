const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, dados){
        try{
            await this.writer(filename, dados);
            return true;
        }catch(erro){
            return false;
        }
        
    }
}

module.exports = Writer;
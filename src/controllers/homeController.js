
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

//quy dinh 1 object co cac thuoc tinh
//object : {
//key:''
//value:''
//}
module.exports = {
    getHomePage: getHomePage,
}
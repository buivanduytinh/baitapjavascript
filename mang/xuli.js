var man = [
    {
        id:1,
        name: "QUẦN LỬNG KHAKI",
        code: "21E3031",
        price: "237.000",
        image: src="images/nam1.jpg"
    },
    {
        id:2,
        name: "QUẦN DÀI FIT DÁNG",
        code: "22E3289",
        price: "349.000",
        image: src="images/nam2.jpg"
    },
    {
        id:3,
        name: "QUẦN DÀI FIT DÁNG",
        code: "70E3084",
        price: "417.000",
        image: src="images/nam3.jpg" 
    },
    {
        id:4,
        name: "ÁO THUN TRƠN SLIM FIT",
        code: "57E3464",
        price: "172.500",
        image: src="images/nam4.jpg"
    },
];

var woment = [
    {
        id:1,
        name: "Váy mini tay bồng cổ sóng",
        code: "H511BF3D01242201G4",
        price: "799.000 ",
        image: src="images/nu1.jpg"
    },
    {
        id:2,
        name: "Áo sơ mi cổ đổ",
        code: "H467BF1A04232201H2",
        price: "599.000",
        image: src="images/nu2.jpg"
    },
    {
        id:3,
        name: "Áo sơ mi kẻ xanh",
        code: "H473BF1A04237301H2",
        price: "549.000",
        image: src="images/nu3.jpg" 
    },
    {
        id:4,
        name: "Chân váy bút chì",
        code: "H472BF2C14234302G4",
        price: "549.500",
        image: src="images/nu4.jpg"
    },
];

function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}
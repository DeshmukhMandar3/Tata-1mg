let strip=document.querySelector(".product-container");

let pop=[
    {name:"Diabetes Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/nnz4wznqh3g1momlj7i6.png"},
    {name:"Nutritional Drinks",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f5ia7m5vbslwnysrnouz.png"},
    {name:"Healthcare Devices",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/yom4kujhcrmswwa7yqql.png"},
    {name:"Homeopathy",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sjjktxvuqn3hgdf1zthz.png"},
    {name:"Sexual Wellness",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/mxhslzet9tgwmmginf0x.png"},
    {name:"Skin Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/he8w8sxhmm2la752zjt2.png"},
    {name:"Vitamins & Supplements",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xph6jwm1rkm53jytua1e.png"},
    {name:"Pain Relief",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/wxg1pt1dugbbmqk2hfhu.png"},
    {name:"Ayurveda",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bihah6g7bf8dgwbbe3hc.png"},
]

displaySlider(pop,strip);
function displaySlider(data,n){
data.forEach(function(el){
    let inner=document.createElement("div");
    let im=document.createElement("img");
    let tag=document.createElement("p");
    inner.setAttribute("class","product-card");
    im.src=el.image;
    tag.innerText=el.name;
    inner.append(im,tag);
    n.append(inner); 
})
}

// lab test card
let fullbody=document.querySelector("#fbc");

let test=[
    {name:"Comprehensive Full Body Checkup",
    price:2000,
    strikeoff:4198,},
    {name:"Fever Pakage Extensive",
    price:999,
    strikeoff:1689,},
    {name:"Comprehensive Silver Full Body Checkup",
    price:1699,
    strikeoff:3098,},
    {name:"Good Health Gold Package",
    price:949,
    strikeoff:1898,},
    {name:"Comprehensive Platinum Full Body Checkup",
    price:3499,
    strikeoff:4998,},
    {name:"Monsoon Health Screening",
    price:1299,
    strikeoff:2598,},
    {name:"Women Wellness Premium Package",
    price:1799,
    strikeoff:2598,},
    {name:"Women Wellness Advanced Package",
    price:1499,
    strikeoff:2998,}
]

test.forEach(function(el){
let outn=document.createElement("div");
    outn.setAttribute("class","name")
    let names=document.createElement("h5");
    names.innerText=el.name;
    let imgs=document.createElement("img");
    imgs.src="https://onemg.gumlet.io/safe_bjisiz.svg";
    outn.append(names,imgs);

let test=document.createElement("p");
    test.innerText="Included 40 Tests";

let noname=document.createElement("div");
noname.setAttribute("class","imstar")
    
let tata=document.createElement("img");
tata.setAttribute("class","tata")
tata.src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto";
    
let star=document.createElement("div");
star.setAttribute("class","star");
     let rat=document.createElement("p");
     rat.innerText=4.9;
     let font=document.createElement("i");
     font.setAttribute("class","fa-solid fa-star");
     star.append(rat,font);
noname.append(tata,star);

let pri=document.createElement("div");
pri.setAttribute("class","price"); 
     let sp=document.createElement("p");
     sp.innerText="Rs "+el.price;
     let mp=document.createElement("p");
     mp.innerText="Rs "+el.strikeoff;
     pri.append(sp,mp);

let disc=document.createElement("div");
disc.setAttribute("class","disc");
    let per=document.createElement("p");
    let fp=+(el.price);
    let ip=+(el.strikeoff);
    let discount=((ip-fp)/ip)*100;
    discount=discount.toFixed(0);
    per.innerText=discount+"%Off";
    disc.append(per);

let out=document.createElement("div");
out.setAttribute("class","box");
out.append(outn,test,noname,pri,disc);

fullbody.append(out);
    
})

let febrand=[
    {name:"Dabur",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/356169c2-4ad9-479d-890d-5518a8f408f7.png"},
    {name:"HealthVit",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e2cbdd9-57a3-49e2-b894-36351054880f.png"},
    {name:"Dr. Morepen",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/aaa6cf9d-7f16-41f4-9e88-f15b581fd329.png"},
    {name:"Protinex",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3e37b933-eb39-4af2-8cbc-5ae50709d9de.png"},
    {name:"Mamaearth",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8cbfa438-f050-449e-9126-65f8025f84a5.png"},
    {name:"Vicks",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c6c5cf0e-01d2-4626-a3a8-ed2530dc94ea.jpg"},
    {name:"Optimum Nutrition",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/52abeeb0-84c6-48ae-85f0-2c409cb11a84.jpg"},
    {name:"Dr.Vaidya's",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c5c3021a-246e-4446-8e95-08a9fa182291.png"},
    {name:"Kapiva Ayurveda",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/01a03b5e-a32b-409b-8cc4-fd6d1cb64594.png"}
];
let bc=document.querySelector(".bc");
displaySlider(febrand,bc);

// Pathology Tests
let pt=[
    {name:"Complete Blood Count",
     test:"CBP",
     lab:"Provided By 4 Labs",
     MRP:299,
     strikeoff:400},

     {name:"Dengur NS 1 Antigen",
     test:"NS 1 Antigen Test",
     lab:"Provided By 4 Labs",
     MRP:599,},

     {name:"Thyroid profile Total",
     test:"Thyroid Function Test, TFT",
     lab:"Provided By 4 Labs",
     MRP:220,
     strikeoff:600},

     {name:"Lipid Profile",
     test:"Thyroid Function Test, TFT",
     lab:"Provided By 4 Labs",
     MRP:220,
     strikeoff:600},

     {name:"Diabeted Screening",
     test:"Diabetes Panel, Basic(HbA1c, Sugar)",
     lab:"Provided By 4 Labs",
     MRP:220,
     strikeoff:600},

     {name:"Vitamin Profile",
     test:"Multivitamins",
     lab:"Provided By 3 Labs",
     MRP:1220,
     strikeoff:2158},

     {name:"Glycosylated Hemoglobin",
     test:"Glycated Haemoglobin",
     lab:"Provided By 4 Labs",
     MRP:399,
     strikeoff:659},

     {name:"Liver Fuction Test",
     test:"Hepatic Fuction Test",
     lab:"Provided By 4 Labs",
     MRP:220,
     strikeoff:675},

     {name:"Kidney Fuction Test",
     test:"Renal Fuction Test",
     lab:"Provided By 3 Labs",
     MRP:220,
     strikeoff:680},

     {name:"Vitamin D (25-OH)",
     test:"25-Hydroxy Cholecalciferol",
     lab:"Provided By 4 Labs",
     MRP:349,
     strikeoff:1749}
];
let ticket=document.querySelector(".pt");
pt.forEach(function(el){
    let outn=document.createElement("div");
    outn.setAttribute("class","safename")
    let names=document.createElement("h5");
    names.innerText=el.name;
    let imgs=document.createElement("img");
    imgs.src="https://onemg.gumlet.io/safe_bjisiz.svg";
    outn.append(names,imgs);

    let type=document.createElement("p");
    type.innerText=el.test;

    let pro=document.createElement("p");
    pro.innerText=el.lab;

    let pri=document.createElement("div");
pri.setAttribute("class","cost"); 
     let sp=document.createElement("p");
     sp.innerText="Rs "+el.MRP;
     if(el.strikeoff!=undefined){
     let mp=document.createElement("p");
     mp.innerText="Rs "+el.strikeoff;
    
let disc=document.createElement("div");
disc.setAttribute("class","disc");
    let per=document.createElement("p");
    let fp=+(el.MRP);
    let ip=+(el.strikeoff);
    let discount=((ip-fp)/ip)*100;
    discount=discount.toFixed(0);
    per.innerText=discount+"%Off";
    pri.append(sp,mp,per);}

    else{
        pri.append(sp);
    }

let inner=document.createElement("div");
    inner.append(outn,type,pro,pri);
    ticket.append(inner);
});

let ts=[
   {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/d8c5f966d7da452c9b81c742474d45b6.jpg",
    name:"Ensure Vanilla Powder Refill",
    content:"box of 1kg Powder",
    MRP:1300,
    sp:1222},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/822a9692e491406d9addcb95003115cd.jpg",
    name:"Ensure Chocolate Powder Refill",
    content:"box of 400gm Powder",
    MRP:645,
    sp:600},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e9wq9lditpjyyedleyqa.jpg",
    name:"Ensure High Protein Powder Refill",
    content:"box of 400gm Powder",
    MRP:680,
    sp:639},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tiidy63h42v68x6qnx4d.jpg",
    name:"Ensure Diabetes Care Chocolate Powder",
    content:"box of 400gm Powder",
    MRP:710,
    sp:632},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tskslmlkodoo2pdrgu7l.jpg",
    name:"Ensure Diabetes Care Vanilla Delight",
    content:"box of 400gm Powder",
    MRP:710,
    sp:660},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4686ff75873146018e4abfa9c421c4d5.jpg",
    name:"Ensure Vanilla Powder",
    content:"box of 2kg Powder",
    MRP:2300,
    sp:2185},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uv3wagnasob4pv7o5uh9.jpg",
    name:"Ensure High Protein Powder",
    content:"box of 400gm Powder",
    MRP:680,
    sp:634},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/62cc558e7b1943fe96df193d0138fffc.jpg",
    name:"Ensure Vanilla Powder",
    content:"jar of 400gm Powder",
    MRP:650,
    sp:571},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/k2fae1prhet1zbpkooca.jpg",
    name:"Ensure Plus Vanilla Powder",
    content:"jar of 400gm Powder",
    MRP:750,
    sp:708}
];
let pro=document.querySelector(".ts");
displayProducts(ts,pro)
function displayProducts(data,out){
    data.forEach(function(el){
    let card=document.createElement("div");
        card.setAttribute("class","card");

    let pic=document.createElement("img");
        pic.setAttribute("class","picture");
        pic.src=el.image;

    let name=document.createElement("h5");
        name.innerText=el.name;

    let cont=document.createElement("p");
        cont.innerText=el.content;

    let box1=document.createElement("div");
        let MRP=document.createElement("p");
        MRP.innerText="MRP Rs "+el.MRP;
        
        let mp=+(el.MRP);
        let sp=+(el.sp);
        let discount=((mp-sp)/mp)*100;
        discount=discount.toFixed(0)+"%Off";
        let dis=document.createElement("p");
        dis.innerText=discount;
        box1.append(MRP,dis);
    
    let box2=document.createElement("div");
        let sell=document.createElement("h5");
        sell.innerText="Rs "+el.sp;
        let cart=document.createElement("button");
        cart.innerText="Add to Cart";
        box2.append(sell,cart);    
    
    card.append(pic,name,cont,box1,box2);

    out.append(card);
    })
}


// Shop by Health
let sbh=[
    {name:"Diabetes Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e3katuw3w1qdfiv0cbjn.png"},
    {name:"Cardiac Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bal76mxxccyhrti2erkn.png"},
    {name:"Stomach Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/l2zrxcsfyguccggnkp4m.png"},
    {name:"Liver Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/klrkvhzloqbyt6z8cvgv.png"},
    {name:"Bone, Joint & Muscle Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zd1jcixlqcmxlxlmgitc.png"},
    {name:"Kidney Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c0o3w8wdjnzesk2pshcr.png"},  
    {name:"Pain Relief",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/vsyneobahnsdqzllvzuv.png"},  
    {name:"Respiratory Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/wgixpbxnlrd79lzhpsi3.png"},
    {name:"Eye Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/laztovaqkws3bo1ywff0.png"}
]
let hc=document.querySelector(".hc");
displaySlider(sbh,hc);

// Popular Combo Deals

let deals=[
    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qb28shpydallvrjqumup.jpg",
    name:"Pain Relief Combo of Healththotokri",
    content:"combo pack of 2 Packs",
    MRP:820,
    sp:459},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/se3cxo2mvzgqmtogtmof.jpg",
    name:"Dettol Disinfection Combo",
    content:"combo pack of 2 bottle",
    MRP:352,
    sp:305},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg",
    name:"Anti-oxidants Combo of Organic",
    content:"combo pack of 2 Packs",
    MRP:669,
    sp:581},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
    name:"TATA 1mg Diabetes Care Combo Pack",
    content:"combo pack of 4 bottle",
    MRP:1580,
    sp:681},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kig1l1egf5xcijweblix.jpg",
    name:"Durex Pleasure Pack",
    content:"combo pack of 4 Packs",
    MRP:989,
    sp:785},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pfqnfyojsqwtn6hrce32.jpg",
    name:"Combo Pack of Sri Sri Tattva Tulasi arka",
    content:"combo pack of 2 bottles",
    MRP:435,
    sp:212},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tamf9xnrq7ncapgc04t6.jpg",
    name:"Tata 1mg Women Care Combo Pack",
    content:"combo pack of 4 bottles",
    MRP:1695,
    sp:839},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
    name:"Immunity Care Combo of 1mg Panch Tulsi",
    content:"combo pack of 2 Packs",
    MRP:335,
    sp:278},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f9fbe0c6e4ae496c8876affeb25590a0.jpg",
    name:"Combo Pack of HealthKart",
    content:"box of 2 Combo Packs",
    MRP:1349,
    sp:674}
]

let pc=document.querySelector(".pc");
displayProducts(deals,pc);

// Signup popup
let signup=document.querySelector(".signup");
function signpop(){
    signup.classList.add("si-popup");
    loginp.classList.remove("pop");
}

// Signup Submit
let form=document.querySelector("#signup");
form.addEventListener("submit",sisub);

let signdata=JSON.parse(localStorage.getItem("signupdata")) || [];
function sisub(event){
     event.preventDefault();
     let em=form.mail.value;
     let pas=form.pass.value;
     let obj={
        email:em,
        pass:pas,
     }
     if(form.first.value=="" || form.last.value=="" || form.mail.value=="" || form.pass.value==""){
        alert("Please fill all the details");
        console.log("Please fill all the details");
     }
     else{
    signdata.push(obj);
    localStorage.setItem("signupdata",JSON.stringify(signdata));
    form.first.value="" 
    form.last.value=""
    form.mail.value="" 
    form.pass.value=""
    signup.classList.remove("si-popup")}    
}

// Login popup
let loginp=document.querySelector(".login");
function logpop(){
    loginp.classList.add("pop");
    signup.classList.remove("si-popup");
}

// login data
let logindata=document.querySelector("#lform");
logindata.addEventListener("submit",login)

let Logsuccess=document.querySelector(".LS");

function login(event){
    event.preventDefault();
    let flag=false;
    signdata.forEach(function(el){
        if(logindata.lmail.value==el.email && logindata.lpass.value==el.pass){
            Logsuccess.classList.add("pop");
            flag=true;
            loginp.classList.remove("pop");
            logindata.lmail.value="";
            logindata.lpass.value="";
        }
    })
    if(!flag){
        alert("Wrong Email Id or Password");
    }
}

function closeLS(){
    Logsuccess.classList.remove("pop");
}


function closeall(){
    loginp.classList.remove("pop");
    signup.classList.remove("si-popup");
    console.log("a");
    
}

function opencart(){
    window.open("cart.html");
}
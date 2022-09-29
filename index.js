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

// lab test carda
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
     MRP:599,}
]
let ticket=document.querySelector(".pt");
pt.forEach(function(el){
    let outn=document.createElement("div");
    outn.setAttribute("class","namesafe")
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
pri.setAttribute("class","price"); 
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
})
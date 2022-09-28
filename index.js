let strip=document.querySelector("#pd");

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

pop.forEach(function(el){
    let inner=document.createElement("div");
    let im=document.createElement("img");
    let tag=document.createElement("p");
    im.src=el.image;
    tag.innerText=el.name;
    inner.append(im,tag);
    document.querySelector("#pd").append(inner); 
})
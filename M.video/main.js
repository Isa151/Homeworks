
let con = document.createElement("div")

let hits = document.createElement("div")

let products = document.createElement("div")

let pr = document.createElement("div")

let promoCode = document.createElement("div")

let p = document.createElement("p")

let tele = document.createElement("img")

let h4 = document.createElement("h4")

let otziv = document.createElement("p")

let h1 = document.createElement("h1")

let cash = document.createElement("p")

let prBtn  = document.createElement("div")

let  btn = document.createElement("button")

let buy = document.createElement("img")

let prImg = document.createElement("div")

let heart = document.createElement("img")

let chart = document.createElement("img")


con.classList.add("container")

hits.classList.add("hits")

pr.classList.add("pr")

products.classList.add("products")

promoCode.classList.add("proomo_code")


p.innerHTML = "-1000₽ по промокоду"

tele.innerHTML =  src="./img/tele.jpg"

h4.innerHTML = "Телевизор Toshiba 50C350LE"


otziv.innerHTML = "57 отзывов"

h1.innerHTML = "1 999 ₽"


cash.classList.add("cash_back")

prBtn.classList.add("btn")

btn.classList.add("pr_btn")

buy.innerHTML = src = "./img/buy.png"


prImg.classList.add("pr_img")

heart.innerHTML = src="./img/8666647_heart_icon.png"

chart.innerHTML = src="./img/chart.png"


let body = document.body

body.append(con)

con.append(hits)

hits.append(h1 , products )

pr.append(promoCode, tele , otziv, h1, cash , prBtn )



promoCode.append(p)

prBtn.append(btn, prImg)

btn.append(buy)

prImg.append(heart, chart)






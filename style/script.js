const starCount = window.innerWidth < 600 ? 80 : 200;
for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";
    star.style.opacity = Math.random();
    document.body.appendChild(star);
}

const lanternImages = [];
for (let i = 1; i <= 9; i++) lanternImages.push(`./style/img/lantern/ld (${i}).png`);

const messages = [
    { text: "Mẹ là nguồn cảm hứng và sức mạnh của gia đình. Ngày hôm nay, ngày Phụ nữ Việt Nam 20/10, con chúc mẹ luôn tự tin và mãi xinh đẹp mẹ nhé!", img: "./style/img/Anh (1).jpg" },
    { text: "Em gái thân yêu của anh! Chúc em gái luôn thành công, hạnh phúc, tự tin yêu đời và có một ngày 20/10 thật ý nghĩa", img: "./style/img/Anh (2).jpg" },
    { text: "Chị yêu thương của em ơi, chúc mừng Ngày Phụ nữ Việt Nam! Chị mãi là nguồn động viên và niềm tự hào của gia đình. Em chúc chị luôn hạnh phúc và thành công trong mọi lĩnh vực cuộc sống nhé!", img: "./style/img/Anh (3).jpg" },
    { text: "Ngày 20/10 đã đến, mong rằng tình yêu thương và lòng biết ơn từ học trò sẽ làm cô luôn cảm thấy ấm áp và mang lại nhiều niềm vui, là động lực cho cô trên con đường truyền đạt kiến thức", img: "./style/img/Anh (4).jpg" },
    { text: "Nhân ngày Phụ nữ Việt Nam 20/10, tôi xin chúc các chị em đồng nghiệp mãi xinh đẹp, giỏi việc nước, đảm việc nhà và hăng hái trong mọi cuộc chơi", img: "./style/img/Anh (5).jpg" }, 
    { text: "Với tất cả tình yêu thương và quan tâm của anh, chúc cho vợ yêu quý luôn tỏa sáng như mặt trời, luôn ấm áp và rạng ngời", img: "./style/img/Anh (6).jpg" }, 
    { text: "Chúc chị em luôn thành công, hạnh phúc, tự tin yêu đời và có một ngày 20/10 thật ý nghĩa", img: "https://i.pinimg.com/originals/4d/12/8a/4d128a99356118490b18579e025335af.gif" }, 
    { text: "Chúc chị em luôn thành công, hạnh phúc, tự tin yêu đời và có một ngày 20/10 thật ý nghĩa", img: "https://i.pinimg.com/originals/63/fc/a1/63fca161c326d19194025a8b747951ad.gif" }, 
    { text: "Mẹ là nguồn cảm hứng và sức mạnh của gia đình. Ngày hôm nay, ngày Phụ nữ Việt Nam 20/10, con chúc mẹ luôn tự tin và mãi xinh đẹp mẹ nhé!", img: "https://1.bp.blogspot.com/-2MInP1REQh8/XWCNsIUaglI/AAAAAAAAPm0/XyBoNNDclrASfWfY2rmlJwmkf9gBL3awwCLcBGAs/s400/h%25E1%25BB%2593ng%2B%25C4%2591%25E1%25BB%258F%2Btr%25E1%25BA%25AFng.gif" }, 
    { text: "Mẹ yêu! Nhân ngày 20/10, con xin chúc mẹ luôn gặp nhiều may mắn, mạnh khỏe, trẻ đẹp và luôn luôn yêu đời.", img: "https://i.pinimg.com/originals/3c/c6/53/3cc653f3e18e266c218ff9d0d9f647b3.gif" }, 
    { text: "Chúc chị em luôn thành công, hạnh phúc, tự tin yêu đời và có một ngày 20/10 thật ý nghĩa", img: "https://i.pinimg.com/originals/23/30/12/233012cc4c5a106de39346da792a0963.gif" }, 
    { text: "Chúc chị em luôn thành công, hạnh phúc, tự tin yêu đời và có một ngày 20/10 thật ý nghĩa", img: "https://4.bp.blogspot.com/-rG_3k2eGIRY/WXF9yXfYerI/AAAAAAAAPBo/qkUWiTnOu0YQ-RapdniGyrAFVk0pWI2oQCLcBGAs/s1600/unnamed%2B%25282%2529.gif" }
];

const lanternsContainer = document.getElementById("lanternsContainer");
let maxLanterns = window.innerWidth < 600 ? 15 : 30;
let lanternInterval = null;

function createLantern() {
    if (lanternsContainer.querySelectorAll(".lantern").length >= maxLanterns) return;

    let lantern = document.createElement("img");
    lantern.src = lanternImages[Math.floor(Math.random() * lanternImages.length)];
    lantern.className = "lantern";

    // Giới hạn lantern không tràn màn hình
    let startX = Math.random() * 85; // 0% -> 85%
    lantern.style.left = startX + "vw";

    // random horizontal drift
    let driftX = (Math.random() - 0.5) * 50; // ±25vw
    lantern.style.setProperty('--x', driftX + 'vw');

    let duration = 10 + Math.random() * 10;
    lantern.style.animationDuration = duration + "s";

    lantern.addEventListener("click", () => {
    let randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("popupText").innerText = randomMsg.text;
    document.getElementById("popupImg").src = randomMsg.img;
    document.getElementById("popup").classList.add("show");
    document.getElementById("overlay").classList.add("show");
    });

    lanternsContainer.appendChild(lantern);
    lantern.addEventListener("animationend", () => lantern.remove());
}

const song = document.getElementById("bgMusic");
document.getElementById("releaseBtn").addEventListener("click", () => {
    if (!lanternInterval) {
    song.currentTime = 57;
    song.play();
    lanternInterval = setInterval(() => {
        let count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) createLantern();
    }, 1200);
    document.getElementById("releaseBtn").style.display = "none";
    }
});

function closePopup() {
    document.getElementById("popup").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
}
document.getElementById("overlay").addEventListener("click", closePopup);
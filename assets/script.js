setTimeout(() => {
    document.querySelector(".scroll-indicator").classList.add("show");
}, 1500); // 延时 1.5 秒后显示

// 动画分字
const title = document.querySelector("#title");
title.innerHTML = title.textContent.replace(/\S/g, "<span>$&</span>").replace(/\s/g, "<span> </span>");
let delay = 0;
document.querySelectorAll("#title span").forEach((span, index) => {
    delay += 0.1;
    if (index === 6) delay += 0.3;
    span.style.setProperty("--delay", `${delay}s`);
});

// 延迟显示口号
setTimeout(() => {
    const quote = document.getElementById("quote");
    quote.style.opacity = 1;
    quote.style.transform = "scale(1)";
    quote.style.animation = "fadeZoomIn 1s ease";
}, 2800);

// 动态年份
document.querySelector('.copy').textContent = document.querySelector('.copy').textContent.replace('%year%', new Date().getFullYear());

// 卡片遮罩内容逻辑
document.querySelectorAll('.card').forEach(card => {
    const overlay = card.querySelector('.overlay');
    const original = card.querySelector('.card-text');
    overlay.innerHTML = '';

    const clone = original.cloneNode(true);
    // 对每个 <p> 和 <h3> 内容进行分词包裹
    clone.querySelectorAll("p, h3").forEach(el => {
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
    });
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '30px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = () => overlay.style.opacity = '0';

    clone.classList.add('overlay-content');
    overlay.appendChild(clone);
    overlay.appendChild(closeBtn);
});

document.querySelectorAll('.card-content').forEach(container => {
    container.addEventListener('click', (e) => {
        if (!e.target.closest('.close-btn')) {
            container.querySelector('.overlay').style.opacity = '1';
        }
    });
});

// 修复后的克隆逻辑
document.querySelectorAll('.card').forEach(card => {
    const overlay = card.querySelector('.overlay');
    const originalContent = card.querySelector('.card-text').cloneNode(true);

    // 清除可能存在的重复内容
    overlay.innerHTML = '';

    // 仅克隆必要元素
    const title = originalContent.querySelector('h3').cloneNode(true);
    const text = originalContent.querySelector('p').cloneNode(true);

    // 创建新的覆盖层容器
    const overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    overlayContent.append(title, text);

    overlay.appendChild(overlayContent);
});

// 自动生成覆盖层内容
document.querySelectorAll('.card').forEach(card => {
    const overlay = card.querySelector('.overlay');
    const title = card.querySelector('h3').cloneNode(true);
    const text = card.querySelector('.cardtext').cloneNode(true);

    overlay.appendChild(title);
    overlay.appendChild(text);
});

const title = document.querySelector("#title");
title.innerHTML = title.textContent
    .replace(/\S/g, "<span>$&</span>")
    .replace(/\s/g, "<span> </span>");
let delay = 0;
document.querySelectorAll("#title span").forEach((span, index) => {
    delay += 0.1;

    if (index === 6) delay += 0.3;

    span.style.setProperty("--delay", `${delay}s`);
});

title.addEventListener("animationend", (e) => {
    if (e.target === document.querySelector("#title span:last-child")) {
        title.classList.add("ended");
    }
});
//-------------------------------------Hiden Cards-------------------------------------------------------
document.getElementById('switch').addEventListener('click', function() {
    var blogSection = document.querySelector('section.blog');
    if (blogSection.style.display === 'none' || blogSection.style.display === '') {
        blogSection.style.display = 'block';
    } else {
        blogSection.style.display = 'none';
    }
});
//-------------------------------------Copyright Year-----------------------------------------------------
((ph = '%year%', cls = '.copy') =>
    document.querySelector(cls).textContent =
    document.querySelector(cls).textContent.replace(ph, new Date().getFullYear())
)('%year%')

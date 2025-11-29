// 爱心点击效果
document.addEventListener('click', function(e) {
    createHeart(e.pageX, e.pageY);
    createRipple(e.pageX, e.pageY);
});

// 创建爱心函数
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart heart' + Math.floor(Math.random() * 7 + 1);
    
    // 设置爱心位置
    heart.style.top = (y - 10) + 'px';
    
    // 随机大小
   let size =1;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    document.body.appendChild(heart);
    // 调整伪元素大小
    heart.style.setProperty('--size', size + 'px');
    
    // 添加到页面
    heart.style.left = (x-25) + 'px';
    heart.style.top = (y-20) + 'px';
    // 动画结束后移除元素
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// 创建点击波纹效果
function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    // 设置波纹位置
    ripple.style.left = (x - 25) + 'px';
    ripple.style.top = (y - 25) + 'px';
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    
    // 添加到页面
    document.body.appendChild(ripple);
    
    // 动画结束后移除元素
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 批量创建爱心效果（可选）
function createMultipleHearts(x, y) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 50;
            const offsetY = (Math.random() - 0.5) * 50;
            createHeart(x + offsetX, y + offsetY);
        }, i * 100);
    }
}

// 双击触发批量爱心效果
document.addEventListener('dblclick', function(e) {
    createMultipleHearts(e.pageX, e.pageY);
});

// 添加键盘事件 - 按空格键在随机位置生成爱心
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createMultipleHearts(x, y);
    }
});
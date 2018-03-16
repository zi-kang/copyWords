let copyAction = ids => {
    let textEle = document.createElement('textarea');
    textEle.innerText = ids;
    textEle.style.width = 0;
    textEle.style.height = 0;
    document.body.appendChild(textEle);
    textEle.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    document.body.removeChild(textEle);
    console.log('复制成功');



};
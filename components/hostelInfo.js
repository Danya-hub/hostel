'use strict';


const hostelInfo = () => {
    const blockInfoTxt = document.querySelector('.hostelInfo-blockInfo-txt'),
        blockInfo = document.querySelector('.hostelInfo-blockInfo');

    const wordCount = 700;
    blockInfo.innerHTML = blockInfoTxt.textContent.split('').slice(0, wordCount).join('') + '...';
}

export default hostelInfo;
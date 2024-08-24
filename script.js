function showMakeupTips() {
    var tips = document.getElementById('makeup-tips');
    if (tips.classList.contains('hidden')) {
        tips.classList.remove('hidden');
    } else {
        tips.classList.add('hidden');
    }
}

function showSkincareTips() {
    var tips = document.getElementById('skincare-tips');
    if (tips.classList.contains('hidden')) {
        tips.classList.remove('hidden');
    } else {
        tips.classList.add('hidden');
    }
}

function showFashionTips() {
    var tips = document.getElementById('fashion-tips');
    if (tips.classList.contains('hidden')) {
        tips.classList.remove('hidden');
    } else {
        tips.classList.add('hidden');
    }
}

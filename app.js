var count = 0;

document.getElementById('clicker-button').onclick = function() {
    count += 0.001;
    document.getElementById('counter').innerHTML = 'Баланс = ' + count.toFixed(3) + ' гривен';
}

document.getElementById('reward-button').onclick = function() {
    count += 1;
    document.getElementById('counter').innerHTML = 'Баланс = ' + count.toFixed(3) + ' гривен';
}

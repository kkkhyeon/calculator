let addValue = 0;
let addOperator = '';
let mulValue = 0;
let mulOperator = '';

function dispId() {
    if (document.getElementById('display1').offsetParent !== null) return 'display1';
    return 'display2';
}

function numberButton(num) {
    if (document.getElementById(dispId()).innerHTML == '0') {
        document.getElementById(dispId()).innerHTML = num;
    } else {
        document.getElementById(dispId()).innerHTML += num;
    }
}

function dotButton() {
    if (document.getElementById(dispId()).innerHTML.indexOf('.') === -1) {
        document.getElementById(dispId()).innerHTML += '.';
    }
}

function applyMul() {
    var cur = parseFloat(document.getElementById(dispId()).innerHTML);
    if (mulOperator == '*') mulValue = mulValue * cur;
    else if (mulOperator == '/') mulValue = mulValue / cur;
    else if (mulOperator == '^') mulValue = Math.pow(mulValue, cur);
    else mulValue = cur;
}

function applyAdd(op) {
    applyMul();
    if (addOperator == '+') addValue = addValue + mulValue;
    else if (addOperator == '-') addValue = addValue - mulValue;
    else addValue = mulValue;
    mulValue = 0;
    mulOperator = '';
    document.getElementById(dispId()).innerHTML = 0;
    addOperator = op;
}

function plusButton() { applyAdd('+'); }
function minusButton() { applyAdd('-'); }

function multiplyButton() {
    applyMul();
    document.getElementById(dispId()).innerHTML = 0;
    mulOperator = '*';
}

function divideButton() {
    applyMul();
    document.getElementById(dispId()).innerHTML = 0;
    mulOperator = '/';
}

function equalButton() {
    applyMul();
    if (addOperator == '+') addValue = addValue + mulValue;
    else if (addOperator == '-') addValue = addValue - mulValue;
    else addValue = mulValue;
    document.getElementById(dispId()).innerHTML = addValue;
    addValue = 0; addOperator = '';
    mulValue = 0; mulOperator = '';
}

function ceButton() {
    document.getElementById(dispId()).innerHTML = '0';
    addValue = 0; addOperator = '';
    mulValue = 0; mulOperator = '';
}

function signButton() {
    document.getElementById(dispId()).innerHTML =
        parseFloat(document.getElementById(dispId()).innerHTML) * -1;
}

function percentButton() {
    document.getElementById(dispId()).innerHTML =
        parseFloat(document.getElementById(dispId()).innerHTML) / 100;
}

function sqrtButton() {
    document.getElementById(dispId()).innerHTML =
        Math.sqrt(parseFloat(document.getElementById(dispId()).innerHTML));
}

function squareButton() {
    var v = parseFloat(document.getElementById(dispId()).innerHTML);
    document.getElementById(dispId()).innerHTML = v * v;
}

function piButton() {
    document.getElementById(dispId()).innerHTML = Math.PI;
}

function r2Button() {
    document.getElementById(dispId()).innerHTML =
        parseFloat(document.getElementById(dispId()).innerHTML).toFixed(2);
}

function r0Button() {
    document.getElementById(dispId()).innerHTML =
        Math.round(parseFloat(document.getElementById(dispId()).innerHTML));
}

function xpowButton() {
    applyMul();
    document.getElementById(dispId()).innerHTML = 0;
    mulOperator = '^';
}

function logButton() {
    document.getElementById(dispId()).innerHTML =
        Math.log10(parseFloat(document.getElementById(dispId()).innerHTML));
}

function lnButton() {
    document.getElementById(dispId()).innerHTML =
        Math.log(parseFloat(document.getElementById(dispId()).innerHTML));
}

function eButton() {
    document.getElementById(dispId()).innerHTML = Math.E;
}

// ── addEventListener 등록 ──
document.getElementById('n0v').addEventListener('click', function () { numberButton(0); });
document.getElementById('n1v').addEventListener('click', function () { numberButton(1); });
document.getElementById('n2v').addEventListener('click', function () { numberButton(2); });
document.getElementById('n3v').addEventListener('click', function () { numberButton(3); });
document.getElementById('n4v').addEventListener('click', function () { numberButton(4); });
document.getElementById('n5v').addEventListener('click', function () { numberButton(5); });
document.getElementById('n6v').addEventListener('click', function () { numberButton(6); });
document.getElementById('n7v').addEventListener('click', function () { numberButton(7); });
document.getElementById('n8v').addEventListener('click', function () { numberButton(8); });
document.getElementById('n9v').addEventListener('click', function () { numberButton(9); });

document.getElementById('n0h').addEventListener('click', function () { numberButton(0); });
document.getElementById('n1h').addEventListener('click', function () { numberButton(1); });
document.getElementById('n2h').addEventListener('click', function () { numberButton(2); });
document.getElementById('n3h').addEventListener('click', function () { numberButton(3); });
document.getElementById('n4h').addEventListener('click', function () { numberButton(4); });
document.getElementById('n5h').addEventListener('click', function () { numberButton(5); });
document.getElementById('n6h').addEventListener('click', function () { numberButton(6); });
document.getElementById('n7h').addEventListener('click', function () { numberButton(7); });
document.getElementById('n8h').addEventListener('click', function () { numberButton(8); });
document.getElementById('n9h').addEventListener('click', function () { numberButton(9); });

document.getElementById('plus1').addEventListener('click', plusButton);
document.getElementById('minus1').addEventListener('click', minusButton);
document.getElementById('multiply1').addEventListener('click', multiplyButton);
document.getElementById('divide1').addEventListener('click', divideButton);
document.getElementById('equal1').addEventListener('click', equalButton);

document.getElementById('plus2').addEventListener('click', plusButton);
document.getElementById('minus2').addEventListener('click', minusButton);
document.getElementById('multiply2').addEventListener('click', multiplyButton);
document.getElementById('divide2').addEventListener('click', divideButton);
document.getElementById('equal2').addEventListener('click', equalButton);

document.getElementById('ce1').addEventListener('click', ceButton);
document.getElementById('sqrt1').addEventListener('click', sqrtButton);
document.getElementById('percent1').addEventListener('click', percentButton);
document.getElementById('sign1').addEventListener('click', signButton);
document.getElementById('pi1').addEventListener('click', piButton);
document.getElementById('square1').addEventListener('click', squareButton);
document.getElementById('dot1').addEventListener('click', dotButton);
document.getElementById('r2v').addEventListener('click', r2Button);
document.getElementById('r0v').addEventListener('click', r0Button);

document.getElementById('ce2').addEventListener('click', ceButton);
document.getElementById('sqrt2').addEventListener('click', sqrtButton);
document.getElementById('percent2').addEventListener('click', percentButton);
document.getElementById('sign2').addEventListener('click', signButton);
document.getElementById('pi2').addEventListener('click', piButton);
document.getElementById('square2').addEventListener('click', squareButton);
document.getElementById('dot2').addEventListener('click', dotButton);
document.getElementById('r2h').addEventListener('click', r2Button);
document.getElementById('r0h').addEventListener('click', r0Button);

document.getElementById('xpow1').addEventListener('click', xpowButton);
document.getElementById('log1').addEventListener('click', logButton);
document.getElementById('ln1').addEventListener('click', lnButton);
document.getElementById('e1').addEventListener('click', eButton);

document.getElementById('xpow2').addEventListener('click', xpowButton);
document.getElementById('log2').addEventListener('click', logButton);
document.getElementById('ln2').addEventListener('click', lnButton);
document.getElementById('e2').addEventListener('click', eButton);
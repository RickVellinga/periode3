// Food
function Product(name, btw) {
    let product = this;

    product.name = name;
    product.btw = btw;
    product.buy = new Date();

    product.expirationDate = function(days) {
        return product.buy.getDate() + days;
    }
}

function Vegetable(name, btw) {
    Product.call(this, name, btw);
    let vegetable = this;
    vegetable.category = 'Vegetable';
}

function Meat(name, btw) {
    Product.call(this, name, btw);
    let meat = this;
    meat.category = 'Meat';
}

function Dairy(name, btw) {
    Product.call(this, name, btw);
    let dairy = this;
    dairy.category = 'Dairy';
}

function Gadget(name, btw) {
    Product.call(this, name, btw);
    let gadget = this;
    gadget.category = 'Gadgets';
}

const sla = new Vegetable('ijsbergsla', 9);
const melk = new Dairy('melk', 9);
const gameConsole = new Gadget('gameconsole', 21);

console.log(sla, melk, gameConsole);

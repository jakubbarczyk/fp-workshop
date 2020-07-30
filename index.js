// https://ramdajs.com/repl/#?const%20generateOptions%20%3D%20R.pipe%28%0A%20%20R.range%280%29%2C%0A%20%20R.map%28R.objOf%28%27value%27%29%29%0A%29%3B%0A%0AgenerateOptions%285%29%3B%0A
const generateOptions = R.pipe(
    R.range(0),
    R.map(R.objOf('value'))
);

generateOptions(5);

// https://ramdajs.com/repl/#?const%20shoppingCart%20%3D%20%5B%0A%20%20%7B%20name%3A%20%27amplifier%27%2C%20quantity%3A%201%2C%20price%3A%20220%20%7D%2C%0A%20%20%7B%20name%3A%20%27headphones%27%2C%20quantity%3A%204%2C%20price%3A%2090%20%7D%2C%0A%20%20%7B%20name%3A%20%27speakers%27%2C%20quantity%3A%202%2C%20price%3A%20160%20%7D%0A%5D%3B%0A%20%0Aconst%20calculateTotal%20%3D%20R.pipe%28%0A%20%20R.props%28%5B%27quantity%27%2C%20%27price%27%5D%29%2C%0A%20%20R.apply%28R.multiply%29%0A%29%3B%0A%0Aconst%20calculateGrandTotal%20%3D%20R.pipe%28%0A%20%20R.map%28calculateTotal%29%2C%0A%20%20R.reduce%28R.add%2C%200%29%0A%29%3B%0A%0AcalculateGrandTotal%28shoppingCart%29%3B%0A
const shoppingCart = [
    { name: 'amplifier', quantity: 1, price: 220 },
    { name: 'headphones', quantity: 4, price: 90 },
    { name: 'speakers', quantity: 2, price: 160 }
];

const calculateTotal = R.pipe(
    R.props(['quantity', 'price']),
    R.apply(R.multiply)
);

const calculateGrandTotal = R.pipe(
    R.map(calculateTotal),
    R.reduce(R.add, 0)
);

calculateGrandTotal(shoppingCart);

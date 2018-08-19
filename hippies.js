const tables = document.getElementsByTagName("table");

setHippies();

function max(array) {
    array.reduce((total, currentValue, currentIndex) => {
        if (currentIndex > 0) {
            if (total < currentValue) {
                total = currentValue;
            }
        } else {
            total = currentValue;
        }
    }, 0);
}

function setHippies() {
    let x = 0,
        y = 0,
        width = [],
        maxWidth = 0;

    while (x < tables.length) {
        while (y < tables[x].children.length) {
            width.push(tables[x].children[y].offsetWidth);

            ++y;
        }

        y = 0;

        console.info(max(width));

        tables[x].style.width = max(width) + 'px';
        tables[x].style.marginLeft = ((window.innerWidth - tables[x].offsetWidth) / 2) + 'px';
        console.info(((window.innerWidth - tables[x].offsetWidth) / 2) + 'px');

        ++x;
    }
}

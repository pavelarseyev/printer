export function main() {
    let btn = $("button");
    let field = $(".field");


    const vocabulary = {
        a: [[0, 1, 1, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1]]
    };


    btn.click(function () {
        // let val = $("input").val().toLowerCase().trim();
        createLetter();
        fillLetter(vocabulary.a);

    });

    function createLetter() {
        let letter = $(`<div class='letter'></div>`);

        for (let i = 0; i < 10; i++) {
            let html = "";
            let row = $(`<div class="row"></div>`);

            for (let i = 0; i < 4; i++) {
                html += `<div class="cell"></div>`;
            }

            row.html(html);

            $(letter).append(row);
        }

        field.append(letter);
    }


    function fillLetter(letterFromArr) {
        let time = 500 / 40;
        let flatArr = letterFromArr.flat();
        let cells = field.find(".letter:last-child .cell");


        cells.each(function (i, item) {
            let $this = $(item);

            setTimeout(function () {
                if (flatArr[i] === 1) {
                    $this.addClass("colored");
                }

            }, time * i);
        });
    }
}
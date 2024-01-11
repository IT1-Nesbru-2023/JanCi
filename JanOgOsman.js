let list = [0, 2, 0, 4, 5, 6];

function summerTall(tall1) {


    if (tall1[0] > 0 && tall1[1] > 0 && tall1[2] > 0 && tall1[3] > 0 && tall1[4] > 0 && tall1[5] > 0) {

        return tall1[0] + tall1[1] + tall1[2] + tall1[3] + tall1[4] + tall1[5];

    }

    else {

        return false;
    };
};


let answer = summerTall(list);
console.log(answer);
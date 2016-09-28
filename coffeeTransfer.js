var coffeeTransfer = {

    name: "coffeeTransfer",
    desc: "주어진 원화 금액을 커피 잔 수로 환산해주는 라이브러리 입니다.",

    cofffeeName: "UNKNOWN",
    coffeePrice: 4000,

    setCoffee: function (_coffeeName, _coffeePrice) {
        this.cofffeeName = _coffeeName;
        this.coffeePrice = Number(_coffeePrice);
    },

    getCoffeeName: function () {
        return this.cofffeeName;
    },
    
    getCoffeePrice: function () {
        return this.coffeePrice;
    },

    //금액 정보를 가지고 있는 class에서 정규식을 통해 원화 정보를 추출.
    cofffeeTransfer: function (_className) {
        var bfCoffeeTransferElemArr = document.getElementsByClassName(_className); //처리 대상
        var krwPrice = [];
        var thisElem, krwAmt, coffeeAmt;

        for (var i = 0; bfCoffeeTransferElemArr.length > i; i++) {
            thisElem = bfCoffeeTransferElemArr[i];
            krwAmt = Number(thisElem.innerHTML.replace(/[^0-9.]/g, ''));
            coffeeAmt = Math.ceil(krwAmt / this.coffeePrice);
            thisElem.innerHTML = thisElem.innerHTML + ' <div class="coffee-amt"><i class="fa fa-coffee"></i>'+ this.getCoffeeName() +' 약' + coffeeAmt + '잔 가격 </div>';
            krwPrice.push({
                elem: thisElem,
                krwAmt: krwAmt,
                coffeeAmt: coffeeAmt
            });

        }

        return krwPrice;
    },

};



export default class Game {

    

    static checkComputerCards = (playerDice, droidSelectedCard) => {
        let scoreForComputer = [0,0,0,0,0,0,0,0,0,0,0,0,0]
        let computerSuits = new Array(5)
        let suitsQty = -1

        for (let h = 13; h > 0; h--) {
            scoreForComputer[(h-1)] = this.checkScore(playerDice, (h));

        }

        this.getSuits(computerSuits, playerDice);

        suitsQty = this.checkDroidSuits(computerSuits)
        
        //play suits
        if(suitsQty >= 0){

            for(let i = 0; i < 5; i++){
                
                if(Math.trunc(playerDice[i]/13) !== suitsQty){
                    droidSelectedCard[i] = true;
                }
            }

            //console.log(`play suits`)
            return;

        }

        let droidMaxofA_Kind = this.checkMaxofAKind(scoreForComputer);

        if (droidMaxofA_Kind >= 400){

            let holder = -1;

            //droidThrowOneCard(scoreForDroid);

            for(let i = 0; i < scoreForComputer.length-4; i++){
                if(scoreForComputer[i] === 1){
                    holder = i;
                    break;

                }
            }

            for(let i = 0; i<5; i++){

                if(playerDice[i]%13 === holder){
                    droidSelectedCard[i] = true;
                    break;
                }

            }

            //console.log(`droidThrowOneCard`)
            return;
        }

        //droid fullhouse
        let droidFullHouse = this.checkForFullHouses(scoreForComputer);

        if (droidFullHouse > 13){
            //console.log(`${droidSelectedCard} fullhouse`)
            return;
        }

        //droid straight
        let straightForDroid0 = this.checkForStraight(scoreForComputer)

        if (straightForDroid0 > 0) {
            //console.log(`${droidSelectedCard} straight0`)
            return;
        }

        straightForDroid0 = this.droidCheckForStraight(scoreForComputer);

        if (straightForDroid0 > 0) {

            for(let i = 0; i < 13; i++) {
                if (i < straightForDroid0 -2 || i > straightForDroid0) {

                    if(scoreForComputer[i] === 1) {
                        for(let j = 0; j <5; j++) {
                            if(playerDice[j]%13 < (straightForDroid0 - 3) || playerDice[j]%13 > straightForDroid0 ) {
                                if(straightForDroid0 !== 2 && playerDice[j]%13 !== 12) {
                                    droidSelectedCard[j] = true;
                                }
                            }
                        }
                    }
                }
            }

            //console.log(`${droidSelectedCard} straight1`)
            return;
        }

        //droid 3 of a kind
        if (droidMaxofA_Kind >= 300) {



            let holder = -1;
            let holder1  = -1;



            for(let i = 0; i < scoreForComputer.length-4; i++){
                if(scoreForComputer[i] === 1){

                    if(holder === -1) {
                        holder = i;
                    }else{
                        holder1 = i;
                    }

                }
            }

            for(let i = 0; i < 5; i++){

                if(playerDice[i]%13 === holder){
                    droidSelectedCard[i] = true;
                }else if(playerDice[i]%13 === holder1 && holder1 < 9){
                    droidSelectedCard[i] = true;
                }

            }
            //console.log(`droid 3 of a kind`)
            return;
        }


         //droidCheckForTwoOfA_Kind
         if(this.droidTwoPair(scoreForComputer)){


            for(let i = 0; i< scoreForComputer.length; i++){

                if(scoreForComputer[i] === 1){

                    for(let j = 0; j < playerDice.length; j++){
                        if(playerDice[j]%13 === i && j !== 12 ){
                            droidSelectedCard[j] = true;
                        }
                    }
                    break;
                }

            }

            //console.log(`droidCheckForTwoOfA_Kind`)
            return;

        }

        //Play on 2 of a kinds
        droidMaxofA_Kind = this.checkFor2OfAKinds(scoreForComputer);

        let holdBig = 0;

        if(droidMaxofA_Kind === 1){

            for(let i = 12; i >= 0; i--){

                if(scoreForComputer[i] === 1 ) {

                    if (holdBig > 0) {
                        for(let j = 0; j < 5; j++) {

                            if(playerDice[j]%13 === i){
                                droidSelectedCard[j] = true;
                            }

                        }
                    }
                    holdBig++;
                }
            }

            //console.log(`Play on 2 of a kinds`)
            return;
        }

         //Play possible Straight
         let checkforPossibleStraight = this.droidCheckForStraightOfThreeCards(scoreForComputer);

         if(checkforPossibleStraight > 0){
 
             for(let j = 0; j < 5; j++) {
 


                //console.log(`${playerDice[j]%13} === ${checkforPossibleStraight}`)

                 if(playerDice[j]%13 > checkforPossibleStraight || playerDice[j]%13 < checkforPossibleStraight - 4){
                     droidSelectedCard[j] = true;
                 }
 
             }
 
             //console.log(`possible straight ${droidSelectedCard}`)
             return;
 
         }

         //play 2 biggest cards
        for(let i = 12; i >= 0; i--){

            if(scoreForComputer[i] === 1 ) {

                if (holdBig > 1) {
                    for(let j = 0; j < 5; j++) {

                        if(playerDice[j]%13 === i){
                            droidSelectedCard[j] = true;
                        }

                    }
                }
                holdBig++;
            }
        }

        //console.log(`play 2 biggest cards`)

    }

    static whoWonRound = (arr0, arr1) =>
    {
        let scoreForPlayer0 = [ 0,0,0,0,0,0,0,0,0,0,0,0,0 ]
        let scoreForPlayer1 = [ 0,0,0,0,0,0,0,0,0,0,0,0,0 ]
        let suitArray0 = new Array(5)
        let suitArray1 = new Array(5)

        let finalEvaluation = -1

        this.getSuits( suitArray0, arr0 )
        this.getSuits( suitArray1, arr1 )

        let suitsPlayer0 = this.checkForFlush(suitArray0)
        let suitsPlayer1 = this.checkForFlush(suitArray1)

        //console.log(`player0:${suitArray0} ${suitsPlayer0}
        //player1:${suitArray1} ${suitsPlayer1}`)

        for (let h = 13; h > 0; h--) {
            scoreForPlayer0[(h-1)] = this.checkScore(arr0, (h));
            scoreForPlayer1[(h-1)] = this.checkScore(arr1, (h));
        }

        let straightPlayer0 = this.checkForStraight(scoreForPlayer0);
        let straightPlayer1 = this.checkForStraight(scoreForPlayer1);

        //console.log(`straightPlayer0=${straightPlayer0} straightPlayer1=${straightPlayer1}`)


        //check for royal flush
        if (straightPlayer0 === 12 && straightPlayer1 === 12 && suitsPlayer0 && suitsPlayer1) {
            return finalEvaluation;
        }
        else if (straightPlayer0 === 12 && suitsPlayer0){
            return 9;
        }
        else if (straightPlayer1 === 12 && suitsPlayer1){
            return 19;
        }

        // check for straight flush
        if (straightPlayer0 > 0 && suitsPlayer0 && suitsPlayer1 && straightPlayer0 === straightPlayer1) {
            return finalEvaluation;
        }
        else if (straightPlayer0 > straightPlayer1 && suitsPlayer0) {
            return 8;
        }
        else if (straightPlayer1 > straightPlayer0 && suitsPlayer1) {
            return 18;
        }

        let player0MaxofA_Kind = this.checkMaxofAKind(scoreForPlayer0);
        let player1MaxofA_Kind = this.checkMaxofAKind(scoreForPlayer1);

        //console.log(`player0MaxofA_Kind=${player0MaxofA_Kind} player1MaxofA_Kind=${player1MaxofA_Kind}`)

        if (player0MaxofA_Kind > player1MaxofA_Kind && player0MaxofA_Kind >= 400) {


            if (player0MaxofA_Kind >= 400) {
                return 7;
            }
        }
        else if (player1MaxofA_Kind > player0MaxofA_Kind  && player1MaxofA_Kind >= 400) {

            if (player1MaxofA_Kind >= 400) {
                return 17;
            }
        }

        //Check for full houses
        let player0FullHouse = this.checkForFullHouses(scoreForPlayer0);
        let player1FullHouse = this.checkForFullHouses(scoreForPlayer1);

        //console.log(`player0FullHouse=${player0FullHouse} player1FullHouse=${player1FullHouse}`)

        if (player0FullHouse > 13 || player1FullHouse > 13) {

            if (player0FullHouse > player1FullHouse) {
                return 6;
            }
            else if (player1FullHouse > player0FullHouse) {
                return 16;
            }

        }



        //check for flush
        if (suitsPlayer0 && suitsPlayer1) {
            return this.finalHighCheck(scoreForPlayer0, scoreForPlayer1);
        }
        else if (suitsPlayer0) {
            return 5;
        }
        else if (suitsPlayer1) {
            return 15;
        }


        // check for straight

        if (straightPlayer0 > 0 && straightPlayer0 === straightPlayer1) {
            return finalEvaluation;
        }
        else if (straightPlayer0 > straightPlayer1) {
            return 4;
        }
        else if (straightPlayer1 > straightPlayer0) {
            return 14;
        }


        //check for 3 of a kind
        if (player0MaxofA_Kind > player1MaxofA_Kind) {


            if (player0MaxofA_Kind >= 300) {
                return 3;
            }
        }
        else if (player1MaxofA_Kind > player0MaxofA_Kind) {

            if (player1MaxofA_Kind >= 300) {
                return 13;
            }
        }




        //check for 2 pair

        let two0fAkind0 = this.checkFor2OfAKinds(scoreForPlayer0);
        let two0fAkind1 = this.checkFor2OfAKinds(scoreForPlayer1);

        //console.log(`two0fAkind0=${two0fAkind0} two0fAkind1=${two0fAkind1}`)

        if (two0fAkind0 > two0fAkind1) {

            if(two0fAkind0 === 2) {
                return 2;
            }else {
                return 1;
            }
        }else if (two0fAkind1 > two0fAkind0) {

            if(two0fAkind1 === 2) {
                return 12;
            }else{
                return 11;
            }
        }else if(two0fAkind1 === two0fAkind0 && two0fAkind1 === 2){



            for (let j = 12; j >= 0; j--) {
                for (let k = 12; k >= 0; k--) {

                    if (scoreForPlayer0[k] === j || scoreForPlayer1[k] === j) {


                        if (scoreForPlayer0[k] > scoreForPlayer1[k]) {

                            if (scoreForPlayer0[k] === 2) {
                                return 2;
                            } else {
                                return 0;
                            }
                        } else if (scoreForPlayer1[k] > scoreForPlayer0[k]) {

                            if (scoreForPlayer1[k] === 2) {
                                return 12;
                            } else {
                                return 10;
                            }
                        }


                    }

                }
            }


        }


        // check for pair or high card
        for (let j = 12; j >= 0; j--){

            for (let k = 12; k >= 0; k--) {

                if (scoreForPlayer0[k] === j || scoreForPlayer1[k] === j) {


                    if (scoreForPlayer0[k] > scoreForPlayer1[k]) {

                        if(scoreForPlayer0[k] === 2) {
                            return 1;
                        }else{
                            return 0;
                        }
                    }
                    else if (scoreForPlayer1[k] > scoreForPlayer0[k]) {

                        if (scoreForPlayer1[k] === 2) {
                            return 11;
                        }else{
                            return 10;
                        }
                    }



                }

            }
        }


        return this.finalHighCheck(scoreForPlayer0, scoreForPlayer1);


    }

    static finalHighCheck = ( tempArray0, tempArray1) =>
    {
        for (let j = 12; j >= 0; j--) {

            for (let k = 12; k >= 0; k--) {

                if (tempArray0[k] === j || tempArray1[k] === j) {


                    if (tempArray0[k] > tempArray1[k]) {

                        return 0;
                    }
                    else if (tempArray1[k] > tempArray0[k]) {

                        return 1;
                    }



                }

            }
        }



        return -1;
    }

    static checkScore = (arrTemp,arg1) =>
    {

        let evaluateTheArray = 0;

        for (let i = 5; i > 0; i--) {
            if ((arrTemp[i-1] % 13 + 1) === arg1) {
                evaluateTheArray++;
            }
        }

        return evaluateTheArray;
    }

    static checkForFlush = (arrTemp) =>
    {
        return (arrTemp[0] === arrTemp[1] && arrTemp[1] === arrTemp[2] && arrTemp[2] === arrTemp[3] && arrTemp[3] === arrTemp[4]);
    }

    static droidCheckForStraightOfThreeCards(arrTemp)
    {


        for (let j = 12; j >= 3; j--) {
            if (j > 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[(j - 4)] === 0) {
                //console.log(`${j + 4} =j....`)
                return j + 4;
            }
            else if (j > 3 && arrTemp[j] === 0 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[(j - 4)] === 1) {
                //console.log(`${j} =j`)
                return j;
            }
            // else if (j === 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 0 && arrTemp[12] === 1) {
            //     console.log(`straight --3`)
            //     return j - 3;
            // }
            // else if (j === 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 0 && arrTemp[(j - 3)] === 1 && arrTemp[12] === 1) {
            //     console.log(`straight --3`)
            //     return j - 2;
            // }
            // else if (j === 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 0 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[12] === 1) {
            //     console.log(`straight --3`)
            //     return j - 1;
            // }
            else if (j === 3 && arrTemp[j] === 0 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[12] === 1) {
                //console.log(`straight --3`)
                return j;
            }
            

        }

        return -1;
    }

    static checkFor2OfAKinds(tempArray)
    {
        let twoOfAKinds = 0;


        for (let j = 12; j >= 0; j--) {
            if (tempArray[j] === 2) {
                twoOfAKinds++;
            }
        }


        return twoOfAKinds;
    }

    static droidTwoPair(scoreForDroid) {

        let temp = 0;

        for(let i = 0; i < scoreForDroid.length; i++){

            if(scoreForDroid[i] === 2){
                temp++;
            }

        }

        if(temp > 1){
            return true;
        }else{
            return false;
        }


    }

    static droidCheckForStraight = (arrTemp) =>
    {


        for (let j = 12; j >= 2; j--) {
            if (j > 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1) {
                return j;
            }
            else if (j === 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[12] === 1) {
                return j;
            }

        }

        return -1;
    }

    static checkForStraight= (arrTemp) =>
    {


        for (let j = 12; j >= 3; j--) {
            if (j > 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[(j - 4)] === 1) {
                return j;
            }
            else if (j === 3 && arrTemp[j] === 1 && arrTemp[(j - 1)] === 1 && arrTemp[(j - 2)] === 1 && arrTemp[(j - 3)] === 1 && arrTemp[12] === 1) {
                return j;
            }

        }

        return -1;
    }

    static checkForFullHouses(tempArray)
    {
        let threeOfAKinds = 0;
        let twoOfAKinds = 0;


        for (let j = 12; j >= 0; j--) {
            if (tempArray[j] === 3) {
                threeOfAKinds = ((j+1)*10);
            }else if(tempArray[j] === 2)
            {
                twoOfAKinds = (j + 1);
            }
        }
        return threeOfAKinds * twoOfAKinds + twoOfAKinds;
    }

    static checkMaxofAKind = (tempArray) =>
    {
        for (let i = 13; i > 2; i--) {
            for (let j = 13; j > 0; j--) {
                if (tempArray[(j-1)] === i) {
                    return i * 100 + j;
                }
            }
        }

        return 0;
    }

    static checkDroidSuits = (droidSuits) => {

        let temp = -1;
        let tempArr = [0,0,0,0]


        for(let i = 0; i < 4; i++){

            for(let j = 0; j < 5; j++){

                if(droidSuits[j] === i){
                    tempArr[i] = tempArr[i]+1;
                }

            }
        }

        for(let i = 0; i < 4; i++){
            if(tempArr[i] >= 4){
                temp = i;
                break;
            }
        }


        return  temp;
    }

    static getSuits = ( suitArr, cardArr) =>
    {

        for (let i = 0; i < 5; i++) {
            suitArr[i] = Math.trunc(cardArr[i] / 13);
        }

    }

    static checkScore = (arg1, arg2) => {
        let evaluateTheArray = 0

        for (let i = 5; i > 0; i--) {

            if ((arg1[i-1] % 13 + 1) === arg2) {
                evaluateTheArray = evaluateTheArray + 1
            }
        }

        return evaluateTheArray
    }

    static showComputerDicardedCards = (arg1, arg2) => {


        for(let i = 0; i < arg1.length; i++){

            if(arg1[i]){
                arg2[i] = 53
            }

        }


    }

    static dealOutInitialCards = (arg1, arg2, arg3) => {
        for (let i = 0; i < arg1.length; i++){


            do {
              this.randomComputerCard = Math.floor(Math.random( ) * 52)
            } while (this.checkCardsForDuplicate(this.randomComputerCard, arg3) );
            
            arg1[i] = this.randomComputerCard
      
            do {
              this.randomPlayerCard = Math.floor(Math.random( ) * 52)
            } while (this.checkCardsForDuplicate(this.randomPlayerCard, arg3));
            
            arg2[i] = this.randomPlayerCard
      
          }
    }

    static checkCardsForDuplicate = (arg1, arg2) => {

        for(let i = 0; i < arg2.a.length; i++){
          if(arg2.a[i] === arg1){
            return true
          }
        }
      
      
        arg2.a = [...arg2.a, arg1]
        return false
      }
  
}

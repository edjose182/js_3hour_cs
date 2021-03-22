var names_cat = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]

function golfScore(par, strokes) {
    if (strokes == 1) { // Hole-in-one
        return names_cat[0];
    }

    else if (strokes <= (par -2) ) { // Eagle
        return names_cat[1];
    }
    
    else if (strokes == (par - 1) ) { // Birdie
        return names_cat[2];
    }

    else if (strokes == par) { // Par
        return names_cat[3];
    }

    else if (strokes == (par + 1)) { // Bogey
        return names_cat[4];
    }

    else if (strokes == (par + 2)) { // Double Bogey
        return names_cat[5];
    }
    
    else {
        return names_cat[6];
    }
}

/*
--------------------------------
Strokes             Return
--------------------------------
1                   Hole-in-one!
<= par - 2          Eagle
par - 1             Birdie
par                 Par
par + 1             Bogey
par + 2             Double Bogey
>= par + 3          Go Home!
*/

//Change these values to test
console.log(golfScore(5,4));
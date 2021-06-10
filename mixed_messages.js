function generator(){
    x=Math.floor(5*Math.random());
    m="Hello my dear. Let's see what your should eat. For breakfast you will have "
    switch (x)
    {
        case 0:
            m += "porridge ";
            break;
        case 1:
            m += "eggs with toast ";
            break;
        case 2:
            m += "french toast ";
            break;
        case 3:
            m += "pizza ";
            break;
        case 4:
            m += "Cini Minis ";
            break;
        case 5:
            m += "a smoothie ";
            break;
        default:
            m += "FEHLER";
            break;
    }
    x=Math.floor(6*Math.random());
    m += "followed by lunch, which will be "
    switch (x)
    {
        case 0:
            m += "CHOCOLAAAAAATE. ";
            break;
        case 1:
            m += "nothing. ";
            break;
        case 2:
            m += "Pizza. ";
            break;
        case 3:
            m += "a salat. ";
            break;
        case 4:
            m += "spagetti. ";
            break;
        case 5:
            m += "Schnitzel. ";
            break;
        case 6:
            m += "bread with hummus. ";
            break;
        default:
            m += "FEHLER";
            break;
    }
    x=Math.floor(5*Math.random());
    m += "And for dinner you will have "
    switch (x)
    {
        case 0:
            m += "pizza. ";
            break;
        case 1:
            m += "a salat. ";
            break;
        case 2:
            m += "a protein shake. ";
            break;
        case 3:
            m += "soup. ";
            break;
        case 4:
            m += "grilled vegetables. ";
            break;
        case 5:
            m += "... you know what, just get take-away today. ";
            break;
        default:
            m += "FEHLER";
            break;
    }
    m+="Bon appetit and enjoy :)"
    return m;
}

console.log(generator());

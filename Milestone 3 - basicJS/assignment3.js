//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) 
{
    if(typeof currentPrice === 'number' && typeof discount === 'number' && discount > 0 && discount < 100)
    {
       const Discount = (currentPrice * discount) / 100;
       const newPrice = currentPrice - Discount;
       return newPrice.toFixed(3);
    }
    return "Invalid";
}


// Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if(typeof otp !== "string")
        return "Invalid";
    
    if(otp.length === 8 && otp[0] === 'p' && otp[1] === 'h' && otp[2] === '-' )
        return true;

    return false
}



function validOtp(otp) {
    if(typeof otp !== "string")
        return "Invalid";
    
    if(otp.length == 8 && otp.startsWith("ph-"))
        return true;

    return false
}


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array))
       return "Invalid";
    let haCount = 0;
    let naCount = 0;
    function count(array){
        
        for(let item of array)
        {
            if (item === "ha")
               haCount += 1;
            else if (item === "na")
               naCount += 1;      
        }
    }

    count(array);

    if (haCount > naCount)
        return true;
        
    else if(haCount === naCount)
        return "equal";
    else
       return false;
}


// Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    
    if(typeof str != "string" || str.trim() === "")
       return "Invalid"

    let words = str.trim().split(' ');
   
    let longw = words[0];
    for(const word of words)
    {
        if(word.length > longw.length)
        {
            longw = word;
        }
    }

    let len = 0;
    for(const word of words)
    {
        len += word.length;
    }

    const obj = {longwords:longw,token:len}
    return obj
}

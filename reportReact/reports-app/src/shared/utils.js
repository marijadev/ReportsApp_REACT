const getDate = date => {
    var formattedDate = new Date(date);
    return formattedDate.getDate() + "." + (formattedDate.getMonth() + 1) + "." + formattedDate.getFullYear() + ".";
}

const isObjectEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


export { getDate, isObjectEmpty };
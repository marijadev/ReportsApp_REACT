const getDate = date => {
    var formattedDate = new Date(date);
    return formattedDate.getDate() + "." + (formattedDate.getMonth() + 1) + "." + formattedDate.getFullYear() + ".";
}

export { getDate };
const getDate = date => {
    var formattedDate = new Date(date);
    return formattedDate.getDate() + "." + (formattedDate.getMonth() + 1) + "." + formattedDate.getFullYear() + ".";
}

// const isBtnActive = () => {
//     const location = window.location.hash;
//     console.log(location)
//     location.includes("#/newReport") ? "all-reports-btn reports-btn active" : "create-report-btn reports-btn"
// }

export { getDate };
const unique_occurence = (str) => {
    set = [...new Set(str)];
    let uniqueString="";
    for(let value of set) uniqueString+=value;
    console.log(uniqueString);
};
unique_occurence("abcadeefb")
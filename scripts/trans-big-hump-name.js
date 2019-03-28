const transBigHumpName = (str) => (str.substr(0, 1).toUpperCase() + str.substr(1)).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());

export default transBigHumpName;
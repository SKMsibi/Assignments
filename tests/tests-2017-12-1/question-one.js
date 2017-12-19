function checkStringPresence(str,word){
    var regexPattern = new RegExp(word, 'g');
    return regexPattern.test(str);
}
console.log(checkStringPresence('Perfect Practice Makes Perfect','Perfect'));
console.log(checkStringPresence('We should have a growth Mindset','Fixed'));
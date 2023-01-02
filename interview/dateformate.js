const today = new Date();
console.log(today.toLocaleString());
const f = new Intl.DateTimeFormat('en-in',{
    dateStyle:"medium",
    timeStyle:"medium"
})
console.log(f.format(today))
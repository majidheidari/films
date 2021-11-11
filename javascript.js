let element = document.getElementById('Card');
let box = document.getElementsByClassName('container')[0];
function card (src,name,time,rate) {
    return{
        src,
        name,
        time,
        rate
    }
}
const arr =[];
arr.push(card('sdf.PNG','css','aban','good'))
arr.push(card('sdf.PNG','java','mehr','bad'))
arr.push(card('sdf.PNG','react','azar','not bad'))
arr.push(card('sdf.PNG','html','bahman','very good'))
arr.push(card('sdf.PNG','css','aban','good'))
arr.push(card('sdf.PNG','java','mehr','bad'))
arr.push(card('sdf.PNG','react','azar','not bad'))
arr.push(card('sdf.PNG','html','bahman','very good'))
// arr.map((i)=>{
//     return (
//         document.getElementsByClassName('container')[0].append(document.getElementById('Card'))
//     )
// })
const add= (array)=> {return (array.map((item)=>{
        return ( wa(item))})
)}
box.innerHTML = add(arr);
// const add =  arr.map((item)=>{
//     return ( wa(item))
// })
//
// box.innerHTML = add;
function wa(a) {
    return(` <div class="card" id="Card">
        <img src=${a.src} style="width: 100%" class="img">
        <h3>${a.name}</h3>
        <p>${a.time}</p>
        <h4>${a.rate}</h4>
    </div>`)
}
const setInput = (e) => {
    const result=arr.filter(card =>{
            return card.name.includes(e.value) || card.time.includes(e.value) || card.rate.includes(e.value);
        }
    )
    box.innerHTML = add(result);
}
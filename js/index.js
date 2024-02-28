const loadData = ()=>{
    fetch("https://openapi.programming-hero.com/api/ai/tool/01")
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}
loadData()
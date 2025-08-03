let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let facts= await getFacts();
    console.log(facts);
    let p=document.querySelector("#result");
    p.innerHTML=facts
});
let url="https://catfact.ninja/fact"
async function getFacts(){
    try{let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("ERROR---",e);
    }
}
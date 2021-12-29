

let userName = "Lavanya"

let element = <h1>I am  {userName} </h1>

let skills = ["HTML", "CSS","javascript"]

let items =<ul>
    {
        skills.map((value,index)=>{
            return <li key={value+index}>{value}</li>
        })
    }
</ul>

let allItems = React.createElement('div', null,element,items) 
ReactDOM.render(allItems, document.getElementById('container'))


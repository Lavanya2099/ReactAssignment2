
//functional component Example

function Header({vehicle}){            
    return <h1 className="example">Header {vehicle}</h1> 
}

function Content(props){ //using props
    return <h3 className="content"> {props.vehicleId} {props.Name}</h3>
}

function Footer({person}){    
    return <h1 className="example">Footer {person.firstName} {person.secondName}</h1>
}
ReactDOM.render(<div>
    <Header vehicle="Cars" />
    
    <Content vehicleId="01" Name="Venue"/>
    <Content vehicleId="02" Name="Volvo"/>
    <Content vehicleId="03" Name="BMW"/>
    <Footer  person={{firstName:"@copyright", secondName:".com"}}/>
</div>, document.getElementById('container'))

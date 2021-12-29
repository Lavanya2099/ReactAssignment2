//class component Example

//header component
class Header extends React.Component{   //creating class component
    render(){
        return <h1>Header</h1>
    }
}
//content component
class Content extends React.Component{
    render(){
        return <h4>{this.props.userId} {this.props.firstName} {this.props.secondName}   </h4> 
    }
}
//footer component
class Footer extends React.Component{
    render(){
        return <h1>Footer </h1>
    }
}



ReactDOM.render(<div>
    <Header/>
   {/* props in content component*/}
    <Content firstName="Lavanya" secondName="yc"/>
    <Content userId="01" firstName="mark"/>
    <Content firstName="chota" secondName="bheem"/>
    <Footer/>
</div>, document.getElementById('container'))
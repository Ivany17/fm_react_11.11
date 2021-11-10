/*
React
ReactDOM
*/

class Heading extends React.Component{
    render(){
        const {titleForHeading, children} = this.props;
        return React.createElement(
        'h1', 
        {title: titleForHeading}, 
        ...children);
    }
}

const reactElement = React.createElement(
    Heading,
    {titleForHeading:'title123'}, 
    'Elon Musk', 
    '!!!');

ReactDOM.render(reactElement, document.getElementById('root'));
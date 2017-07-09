import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//class 1HelloWorld extends React.Component {
class KrishnaHelp extends React.Component {
    render() {
        return <h1>hare krishna first react example</h1>
    }
}


class Krishna extends React.Component {
    render() {
        return <div>
            <p>
                HARE KRISHNA
            </p>
            <h1>Testing</h1>
        </div>
    }
}

class Final extends React.Component {
    constructor(){
        super();
        this.name ="Thanks GOD";
    }
    getName(){
        return "Hare krishna in Name Method";
    }
    render() {
        return <div>
                {2+2}
                {this.name }
                {this.getName()}
                <section>
                    <KrishnaHelp />
                    <Krishna />
                </section>
            <section className="foo">
                <KrishnaHelp />
                <Krishna />
            </section>
        </div>

    }
}

ReactDom.render(< Final />, document.getElementById('root'))






// Its mandatory that class name should start with caps letter 
// import React from 'react';
// import ReactDom from 'react-dom'
// in return we are using some tags of html but not all tags of html 
// in return the outer most tag must be present only single time , if we write it more then 1 then it throw exception.
//some of working tags are <p> , <div> , <h1> .....<hn> , <section> etc 
// class is reserved keyword for cs6 only
// we have to extend React.Component with every component.
// One file can contain many classes.
// its mandatory that every class has render() method and it will return html
// at the end of class we need to call render method of ReactDom class.
// parameter of render methord of ReactDom are : class name in following syntax <className/>
// second paramter of render method is refrence object of HTML object where we want to display data on screen/UI.
// some keyword are reservesed which we cann't use in jsx for example insted of using class we need to use className.
// we can write java script also but we need to write in curly braces "{}".
// in class we can create seprate method also and we can easily call these method in render method.
// In Curly braces {} we can call any onther method of same class using this keyword.
// we can use javascript exression only we are not able to use loop / condition like for loop , while loop , if condition etc.
// we can also use of constructor in class , but  it should be before any method.
// in constructor super should be placed at first line so that this component is able to extend React.Component.


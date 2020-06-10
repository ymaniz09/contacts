import React, {Component} from 'react';

class ContactList extends Component {
    render() {
        const people = this.props.contacts

        return <ol>
            {people.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

function App() {
    return (
        <div className="App">
            <ContactList contacts={[
                {name: 'Ygor'},
                {name: 'Hamilton'},
                {name: 'Flavia'}
            ]}/>
            <ContactList contacts={[
                {name: 'Amanda'},
                {name: 'Mario'},
                {name: 'Helena'}
            ]}/>
        </div>
    );
}

export default App;

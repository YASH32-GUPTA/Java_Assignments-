import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ProfileCard Component
function ProfileCard({ name, age, location, bio }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h3>{name}</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>{age} years old</p>
      <p style={{ fontSize: '14px', color: '#555' }}>Location: {location}</p>
      <p style={{ fontSize: '14px', color: '#777' }}>{bio}</p>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

// UserInputForm Component (Class-based)
class UserInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      location: '',
      bio: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, location, bio } = this.state;
    this.props.addUser({ name, age: Number(age), location, bio });
    this.setState({ name: '', age: '', location: '', bio: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Age"
          style={inputStyle}
        />
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
          placeholder="Location"
          style={inputStyle}
        />
        <textarea
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
          placeholder="Bio"
          style={{ ...inputStyle, height: '80px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Add Profile
        </button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  margin: '5px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

// UserList Component
function UserList({ users }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No profiles to display</p>
      ) : (
        users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            age={user.age}
            location={user.location}
            bio={user.bio}
          />
        ))
      )}
    </div>
  );
}

// App Component (Main Component)
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Profile Card Generator</h1>
      <UserInputForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;

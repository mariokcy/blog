import React, { Component } from 'react';
import { isBrowser } from '../api';
import NameForm from '../components/NameForm';

const Gun = isBrowser() ? require('gun/gun') : () => 0;

class GunPage extends Component {
  constructor(props) {
    super(props);
    this.gun = Gun('https://gun-ndbtgvyfxy.now.sh/gun');
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    this.gun.get('username').on((data) => {
      this.setState({ name: data.name });
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h2>Gun Demo Page</h2>
        <NameForm gun={this.gun} name={this.name} />
        <div>
          Your name: {name}
        </div>
      </div>
    );
  }
}

export default GunPage;

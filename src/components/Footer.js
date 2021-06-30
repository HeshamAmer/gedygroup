import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
class Footer extends Component {
  render() {
    return <div className="fixed-bottom">
      <Card>
        <Card.Header>Copyright © 2021 Gedygroup - All Rights Reserved.</Card.Header>        
      </Card>
    </div>
  }
}
export default Footer

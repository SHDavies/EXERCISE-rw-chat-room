var React = require('react');
var $ = require('jquery');

var AddChat = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      url: "https://api.parse.com/1/classes/chat"
    };
  },
  addChat: function() {
    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader("X-Parse-Application-Id", 'g0okkZZ7S00wNDyrwKMbsAmvIBHYhLJ1oVqH8XpO');
        request.setRequestHeader("X-Parse-REST-API-Key", 'hQotTofrnyPkkU3xB04IznfpGeUYxG6KAjittHPL');
        request.setRequestHeader("Content-Type", 'application/json');
      },
      url: this.props.url,
      method: "POST",
      data: JSON.stringify({text: this.refs.newChatInput.getDOMNode().value}),
      success: function() {
        console.log("successful");
        this.refs.newChatInput.getDOMNode().value = '';
      }.bind(this),
      error: function() {
        console.log("error");
      }
    });
  },
  handleSubmit: function(e) {
    if(e.keyCode === 13) {
      this.addChat();
    }
  },
  render: function(){
    return (
      <div className="form-group">
        <input type="text" placeholder="Compose Message" ref="newChatInput" className="form-control" onKeyDown={this.handleSubmit} />
      </div>
    );
  }
});

module.exports = AddChat;

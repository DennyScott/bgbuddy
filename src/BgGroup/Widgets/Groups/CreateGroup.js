import React, {Component} from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  InputGroup,
  InputGroupButton,
  Input
} from 'reactstrap';
import './CreateGroup.css';

export default class CreateGroup extends Component {

  data = {
    addedMembers : [
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 1,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 2,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 3,
      },
    ]
  };

  static propTypes = {
    modal: React.PropTypes.bool.isRequired,
    toggle: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="create-group-modal">
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size="lg">
          <ModalHeader toggle={this.props.toggle}>Create Group</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="newGroupName">Group Name</Label>
              <Input className="new-group-name" placeholder="Group Name" id="newGroupName"/>
            </FormGroup>

            <FormGroup>
              <Label for="newGroupDescription">Group Description</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <FormGroup>

              <Label for="newGroupUsers">Add Members</Label>
              <InputGroup>
                <Input className="new-group-name" placeholder="jim@something.com" id="newGroupUsers"/>
                <InputGroupButton>
                  <Button>Add</Button>
                </InputGroupButton>
              </InputGroup>

              <div className="new-group-added-members">
                {this.data.addedMembers.map((member) => {
                  return (
                    <img className="member-avatar img-thumbnail"
                      alt="New User"
                      key={member.key}
                      src={member.image} />
                  );
                })}
              </div>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Create</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

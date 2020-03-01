
import React from 'react';

import {
  Modal,
  Form,
  Button,
  FormControl,
  InputGroup
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faBusinessTime,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons'

import {
  purgeStore
} from './lib'

function SettingsButton(props){
  const {show,setShow} = props;
  return (
    <Button
      onClick={e => setShow(!show)}
      title="user / weeklyHours"
    >
      <FontAwesomeIcon icon={faBusinessTime}/> {props.user} / {props.weeklyHours} hrs
    </Button>
  )
};

function SettingsModal(props){
  const {show,setShow} = props;
  if (!show) return null;
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
        <Button
          variant="danger"
          className='pull-right'
          onClick={purgeStore}
        >
          <FontAwesomeIcon icon={faSkullCrossbones}/>
          &nbsp;Delete Everything&nbsp;
          <FontAwesomeIcon icon={faSkullCrossbones}/>
        </Button>

      </Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.Label>
            User Name
          </Form.Label>
          <FormControl
            name="user"
            value={props.user}
            onChange={props.changeUser}
          />
        </Form.Group>
          <Form.Group>
            <Form.Label>
              Weekly Hours
            </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <FormControl
                name="weeklyHours"
                value={props.weeklyHours}
                onChange={props.changeWeeklyHours}
              />
            </InputGroup.Prepend>
            <InputGroup.Append>
              <span className="input-group-text">hrs</span>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={e => setShow(!show)} variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
)};

export { SettingsButton, SettingsModal }

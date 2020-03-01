
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

import { PresetList } from './Comment'

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

function SettingsModal({
  show, setShow, preset, addPreset, delPresetId, delPreset, user, changeUser,
  weeklyHours, changeWeeklyHours, mailToAddress, setMailToAddress
}){
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
            value={user}
            onChange={changeUser}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            eMail Target
          </Form.Label>
          <FormControl
            name="mailToAddress"
            value={mailToAddress}
            onChange={setMailToAddress}
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
                value={weeklyHours}
                onChange={changeWeeklyHours}
              />
            </InputGroup.Prepend>
            <InputGroup.Append>
              <span className="input-group-text">hrs</span>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <PresetList
          preset={preset}
          addPreset={addPreset}
          delPresetId={delPresetId}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={e => setShow(!show)} variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
)};

export { SettingsButton, SettingsModal }

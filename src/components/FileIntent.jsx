import React from 'react'

import VerboseIntentOpener from './VerboseIntentOpener'
import { Button } from 'cozy-ui/react/Button'


class FileIntent extends React.Component {
  constructor() {
    super()
    this.state = { fileId: null }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({ fileId: ev.target.value })
  }

  render() {
    const action = 'OPEN'
    const doctype = 'io.cozy.files'
    return (
      <div>
        <h1>Open file</h1>
        File id :{' '}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.fileId}
        />
        <br />
        <VerboseIntentOpener
          action="OPEN"
          doctype="io.cozy.files"
          options={{ id: this.state.fileId }}
          onComplete={res =>
            alert('intent has completed ! ' + JSON.stringify(res))
          }
          onDismiss={() => alert('intent has been dismissed !')}
        >
          <Button disabled={!this.state.fileId}>Open file</Button>
        </VerboseIntentOpener>
      </div>
    )
  }
}

export default FileIntent

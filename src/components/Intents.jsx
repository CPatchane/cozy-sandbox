import Apps from './Apps'
import Accounts from './Accounts'
import FileIntent from './FileIntent'
import React from 'react'

const styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
}

const Intents = () => {
  return (
    <div style={styles.grid}>
      <Accounts />
      <Apps />
      <FileIntent />
    </div>
  )
}

export default Intents

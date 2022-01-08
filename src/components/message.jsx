import React from 'react'

export const Message = props => {
  // eslint-disable-next-line eqeqeq
  if (props.header || !!props.text != '') {
    return (
      <div className='text-center'>
        {props.header && <h3 className='message-header'>{props.header}</h3>}
        <div className='message-body'>{props.text}</div>
      </div>
    )
  } else {
    return <div className='message-body'>{props.children}</div>
  }
}

import {Buffer} from 'buffer';
import React from 'react';
import clsx from 'clsx';
import {Sandbox, SandboxBody, SandboxControls} from '@local/components/sandbox'
import {HttpRequest} from '@local/components/http-request'
import CodeBlock from '@theme/CodeBlock'

function toCredentialsString(id, secret) {
  return `${id}:${secret}`;
} 

function base64Encode(input) {
  return Buffer.from(input, 'utf8').toString('base64');
}

function CredentialsPreview(props) {
  const credentialsString = toCredentialsString(props.id,props.secret) 
  return (
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <p>
              <span>{props.id}, {props.secret} &rarr; </span>
              <span><strong>{credentialsString}</strong> &rarr; </span>
              <span><strong>{base64Encode(credentialsString)}</strong></span>
            </p>
          </div>
        </div>
      </div>
  )
}

export function BasicAuth() {
  const [id, setId] = React.useState('user');
  const [secret, setSecret] = React.useState('password');
  const encodedCredentials = base64Encode(toCredentialsString(id,secret)) 
  return (
    <Sandbox title="Basic Authorization">
      <SandboxBody>
          <CredentialsPreview
            id={id}
            secret={secret}
          />
          <HttpRequest
            headers={{'Authorization': `Basic ${encodedCredentials}`}}
            host="www.example.com"
            method="GET"
            path="/index.html"
          />
      </SandboxBody>
      <SandboxControls>
        <div className={clsx('container')}>
          <div className={clsx('row')}>
            <div className={clsx('col col--12')}>
              <input
                minLength="1"
                onChange={evt => setId(evt.target.value)}
                placeholder="id"
                type="text"
                value={id}
              />
            </div>
          </div>
          <div className={clsx('row')}>
            <div className={clsx('col col--12')}>
              <input
                minLength="1"
                onChange={evt => setSecret(evt.target.value)}
                placeholder="secret"
                type="text"
                value={secret}
              />
            </div>
          </div>
        </div>
      </SandboxControls>
    </Sandbox>
  )
}




import {Buffer} from 'buffer';
import React from 'react';
import clsx from 'clsx';
import { SignJWT } from 'jose/jwt/sign'
import { generateSecret } from 'jose/util/generate_secret'
import CodeBlock from '@theme/CodeBlock'
import { ColorLegend } from '@local/components/color-legend'
import { HttpRequest } from '@local/components/http-request'
import { Sandbox, SandboxBody, SandboxControls } from '@local/components/sandbox'
import { TextInput } from '@local/components/text-input'
import styles from './styles.module.css'

const alg = 'HS256'
const typ = 'JWT'
const expirationTime = Math.floor(Date.now() / 1000) + (24 * 60 * 60); 

async function createRandomSecret() {
  try {
    return await generateSecret(alg, {extractable: true})
  } catch (error) {
    console.error("Secret creation error", error)
  }
}

async function generateToken({
  expirationTime,
  issuer,
  secret,
  subject,
}) {
  try {
    return await new SignJWT({})
      .setProtectedHeader({ typ })
      .setProtectedHeader({ alg })
      .setIssuer(issuer)
      .setSubject(subject)
      .setExpirationTime(expirationTime)
      .sign(secret)
  } catch (error) {
    console.error('Token creation error:', error)
    return null;
  }
} 

function PlainTokenPreview({expirationTime,issuer,subject}) {
  const headerString = JSON.stringify(
    {alg, typ}, 
    null, 
    4
  );
  const payloadString = JSON.stringify(
    {exp: expirationTime, iss:issuer, sub:subject}, 
    null, 
    4
  );
  return (
      <div className={clsx('container', 'padding--md')}>
        <div className={clsx('row')}>
          <div className={clsx(styles.header, 'col' , 'col--6')}>
            <CodeBlock 
              className="json"
              title="Header"
            >
              {headerString}
            </CodeBlock>
          </div>
          <div className={clsx(styles.payload, 'col', 'col--6')}>
            <CodeBlock 
              className="json"
              title="Payload"
            >
              {payloadString}
            </CodeBlock>
          </div>
        </div>
      </div>
  )
}

function EncodedTokenPreview({token}) {
  if (token !== null) {
    const [header, payload, signature] = token.split(".")
    const colorClassNames = {
      [styles.header]: 'header',
      [styles.payload]: 'payload',
      [styles.signature]: 'signature',
    };
    return (
      <div className={clsx('container', 'padding--md')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--9')}>
            <p className={clsx(styles.token)}>
              <span className={clsx(styles.header)}>{header}</span>
              <strong>.</strong>
              <span className={clsx(styles.payload)}>{payload}</span>
              <strong>.</strong>
              <span className={clsx(styles.signature)}>{signature}</span>
            </p>
          </div>
          <div className={clsx('col col--3')}>
            <ColorLegend colorClassNames={colorClassNames}/>
          </div>
        </div>
      </div>
    )
    } else {
      return (
        <div className={clsx('container')}>
        <div className={clsx('row')}>
          <div className={clsx('col col-12')}>
            <p>loading...</p>
          </div>
        </div>
      </div>
    )
  }
}

export function Jwt() {
  const isMountedRef = React.useRef(false);
  const [issuer, setIssuer] = React.useState('alice');
  const [secret, setSecret] = React.useState(null);
  const [secretText, setSecretText] = React.useState(null);
  const [subject, setSubject] = React.useState('bob');
  const [token, setToken] = React.useState(null)

  React.useEffect(
    () => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      }
    },
    []
  )
  
  React.useEffect(
    () => {
      if (secret === null) {
        createRandomSecret()
          .then(secret => {
              crypto.subtle.exportKey("raw", secret)
                .then(rawSecret => {
                  if (isMountedRef.current) {
                    setSecret(secret)
                    setSecretText(Buffer.from(
                        rawSecret, 
                        {encoding: 'binary'}
                    ).toString('base64'))
                  }
                })
        })
      }
    }, 
    [secret]
  ) 

  React.useEffect(
    () => {
      if (secret !== null) {
        generateToken({
            expirationTime,
            issuer,
            secret,
            subject,
        }).then(token => {
          if (isMountedRef.current) {
            setToken(token)
          }
        })
      }
    },
    [issuer, secret, token]
  )

  return (
    <Sandbox title="JWT">
      <SandboxBody>
        <PlainTokenPreview
          expirationTime={expirationTime}
          issuer={issuer}
          subject={subject}
        />
        <EncodedTokenPreview
          token={token}
        />
        <div className={clsx('container', 'padding--md')}>
          <div className={clsx('row')}>
            <div className={clsx('col col--12')}>
              <HttpRequest
                headers={{'Authorization': `Bearer ${token}`}}
                host="www.example.com"
                method="GET"
                path="/index.html"
              />
            </div>
          </div>
        </div>
      </SandboxBody>
      <SandboxControls>
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <TextInput 
              id="issuer"
              onChange={evt => setIssuer(evt.target.value)}
              label="Issuer"
              value={issuer} 
            />
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <TextInput 
              id="subject"
              onChange={evt => setSubject(evt.target.value)}
              label="Subject"
              value={subject} 
            />
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--9')}>
            <input
              minLength="1"
              placeholder="secret"
              readOnly
              size={48}
              type="text"
              value={secretText || 'loading...'}
            />
          </div>
          <div className={clsx('col col--3')}>
            <button
              className={clsx('button', 'button--primary')}
              onClick={() => setSecret(null)}
            >
              Regenerate Secret
            </button>
          </div>
        </div>
      </div>
      </SandboxControls>
    </Sandbox>
  )
}


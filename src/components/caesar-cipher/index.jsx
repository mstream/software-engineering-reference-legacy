import React from 'react';
import clsx from 'clsx';
import { Sandbox, SandboxBody, SandboxControls } from '@local/components/sandbox'
import { DropdownInput } from '@local/components/dropdown-input'
import styles from './styles.module.css'

const charset = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const cipherKeys = charset.slice(1).map((_, idx) => idx + 1);

function transform({cipherKey, text}) {
  const charCodeBase = charset[0].charCodeAt(0);
  return [...text]
    .map((char, idx) => {
      if (char === ' ') {
        return char;
      }
      const charCode = text.charCodeAt(idx) - charCodeBase;
      const transformedCharCode = charCodeBase + (charCode + cipherKey) % charset.length;
      return String.fromCharCode(transformedCharCode);
    })
    .join('');
}

function decrypt({cipherKey, encryptedText}) {
  return transform({cipherKey: -cipherKey, text: encryptedText}); 
}

function encrypt({cipherKey, plainText}) {
  return transform({cipherKey, text: plainText});
}

function Preview({cipherKey, plainText}) {
    const encryptedText = encrypt({cipherKey, plainText});
    const decryptedText = decrypt({cipherKey, encryptedText});
    return (
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <p>
              <strong>Plain text: </strong>
            </p>
            <p className={clsx(styles.text)}>
              {plainText}
            </p>
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <p>
              <strong>{`Encrypted text (+${cipherKey})`}: </strong>
            </p>
            <p className={clsx(styles.text)}>
              {encryptedText}
            </p>
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <p>
              <strong>{`Decrypted text (-${cipherKey})`}: </strong>
            </p>
            <p className={clsx(styles.text)}>
              {decryptedText}
            </p>
          </div>
        </div>
      </div>
    )
}

export function CaesarCipher() {
  const [plainText, setPlainText] = React.useState('lorum ipsum');
  const [activeCipherKey, setActiveCipherKey] = React.useState(cipherKeys[0]);

  const updatePlainText = (text) => {
    if ([...text].every(character => 
        character === ' ' || charset.includes(character))
    ) {
      setPlainText(text);
    }
  } 

  const cipherKeyEls = cipherKeys.map((cipherKey, idx) => {
    const isActive = cipherKey === activeCipherKey;
    const prefix = isActive ? '✓' : ' ';
    return (
      <li key={idx}>
        <a 
          className={clsx('dropdown__link')}
          href="#"
          onClick={() => setActiveCipherKey(cipherKey)}
        >
          {`${prefix} ${cipherKey}`}
        </a>
      </li>
    )
  });

  return (
    <Sandbox title="Caesar Cipher">
      <SandboxBody>
        <Preview 
          cipherKey={activeCipherKey} 
          plainText={plainText}
      />
      </SandboxBody>
      <SandboxControls>
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <input
              minLength="1"
              onChange={evt => updatePlainText(evt.target.value)}
              placeholder="plain text"
              type="text"
              value={plainText}
            />
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--12')}>
            <DropdownInput 
              activeValue={activeCipherKey}
              label="Key"
              onValueSelected={cipherKey => setActiveCipherKey(cipherKey)} 
              values={cipherKeys}
            />
          </div>
        </div>
      </div>
      </SandboxControls>
    </Sandbox>
  )
}


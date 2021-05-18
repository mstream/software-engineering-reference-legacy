import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
import crypto from 'crypto'
import {ColorLegend} from '@local/components/color-legend'
import {Sandbox, SandboxBody, SandboxControls} from '@local/components/sandbox'

const algorithms = {
  md5: "MD5",
  sha1: "SHA-1",
  sha256: "SHA-256",
  sha512: "SHA-512",
}

function toHashDigest({algorithm, inputString}) {
  return [
    ...crypto
    .createHash(algorithm)
    .update(inputString)
    .digest()
    .values()
  ].flatMap(byte => [
    ' ', 
    ...byte.toString(2).padStart(8, 0), 
    ' '
  ]);
}

function HashDigestPreview({algorithm, input1, input2}) {
  const hashDigestBits1 = toHashDigest({
    algorithm,
    inputString: input1
  });
  const hashDigestBits2 = toHashDigest({
    algorithm,
    inputString: input2
  });
  const [charEls1, charEls2] = hashDigestBits1
    .reduce((acc, char1, idx) => {
        const char2 = hashDigestBits2[idx];
        const areCharsSame = char1 === char2; 
        const charClass = clsx(
          areCharsSame ? styles.colliding : styles.nonColliding
        );
        const charEl1 = 
          <span key={idx} className={clsx(charClass)}>{char1}</span>
        const charEl2 = 
          <span key={idx} className={clsx(charClass)}>{char2}</span>
        return [[...acc[0], charEl1], [...acc[1], charEl2]]
      }, [[], []]);
    const colorClassNames = {
      [styles.colliding]: 'colliding bits',
      [styles.nonColliding]: 'non-colliding bits',
    };
    return (
      <div className={clsx('container', 'padding--md')}>
        <div className={clsx('row')}>
          <div className={clsx('col col--9')}>
            <p>
              Hash digest 1:
            </p>
            <p>
              <strong className={clsx(styles.hashDigest)}>
                {charEls1}
              </strong>
            </p>
            <p>
              Hash digest 2: 
            </p>
            <p>
              <strong className={clsx(styles.hashDigest)}>
                {charEls2}
              </strong>
            </p>
          </div>
          <div className={clsx('col col--3')}>
            <ColorLegend colorClassNames={colorClassNames}/> 
          </div>
        </div>
      </div>
    )
}

export function HashCollisions() {
  const [activeAlgorithm, setActiveAlgorithm] = React.useState(Object.keys(algorithms)[0]);
  const [input1, setInput1] = React.useState('example text 1');
  const [input2, setInput2] = React.useState('example text 2');
  const tabs = Object.entries(algorithms).map(([algorithm, label], idx) => {
    const isActive = algorithm === activeAlgorithm;
    return (
      <li 
        className={clsx('tabs__item', {'tabs__item--active': isActive})}
        key={idx}
        onClick={() => setActiveAlgorithm(algorithm)}
      >
        {label}
      </li>
    );
  });

  return (
    <Sandbox title="Hash Collisions">
      <SandboxBody>
          <ul className={clsx('tabs tabs--block')}>
            {tabs}
          </ul>
          <HashDigestPreview
            algorithm={activeAlgorithm}
            input1={input1}
            input2={input2}
          />
      </SandboxBody>
      <SandboxControls>
        <div className={clsx('container')}>
          <div className={clsx('row')}>
            <div className={clsx('col col--12')}>
              <input
                onChange={evt => setInput1(evt.target.value)}
                placeholder="input 1"
                type="text"
                value={input1}
              />
            </div>
          </div>
          <div className={clsx('row')}>
            <div className={clsx('col col--12')}>
              <input
                onChange={evt => setInput2(evt.target.value)}
                placeholder="input 2"
                type="text"
                value={input2}
              />
            </div>
          </div>
        </div>
      </SandboxControls>
    </Sandbox>
  )
}


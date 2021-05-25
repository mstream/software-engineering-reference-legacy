import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import crypto from 'crypto'
import {ColorLegend} from '@local/components/color-legend'
import {Sandbox, SandboxBody, SandboxControls} from '@local/components/sandbox'
import {classNameRetriever} from '@local/utils/style'
import styles from './styles.module.css'

const getClassName = classNameRetriever(styles);

const algorithms = {
  md5: 'MD5',
  sha1: 'SHA-1',
  sha256: 'SHA-256',
  sha512: 'SHA-512',
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

function BitsPreview({bitChars, otherBitChars}) {
  const bitCharEls = bitChars
    .map((bitChar, idx) => {
        const className = bitChar === otherBitChars[idx] ?  
            getClassName('colliding') :
            getClassName('nonColliding');
        return (
          <span 
            key={idx} 
            className={clsx(className)}
          >
            {bitChar}
          </span>
        );
    });

  return (
    <p>
      <strong className={getClassName('hashDigest')}>
        {bitCharEls}
      </strong>
    </p>
  )
}

BitsPreview.propTypes = {
  bitChars: PropTypes.arrayOf(PropTypes.string).isRequired, 
  otherBitChars: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

function HashDigestPreview({algorithm, input1, input2}) {
  const hashDigestBits1 = toHashDigest({
    algorithm,
    inputString: input1
  });
  const hashDigestBits2 = toHashDigest({
    algorithm,
    inputString: input2
  });
  const hashDigestEl1 = (
    <BitsPreview 
      bitChars={hashDigestBits1}
      otherBitChars={hashDigestBits2}
    />
  );
  const hashDigestEl2 = (
    <BitsPreview 
      bitChars={hashDigestBits2}
      otherBitChars={hashDigestBits1}
    />
  );
  
  const colorClassNames = {
    [getClassName('colliding')]: 'colliding bits',
    [getClassName('nonColliding')]: 'non-colliding bits',
  };
    
  return (
      <div className={clsx('container', 'padding--md')}>
        <div className={clsx('row')}>
          <div className={clsx('col', 'col--9')}>
            <p>
              Hash digest 1:
            </p>
            {hashDigestEl1}
            <p>
              Hash digest 2: 
            </p>
            {hashDigestEl2}
          </div>
          <div className={clsx('col', 'col--3')}>
            <ColorLegend colorClassNames={colorClassNames}/> 
          </div>
        </div>
      </div>
    )
}

HashDigestPreview.propTypes = {
  algorithm: PropTypes.string.isRequired, 
  input1: PropTypes.string.isRequired, 
  input2: PropTypes.string.isRequired, 
};

export function HashCollisions() {
  const [activeAlgorithm, setActiveAlgorithm] = 
      React.useState(Object.keys(algorithms)[0]);
  const [input1, setInput1] = React.useState('example text 1');
  const [input2, setInput2] = React.useState('example text 2');
  const tabs = Object
      .entries(algorithms)
      .map(([algorithm, label], idx) => {
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
          <ul className={clsx('tabs', 'tabs--block')}>
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
            <div className={clsx('col', 'col--12')}>
              <input
                onChange={evt => setInput1(evt.target.value)}
                placeholder="input 1"
                type="text"
                value={input1}
              />
            </div>
          </div>
          <div className={clsx('row')}>
            <div className={clsx('col', 'col--12')}>
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


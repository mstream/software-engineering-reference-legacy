import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import {DropdownInput} from '@local/components/dropdown-input'
import { Sandbox, SandboxBody, SandboxControls } from '@local/components/sandbox'
import {classNameRetriever} from '@local/utils/style'
import styles from './styles.module.scss'

const COMPARE_ITEMS = "COMPARE_ITEMS";
const MOVE_EYES = "MOVE_EYES";
const SWAP_ITEMS = "SWAP_ITEMS";
const UPDATE_ANIMATION = "UPDATE_ANIMATION";

const getClassName = classNameRetriever(styles);

function createCompareItemsAction(result) {
  return {
    type: COMPARE_ITEMS,
    payload: result,
  }
}

function createMoveEyesAction(firstEyeIndex, secondEyeIndex) {
  return {
    type: MOVE_EYES,
    payload: [firstEyeIndex, secondEyeIndex],
  }
}

function createSwapItemsAction(firstItemIndex, secondItemIndex) {
  return {
    type: SWAP_ITEMS,
    payload: [firstItemIndex, secondItemIndex],
  }
}

function createAnimationState(generateTransitions, items) {
  const originalItems = [...items];
  const sortedItems = [...items].sort();
  return {
    activeTransitionIndex: 0,
    eyeIndices: [],
    items,
    originalItems,
    sortedItems,
    transitions: generateTransitions(items),
  }
}

function generateTransitions(itemsToSort) {
  const items = [...itemsToSort];
  const transitions = [];
  for (let i = items.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const [firstItemIndex, secondItemIndex] = [j, j + 1];
      transitions.push(createMoveEyesAction(firstItemIndex, secondItemIndex));
      const shouldSwap = items[firstItemIndex] > items[secondItemIndex]; 
      transitions.push(createCompareItemsAction(!shouldSwap));
      if (shouldSwap) {
        transitions.push(createSwapItemsAction(firstItemIndex, secondItemIndex));
        const firstItemValue = items[firstItemIndex]; 
        const secondItemValue = items[secondItemIndex]; 
        items[firstItemIndex] = secondItemValue;
        items[secondItemIndex] = firstItemValue;
      }
    }
  }
  return transitions;
}

const animationInterval = 300;

const itemValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function replaceItemAt(idx, item, items) {
  const left = items.slice(0, idx);
  const right = items.slice(idx + 1);
  return [...left, item, ...right];
} 

function swapItemsAt(idx1, idx2, items) {
  const itemValue1 = items[idx1];
  const itemValue2 = items[idx2];
  return replaceItemAt(
    idx2, 
    itemValue1, 
    replaceItemAt(idx1, itemValue2, items)
  );
} 

function applyTransition({eyeIndices, items}, transition) {
  if (transition.type === COMPARE_ITEMS) {
    return {
      eyeIndices,
      items,
    }
  } else if (transition.type === MOVE_EYES) {
    return {
      eyeIndices: transition.payload, 
      items,
    }
  } else if (transition.type === SWAP_ITEMS) {
    return {
      eyeIndices,
      items: swapItemsAt(transition.payload[0], transition.payload[1], items),
    }
  } else {
      throw Error(`Unsupported transition type: ${transition.type}`)
  }
}

function Eye({className, eyeIndex, itemIndex, ...otherProps}) {
  return (
    <div
      {...otherProps}
      className={clsx(
        className, 
        getClassName('eye'),
        getClassName(`eye-${eyeIndex}-at-${itemIndex}`)
      )}
    >
      👁
    </div>
  );
}

Eye.propTypes = {
  className: PropTypes.string,
  eyeIndex: PropTypes.number.isRequired,
  itemIndex: PropTypes.number.isRequired,
}

function ProgressBar({activeTransitionIndex, transitions}) {
  const max = 100;
  const value = max * (activeTransitionIndex / (transitions.length - 1));

  return (
      <progress
        className={clsx(getClassName('progressBar'))}
        max={max} 
        value={value}
      >
        {`${value} %`}
      </progress> 
  )
}

function initAnimation(items) {
  return createAnimationState(generateTransitions, items);
}

function reduceAnimation(state, action) {
  const isFinished = 
    state.activeTransitionIndex === state.transitions.length - 1;
  switch (action.type) {
    case 'UPDATE_ANIMATION': {
      if (isFinished) {
        return initAnimation(state.originalItems);
      }
      return {
        ...state,
        ...applyTransition(
            state,
            state.transitions[state.activeTransitionIndex]
        ),
        activeTransitionIndex: state.activeTransitionIndex + 1,
      }
    }
    default: {
      throw new Error(`Unsupported action: ${action.type}`);
    }
  }
}


function Animation({items}) {
  
  const isMountedRef = React.useRef(false);

  const [state, dispatch] = React.useReducer(
      reduceAnimation, 
      items, 
      initAnimation,
  );

  React.useEffect(
    () => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    },
    []
  ) 

  React.useEffect(
    () => {
      const interval = window.setInterval(() => {
          if (isMountedRef.current) {
            dispatch({type: UPDATE_ANIMATION})
          }
        }, 
        animationInterval
      );
      return () => {
        window.clearInterval(interval);
      }
    }, 
    []
  );

  const transition = state.transitions[state.activeTransitionIndex];
  
  const [firstEyeIndexDelta, secondEyeIndexDelta] = 
    transition.type === MOVE_EYES ? 
    [
      [transition.payload[0] - state.eyeIndices[0]], 
      [transition.payload[1] - state.eyeIndices[1]]
    ] :
    [0, 0];
 
  const [firstSwappedItemIndex, secondSwappedItemIndex] =
    transition.type === SWAP_ITEMS ?
    transition.payload :
    [];


  const [firstComparedItemIndex, secondComparedItemIndex] =
    transition.type === COMPARE_ITEMS ?
    [state.eyeIndices[0], state.eyeIndices[1]] :
    [];

  const eyeAnimationClassName = idx => {
    if (idx < 0 || idx > 1) {
      throw Error(`only indices 0 and 1 are suppoerted but '${idx}' was given`)
    }

    const delta = idx === 0 ? firstEyeIndexDelta : secondEyeIndexDelta;

    if (delta === 0) {
      if (idx === firstComparedItemIndex || idx === secondComparedItemIndex) {
        return getClassName(`eye-comparing-${transition.payload ? 'passed': 'failed'}`);
      } else {
        return null;
      }
    }

    const direction = delta < 0 ? 'left' : 'right'; 
    const distance = Math.abs(delta);

    return getClassName(`moving-${direction}-by-${distance}`);
  }

  const itemAnimationClassName = idx => {
    if (idx < 0 || idx >= items.length) {
      throw Error(`only indices from 0 to ${items.length - 1} are suppoerted but '${idx}' was given`);
    }

    if (idx !== firstSwappedItemIndex && idx !== secondSwappedItemIndex) {
      if (idx !== firstComparedItemIndex && idx !== secondComparedItemIndex) {
        return null
      } else {
        return getClassName(`item-comparing-${transition.payload ? 'passed': 'failed'}`);
      }
    }

    const otherIdx = 
      idx === firstSwappedItemIndex ? 
      secondSwappedItemIndex : 
      firstSwappedItemIndex;

    const direction = idx < otherIdx ? 'right' : 'left';
    const distance = Math.abs(idx - otherIdx); 

    return getClassName(`swapping-${direction}-by-${distance}`);
  }

  const itemEls = state.items.map((value, idx) => {
    const className = clsx(
      styles.item,
      itemAnimationClassName(idx),
      {[styles.inOrder]: value === state.sortedItems[idx]}
    );

    return (
        <div 
          className={className} 
          key={idx}
        >
          {value}
        </div>
    );
  });

  const [firstEyeEl, secondEyeEl] = [0, 1].map(idx => {
    const itemIndex = state.eyeIndices[idx];
    return itemIndex != null && (
        <Eye 
          className={eyeAnimationClassName(idx)}
          eyeIndex={idx}
          itemIndex={itemIndex}
        />
    )
  });

  return (
    <div className={clsx('container')}>
      <div className={clsx('row')}>
        <div className={clsx('col', 'col--12')}>
          <ProgressBar 
            activeTransitionIndex={state.activeTransitionIndex}
            transitions={state.transitions}
          />
        </div>
      </div>
      <div className={clsx('row')}>
        <div className={clsx('col', 'col--12')}>
          <div className={clsx(getClassName('container'), 'text--center')}>
            {itemEls}
            {firstEyeEl}
            {secondEyeEl}
          </div>
        </div>
      </div>
    </div>
  )
}  

Animation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export function BubbleSort() {
  const [items, setItems] = React.useState([
    itemValues[5],
    itemValues[1],
    itemValues[0],
    itemValues[3],
    itemValues[2],
    itemValues[5],
    itemValues[0],
    itemValues[7],
    itemValues[4],
    itemValues[9],
    itemValues[6],
    itemValues[8],
  ]);

  const dropdownColumnEls = items.map((value, idx) => {
    
    return (
      <div 
        className={clsx('col', 'col--1')}
        key={idx}
      >
        <DropdownInput
          activeValue={value}
          label={null}
          onValueSelected={value => {
              setItems(replaceItemAt(idx, value, items))
            }
          }
          values={itemValues}
        />
      </div>
    );
  });

  return (
    <Sandbox title="Bubble Sort">
      <SandboxBody>
        <Animation 
          items={items}
          key={JSON.stringify(items)}
        />
      </SandboxBody>
      <SandboxControls>
        <div className={clsx('container')}>
          <div className={clsx('row')}>
            {dropdownColumnEls}
          </div>
        </div>
      </SandboxControls>
    </Sandbox>
  )
}

BubbleSort.propTypes = {};

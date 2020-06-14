import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@reach/auto-id';
import styles from './Rating.module.css';

const maxRating = 5;
const stars = Array.from({ length: maxRating }).map((_, index) => index + 1);

export const Rating = ({ name, id, value, onChange, rating }) => {
  const uid = useId(id);
  const uname = name || uid;
  const onChangeCallback = useMemo(
    () => {
      if (!onChange) return;
      return event => onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <>
      {stars.map(starNumber => (
        <React.Fragment key={starNumber}>
          <input
            styles={styles.abc}
            type="radio"
            name={uname}
            id={`${uid}_${starNumber}`}
            value={starNumber}
            checked={value !== undefined ? value === starNumber : undefined}
            onChange={onChangeCallback}
          />
          <label styles={styles.label} htmlFor={`${uid}_${starNumber}`}>
            <span aria-hidden="true">⭐️</span>
            <span role="presentation">{starNumber} Star</span>
          </label>
        </React.Fragment>
      ))}
    </>
  );
};

Rating.propTypes = {
  // unique id
  id: PropTypes.string,
  // name for the input
  name: PropTypes.string,
  // user selected value integers from 1 to 5
  value: PropTypes.number,
  // callback when user changes value
  onChanage: PropTypes.func,
  // overall rating float from 1 to 5
  rating: PropTypes.number,
};

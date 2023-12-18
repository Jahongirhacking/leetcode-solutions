import React from 'react';

/**
 * @typedef {Object} Option
 * @property {string} value
 * @property {string} label
 */

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {Option[]} props.options
 * @param {Function} props.onChange
 * @return {JSX.Element}
 */
export const RadioGroup = ({ name, options, onChange }) =>
    <>
        {
            options.map(({ value, label }) => (
                <label key={value}>
                    <input type="radio" name={name} value={value} onChange={() => onChange(value)} />
                    {label}
                </label>
            ))
        }
    </>


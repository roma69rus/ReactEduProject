import * as React from 'react';


export function MySelect(props) {
  return (
    <select
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    >
      <option disabled value="">{props.defaultValue}</option>
      {props.options.map(option =>
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  );
}

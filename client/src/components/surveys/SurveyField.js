import React from 'react';

export default ({label, input, meta: {error, touched}}) => {
  return (
    //{touched && error} => es6 syntax sugar, when true && string, it returns the string
    <div>
      <lable>{label}</lable>
      <input {...input} style={{marginBottom: '5px'}}/>
      <div className='red-text' style={{marginBottom:'20px'}}>{touched && error}</div>
    </div>
  );
}
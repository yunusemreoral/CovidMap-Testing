import React from 'react'

const Error = ({info}) => {
  return (
    <div data-testid="error" className='col-span-3 my-20 flex h-full justify-center items-center text-center w-[100%]'>
      <div>
        <p className='bg-red-400 p-5 rounded-md'>Üzgünüz bir hata oluştu</p>
        <p>{info} </p>
      </div>
    </div>
  );
};

export default Error

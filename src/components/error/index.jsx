import React from 'react'

const Error = ({info,refetch}) => {
  return (
    <div data-testid="error" className='col-span-3 my-20 flex flex-col h-full justify-center text-center gap-10'>
      <div>
        <p className='bg-red-400 p-5 rounded-md'>Üzgünüz bir hata oluştu</p>
        <p>{info} </p>
      </div>

      <button onClick={refetch} className='border shadow mt-10 text-black p-2'>Tekrar Dene</button>
    </div>
  );
};

export default Error

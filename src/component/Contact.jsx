import React from 'react'

const Contact = () => {
  return (
<div className=' w-full py-4 mt-20' id='contact'>

<div className="max-w-[1300px] mx-auto md:grid grid-cols-2 py-[50px]">
    <div className='m-2 col-span-1'>
        <h1 className='text-[20px] md:text-[40px]  font-[700]'>Contact</h1>
        <span className='my-5'>Looking forward to hearing from you</span>

        <h1 className='text-[16px] md:text-[20px] mt-5 font-[600]  '>Phone</h1>
        <span className='my-5'>+92-310-1585896</span>
        <h1 className='text-[16px] md:text-[20px] mt-5 font-[600] '>Email</h1>
        <span className='my-5'>aqib@gmail.com</span>
    </div>
    {/* <div className='col-span-1'></div> */}
    <div className='m-2 col-span-1  '>
        <input type='text' className='mb-2 p-3 mr-2 text-slate-600 rounded border border-black' placeholder='Enter name'/>
        <input type='text' className='mb-2 p-3 mr-2  text-slate-600 rounded border border-black' placeholder='Enter Last Name'/>
        <input type='text' className='mb-2 p-3 mr-1 text-slate-600 rounded border border-black' placeholder='Email'/>
        <button className='text-white rounded bg-black p-3 md:mx-4'>Submit</button>

        <p >If you have any query feel free to contact us</p>

    </div>

</div>
</div> 
 )
}

export default Contact
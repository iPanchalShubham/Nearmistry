import React from 'react'
import Router from 'next/router';
function FormsResponseModal({response,openModal}) {
console.log(response)
  return <>{ openModal ?(<div
	className="justify-center items-center flex overflow-hidden fixed inset-0 outline-none focus:outline-none max-h-72 my-auto mx-auto  border max-w-[340px] shadow-lg rounded-md bg-white z-50"
>
	<div className="mt-3 text-center">
		{response==201?<div
			className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
		>
			<svg
				className="h-6 w-6 text-green-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path>
			</svg>
		</div>:null}
		<h3 className="text-lg leading-6 font-medium text-gray-900">{response==201?"Successful":"Try again!"}</h3>
		<div className="mt-2 px-7 py-3">
			<p className="text-sm text-gray-500">
				{response == 400 ?"User already exists!":response == 201?"Registration Successfull":"Check your Internet"}
			</p>
		</div>
		<div className="items-center px-4 py-3">
			<button
				id="ok-btn"
				className={`px-4 py-2 ${response ==201?"bg-green-500":"bg-red-400"} text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300`}
			onClick={()=> Router.reload()}
			>
				OK
			</button>
		</div>
	</div>
</div>):null}</>
  
}

export default FormsResponseModal

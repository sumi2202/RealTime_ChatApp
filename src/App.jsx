import { useState } from 'react'


function App() {

  useEffect(() => {
    SupabaseAuthClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: {subscription},
    } = SupabaseAuthClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])
  
  return ( 
  <div className="w-full flex h-screen justify-center items-center p-4">
    <div className="border-[1px] border-gray-700 max-w-6xl w-full min-h-[600px] rounded-lg">
      {/* Header */}
      <div className="flex justify-between h-20 border-b-[1px] border-gray-700">
        <div className="p-4">
          <p className="text-gray-300">signed in as name...</p>
          <p className="text-gray-300 italic text-sm">3 users online</p>
        </div>
        <button className="m-2 sm:mr-4">Sign Out</button>
      </div>
      {/* main chat */}
      <div></div>
      {/* message input */}
      <form className="flex flex-xol sm:fle">
        <input 
        type="text" 
        placeholder="Type a message" 
        className="p-2 w-full bg-[#00000040] rounded-lg"/>
        <button className="mt-4 sm:mt-0 sm:ml-8 text-white max-h-12">Send</button>
      </form>
    </div>
  </div>
  );
    
}

export default App

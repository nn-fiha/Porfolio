import React from 'react'

const Tools = () => {
  return (
    <section className=" rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
      <div>
        <h2 className="text-md font-medium mb-2 p-4">Tools</h2>
      </div>
      <div className="grid grid-cols-2 md:flex gap-10 py-10 px-6">
        
          <div>
            <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Git & GitHub</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        
          <div>
            <img src={process.env.PUBLIC_URL + '/images/postman.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Postman</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
          
          <div>
            <img src={process.env.PUBLIC_URL + '/images/vscode.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">VS Code</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
       
          <div>
            <img src={process.env.PUBLIC_URL + '/images/pycharm.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">pyCharm</h3>
            <span className="text-[10px] text-gray-500">Basic</span>
          </div>
        
          <div>
            <img src={process.env.PUBLIC_URL + '/images/azure.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Azure Devops</h3>
            <span className="text-[10px] text-gray-500">Basic</span>
          </div>
   
          <div>
            <img src={process.env.PUBLIC_URL + '/images/trello.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Trello</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
      
          <div>
            <img src={process.env.PUBLIC_URL + '/images/slack.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Slack</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + '/images/discord.png'} alt="" className='w-16 h-16 p-2'/>
            <h3 className="text-sm font-medium">Discord</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
  
      </div>
    </section>
  )
}

export default Tools


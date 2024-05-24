import React from 'react'

const Backend = () => {
  return (
    <section className="max w-[310px] rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
      <div>
        <h2 className="text-sm font-medium mb-2 p-4">Backend Development</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 p-4">
        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">Node JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">Express JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">Django</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">REST API</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">MySQL</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">MongoDB</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Backend
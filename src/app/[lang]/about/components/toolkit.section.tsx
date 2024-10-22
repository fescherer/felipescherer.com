import { CardWrapper } from '../../../../components/card-wrapper.component'
import Link from 'next/link'
import { Dialog } from '@/components/primitives'
import { TOOLKIT } from '@/utils/data/toolkit.data'

export function ToolkitSection() {
  return (
    <CardWrapper direction="collumn" id="toolkit">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        Toolkit
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {
          TOOLKIT.map(tool => (
            <Dialog
              key={tool.name}
              trigger={(
                <button type="button" className="flex h-full w-24 flex-col items-center gap-4 transition-all hover:scale-110 hover:text-on-layer-0-l1 hover:brightness-90">
                  <div className="rounded bg-[#fff] p-1">
                    {tool.icon}
                  </div>

                  <p className="flex-1">{tool.name}</p>
                </button>
              )}
            >
              <div className="relative flex flex-col gap-8 rounded bg-layer-1 p-2">
                <p className="flex-1">{tool.description}</p>

                <Link href={tool.docLink} target="_blank" className="mt-4 flex items-center gap-2 text-sm transition-all hover:brightness-90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                  Documentation link
                </Link>
              </div>
            </Dialog>

            // <label key={tool.name} className="swap swap-flip">
            //   <input type="checkbox" />

            //   <div className="swap-off relative flex h-44 w-32 items-center justify-center rounded border shadow-md ">
            //     <div className="flex flex-col items-center gap-2 text-center">

            //       <div className="bg-white rounded-md p-2">
            //         {tool.icon}
            //       </div>

            //       {tool.name}

            //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="bg-base-content text-base-100 absolute -right-1 -top-1  size-4 rounded-full">
            //         <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
            //       </svg>
            //     </div>
            //   </div>

            //   <div className="swap-on relative flex h-44 w-32 flex-col items-center rounded border p-2 shadow-md">
            //     <span className="flex-1 text-xs">{tool.description}</span>

            //     <Link href={tool.docLink} className="btn btn-circle btn-xs mt-4">
            //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            //         <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            //       </svg>
            //     </Link>

            //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="border-base-content bg-base-100 text-base-content absolute -right-1 -top-1 size-4 rounded-full border p-0.5">
            //       <path fillRule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clipRule="evenodd" />
            //     </svg>
            //   </div>
            // </label>
          ))
        }
      </div>

    </CardWrapper>
  )
}

import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <Link className='flex items-center text-xl text-white' href='/'>
          <ArrowUturnLeftIcon className="h-6 w-6 text-white mr-2" />
          Go to Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
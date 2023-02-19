import Image from "next/image"

const Logo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div>
      <Image className="object-cover text-white" height={50} width={150} alt='logo' src="/horizontal-white.svg" />
    </div>
  )
}

export default Logo
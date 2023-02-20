import Hero from "@/components/Hero"

type Props = {}

function HomePage({}: Props) {
  return (
    <div>
      <Hero image="hero-concert.png" cover="glitch-cover.png" home />
      {/* <h1 className="text-4xl">Live Fickle Blog</h1> */}
    </div>
  )
}

export default HomePage
import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const heroData = [
  {
    title: "Our team",
    desc: "Our team is here to make sure you never take a wrong turn. With our experience, insight, and a dash of IIT/NIT brilliance, success isn’t just a goal – it’s a given."
  },
  {
    title: "Meet clients ",
    desc: "Trailblazers, the dreamers, and the doers who trust us to help them level up. From prestigious educational institutions to ambitious students on the rise, our roster is packed with the best and brightest minds."
  },
  {
    title: "How we work?",
    desc: "The time we invest together for your rocket reach."
  },
  {
    title: "Portfolio",
    desc: "Success stories that speak louder than words. From transforming academic institutions to empowering students with life-changing opportunities, each project we touch turns to gold."
  }
]

export default function Home() {
  return (
    <section className="flex items-center h-full">
      <div className="flex flex-col gap-12 p-8">
        {/* Hero */}
        <div className="flex gap-12 flex-col items-start border-b-2 py-4">
          <div className="text-7xl font-bold">
            A friend <br />
            of <span className="text-white">Schools</span> & <br />
            Students
          </div>

          <Link href={'/contact'} className="bg-white text-[#003057] font-bold text-md p-2 flex gap-2">
            <span>Contact us</span>
            <ArrowCircleRightIcon />
          </Link>
        </div>

        <div className="flex justify-between">
          {
            heroData.map((data, index) => (
              <div key={index} className="w-[20%] flex flex-col gap-2">
                <h1 className="font-bold text-2xl">{data.title}</h1>
                <p className="text-gray-200">{data.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

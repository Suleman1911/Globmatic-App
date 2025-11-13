import Image from "next/image"
import OurStoryPic from "../images/home-image-1.jpg"
const page = () => {
  return (
    <>

      <div className="fixed h-[100vh] w-[100vw] overflow-hidden" style={{ zIndex: -1 }}>
        <Image
          src={OurStoryPic}
          alt="Our Story Picture"
          quality={100}
          sizes={"1oovw"}
          fill
          placeholder="blur"
          style={{
            objectFit: 'cover'
          }}
        />
        </div>
      <h1 className="m-0 pt-6 text-[56px] font-extrabold leading-[45px] text-center">
        Humble Beginnings a story of life
      </h1>
      <p className="m-0 pt-6 text-[30px] text-center">
        How we became the farmers of the future, tilling the techology of tomorrow today.
      </p>
    </>
  )
}

export default page

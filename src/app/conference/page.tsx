import Image from 'next/image'
import Link from 'next/link'
import ConferencePic from "../images/media-image-1.jpg"

const page = () => {
  return (
    <>
     <div className="fixed h-[100vh] w-[100vw] overflow-hidden" style={{ zIndex: -1 }}>
        <Image
          src={ConferencePic}
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
    <div>
       <h1 className="m-0 pt-6 text-[56px] font-extrabold leading-[45px] text-center text-white">
        Welcome To Globamtic Conference
      </h1>
      <h2 className="m-0 pt-6 text-[30px] text-center text-white">
        <Link href="/conference/speakers"> View Speakers</Link>
      </h2>
      <h2 className="m-0 pt-6 text-[30px] text-center text-white">
        <Link href="/conference/sessions"> View Sessions</Link>
      </h2>
    </div>
    </>
  )
}

export default page

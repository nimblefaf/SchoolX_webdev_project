import Image from "next/image";
import ObiWan from "/src/app/assets/images/HelloThere.jpg"
import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>HELLO THERE</h1>
            <Image
                src={ObiWan}
                alt="Kenobi"
                height={300}
                width={600}
                priority
            ></Image>
            <h2 color="Red">This is about page</h2>
            <Link href="/" color="Red">Click here to go home</Link>
        </div>
    )
}
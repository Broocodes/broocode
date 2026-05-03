import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
// import Heading from "../ui/Heading";

const reviews = [
	{
		username: "@jack",
		img: "https://cdn.dribbble.com/userupload/29026275/file/original-2f05f474069c58aebc4b09a092b1217e.png?resize=1024x768&vertical=center",
	},
	{
		username: "@jill",
		img: "https://cdn.dribbble.com/userupload/23531650/file/original-1075a0a98953616197ca3853a27fa1e2.jpg?resize=752x564&vertical=center",
	},
	{
		username: "@john",
		img: "https://cdn.dribbble.com/userupload/24740449/file/original-4302effc1d080e710bda1da49d0190e7.png?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@kane",
		img: "https://cdn.dribbble.com/userupload/27937147/file/original-d8e9899a4462a27e2a881f0bb335f383.jpg?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@nka",
		img: "https://cdn.dribbble.com/userupload/23474978/file/original-464a614ea2c94c039e75f8c1654f9abf.gif",
	},
	{
		username: "@jenny",
		img: "https://cdn.dribbble.com/users/2586416/screenshots/6344067/2k_indian_woman_in_full_growth_pocessing_4x.jpg?resize=768x576&vertical=center",
	},
	{
		username: "@james",
		img: "https://cdn.dribbble.com/userupload/27976475/file/original-94f4b5c5a1cbc6417b6df95066a1a7a1.jpg?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@klsa",
		img: "https://cdn.dribbble.com/userupload/39705863/file/original-263c6b7e4397197c37d970ffbc2efc4b.png?resize=1024x768&vertical=center",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
}: {
	img: string;
}) => {
	return (
		<div className="mx-2 md:mx-3 bg-white border-4 border-myblack p-1.5 shadow-[6px_6px_0px_0px_rgba(18,18,18,1)]">
			<div className="overflow-hidden rounded-sm">
				<Image
					className="object-cover h-[170px] w-[250px] md:h-[220px] md:w-[320px] transition-transform duration-500 hover:scale-105"
					width={320}
					height={220}
					sizes="(max-width: 768px) 250px, 320px"
					loading="lazy"
					alt="Showcase work"
					src={img}
				/>
			</div>
		</div>
	);
};

export function MarqueeDemo() {
	return (
		<section className="relative w-full bg-[#fafafa] py-14 md:py-20 border-y-8 border-myblack overflow-hidden">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="bg-white border-4 md:border-8 border-myblack p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] md:shadow-[12px_12px_0px_0px_rgba(18,18,18,1)]">
					<div className="mb-6 md:mb-8 lg:mb-10 text-center">
						<p className="inline-block bg-accentColor text-myblack border-2 border-myblack px-3 py-1.5 text-xs md:text-sm font-semibold mb-3">
							Creative Partnerships
						</p>
						<h2 className="font-bold font-guzan text-3xl md:text-4xl lg:text-5xl text-myblack">
							Brands We Have Worked With
						</h2>
						<p className="text-myblack/75 font-medium mt-3 text-sm md:text-base">
							A quick look at visual directions and projects we help bring to life.
						</p>
					</div>

					<Marquee pauseOnHover className="[--duration:30s]">
						{firstRow.map((item) => (
							<ReviewCard key={item.username} {...item} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover className="[--duration:30s] mt-4 md:mt-5">
						{secondRow.map((item) => (
							<ReviewCard key={item.username} {...item} />
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
}

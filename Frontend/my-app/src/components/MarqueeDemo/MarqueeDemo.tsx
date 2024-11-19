import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";


const reviews = [
  {
    name: "Mercado Pago",
    img: "/metodosDePago/mercadoPago.svg",
  },
  {
    name: "Paypal",
    img: "/metodosDePago/paypal.svg",
  },
  {
    name: "Visa",
    img: "/metodosDePago/visa.svg",
  },
  {
    name: "MasterCard",
    img: "/metodosDePago/masterCard.svg",
  },
  {
    name: "NaranjaX",
    img: "/metodosDePago/naranjaX.svg",
  },
  {
    name: "Wester Union",
    img: "/metodosDePago/westerUnion.svg",
  },
  {
    name: "Maestro",
    img: "/metodosDePago/maestro.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
      )}
    >
      <div className="flex flex-row items-center h-[80px] justify-center gap-2">
        <img className="rounded-full" width="80" height="100%" alt="" src={img} />

        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-20 overflow-hidden rounded-lg bg-background">

      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

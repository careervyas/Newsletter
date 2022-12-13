import Image from "next/image";
import account from "../../public/elements/account.svg";
import calendar from "../../public/elements/cal.svg";
import clock from "../../public/elements/clock.svg";

interface Props {
  id: any;
  author: any;
  date: any;
  readtime: any;
  slug: any;
}
export default function NewsLetterHeader({
  id,
  author,
  date,
  readtime,
  slug,
}: any) {
  return (
    <div className="w-full  flex flex-col text- md:text-md">
      <div className="flex flex-row items-center m-1">
        <Image src={account} width={20} height={20} alt="career vyas blogs" />
        &nbsp;
        {author}
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col sm:flex-row m-1 items-center">
          <div className="font-semibold mr-3 flex flex-row items-center">
            <Image
              src={calendar}
              width={20}
              height={20}
              alt="career vyas Newsletters"
            />
            <span className="m-1">
              {new Date(date).toString().substring(4, 16)}
            </span>
          </div>

          {readtime && (
            <div className="flex flex-row items-center">
              <Image
                src={clock}
                width={20}
                height={20}
                alt="career vyas Newsletters"
              />
              <span className="m-1"> {readtime} minute read</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

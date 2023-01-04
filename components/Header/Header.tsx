import Link from 'next/link';

type HeaderType = {
  blogName: string;
};
export const Header = ({ blogName }: HeaderType) => {
  return (
    <>
      <header className="py-10">
        <div className="flex justify-between text-white">
          <Link href={'/'}>
            <div className="text-2xl flex">
              <div
                className=" flex items-center"
                style={{
                  filter:
                    'invert(87%) sepia(21%) saturate(6228%) hue-rotate(147deg) brightness(95%) contrast(89%)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="344.564 330.278 111.737 91.218"
                  width="53.87"
                  height="43.61"
                >
                  <defs>
                    <linearGradient
                      id="logo_svg__b"
                      gradientUnits="userSpaceOnUse"
                      x1="420.97"
                      y1="331.28"
                      x2="420.97"
                      y2="418.5"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%"></stop>
                    </linearGradient>
                    <linearGradient
                      id="logo_svg__d"
                      gradientUnits="userSpaceOnUse"
                      x1="377.89"
                      y1="331.28"
                      x2="377.89"
                      y2="418.5"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%"></stop>
                    </linearGradient>
                    <path
                      d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z"
                      id="logo_svg__a"
                    ></path>
                    <path
                      d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z"
                      id="logo_svg__c"
                    ></path>
                  </defs>
                  <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
                  <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
                </svg>
              </div>
              <div className="flex items-center pl-2"> {blogName}</div>
            </div>
          </Link>

          <div className="flex gap-4">
            <div>Category</div>
            <div>News</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </header>
    </>
  );
};

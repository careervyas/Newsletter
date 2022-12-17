import React from 'react'
import { useState,useEffect } from 'react'
const { GoogleSpreadsheet } = require("google-spreadsheet");
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HeroForm = () => {
  const [docs, setdocs] = useState<any>();

  async function loadSheet() {
    const SHEET_ID = "1d1c7fCIdPbZL5N6t7G19z4Ca2J7brRcBgzln-wJewcs";

    const CLIENT_EMAIL =
      "contact-form-career-vyas@contact-form-367605.iam.gserviceaccount.com";

    const PRIVATE_KEY =
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsv81eQc2f6zY5\nntp7CQpVU61UtOYuep7gMpo0jPgFJxnZibWzIqWMFulKQbwV2z2tCTqFIWbFRSzf\nrINg0aC0h6CHI4mHxXFjxutcu15n70ArCnDCgZU1Nq3TByQgHaMEh3m28aqDMT3B\nzpNW/IwxZuYYL3M7S45yK3X1/ULwYw/Eh1vQlENzfm6mSoSGET7FL9yN5TkCvpLQ\n6HVH4y+AaypionF2yEq+1PphZOkMRnLSEO3z/GyuPIAICvhpDTitie6W3S+gdmt8\nMb49lZRUiZ2W5TSRe7xwGH0scOp/GwHnModb6QctFPAjDX9U3GL1dxGcqU3w0IVc\nAwJEVoCnAgMBAAECggEAGq7M9G8FPrB7TDQmur60kLsfjfLGjnhUkPxlSD0GqZkW\ntjy99ZZM7Cdfz8n5LjESmjx6Lwpv5YRKqvPqc7/SwFUmAlRcD74mG7Yj2vYlXg1y\nTmj1mNL2LpAsZ5OgogX3N6G2DFV7XnnyeDybEo0TbyVd4MTM2jml837rYLHGr1Av\nZhjD4w1Odz8bBy0qIgJDTdAct1mfol/+adYOY4VJyD3WhEhI2LYnQPnbGCrRxl3U\nlcJ8ydokq2hnlaZArfUaqjFS3UF8PFmOxo4k30lvIKlVHJuCwvg78sVQlAV2v22e\nJnr7LURXsHnVC8/9cI2GFs7K2il6ZP3qLzgt0xSvnQKBgQDfJ7R2nbzCdFPw8vi5\n1IT8BaWfiV3dZTQK9NL+rkP5Dm4wXZP01jFsBRDcofr2lvnZHiXti5LeVYXSY5Gc\n+2gIflv3An+tVC7+kth0WnsQazhD29Q71iRkpovOG3lcFb5XYRdQmy4mgPnXEkck\n1DpCl+xvGzmKV22TaekEJ3XDpQKBgQDGLNjHmzKbvjzqci6PYaLaY8VvkEthXVLx\nDQcoDbiNquLfGbOy77HIclidEhUuznrAILGx1n6TPjIg5bqbp1xujZF0OpMxvRiK\nPXeqzUrMjpBOQU2oIG1Vhyqv6ujgoDSSciZQ7we1M0OpV4ZtpCc0Mk7jiuYq3FC+\ntMDENMwRWwKBgCC/AdNaKEXcriiwbuFOF0moRnqXvMdtP2rQLFolFmJoxLCiOsD1\n4YC5aZUGy/39f6JlsykdjyrDIAUUiVyg485DRJmFq1iy/sZqpArG8EIjibkjfAxf\nyy1d5ywSigeCRVErNTGl4+rQiFkQHJKB9h6pjo9rTlFHrROxufjbFYPlAoGBAIpa\noPWp+kkVJX4gPTVI2uNRKHPc72OIPfGgQNDL037EQSO00+omwZ3JhugRycwlxzj/\nGk+oCjJOB71D5WXqD/P2zgexJTZiaBGLHFKYhJIPLdwUZ1zrVqmRdlHe1LqN3mYn\nX2y9lEoDAkflnSpKojwkq0LcpBhkO9MIalQQ8C9lAoGBAJUpV8KWzcNEPW7MDh5F\nFzS3rQB15ZumMgYy3aaLwcAYSQpBWDcODiOAMXEzp7JdOWZ2T7zV3Omu67m55OUx\nVRNapY6U2KQhOdsGw7R0f8m9d7zwET+LoNRDyvcZYZwSNUqVuP2zp3e078IQkduB\n7iwwvRfgUBwPF9MeQ8hqk2Og\n-----END PRIVATE KEY-----\n";

    const doc = new GoogleSpreadsheet(SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, ""),
    });

    await doc.loadInfo();

    setdocs(doc);
  }

  useEffect(() => {
  
    loadSheet();
  }, []);

  const [Email, setEmail] = useState("");

  const handleClick = async () => {
    // Config variables

    const SHEET_NAME = "Sheet1";
    const sheet = docs.sheetsByTitle[SHEET_NAME];

    if(!Email.includes('@') || Email==""){
      toast.warn('Please Enter Correct Email Address');
      return;
    }
    
    sheet.addRow({
      timestamp: new Date(),
      email: Email,
    });

    toast.success("keep your eye on the inbox, your surprise is on the way");
    setEmail("");
  };

 

  return (
    <form className='flex items-center gap-4 mt-10 w-auto justify-center'>
       <ToastContainer
            position='bottom-right'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            limit={2}
            theme='light'
          />
      <div className='relative'>
        <input
          type='email'
          id='UserEmail'
          placeholder='Enter your email address'
          className='md:w-96 w-full rounded-md border border-slate-400 py-2 px-5 pr-10 sm:text-lg'
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className='pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500'>
          <svg viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </div>
      <a
        role='button'
        type='submit'
        href='#'
        className='inline-flex items-center rounded bg-accent px-8 py-3 text-white hover:bg-accent/80 focus:outline-none focus:ring'>
        <span className='text-md font-medium'
        onClick={handleClick}> Subscribe </span>
      </a>
    </form>
  )
}

export default HeroForm

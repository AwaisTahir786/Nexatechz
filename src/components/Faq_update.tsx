import React from "react";
import Image from "next/image";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-10 md:mt-16 mb-12 md:mb-20 text-[#39FF14] ">
        Questions? Answers.
      </h2>

      <div
        id="faq"
        className="lg:mt-0 space-y-6 p-5 md:px-12 lg:px-32 pt-10 pb-20 md:mx-10 lg:mx-28 my-10 bg-gradient-to-t bg-[#131313] text-white rounded-2xl flex flex-col justify-start"
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-20 lg:pt-10 space-y-10 lg:space-y-0">
          <div className="grid md:w-full lg:w-2/3 divide-y divide-white/10">
            {[
              {
                question: "Who's behind Supafast?",
                answer:
                  "Supafast started as a one-person agency and has grown into a remote, global team. Collaborate directly with Namya, the founder, and our talented professionals worldwide.",
              },
              {
                question: "Why not hire a full-time designer and developer?",
                answer:
                  "Hiring full-time professionals can be costly. A senior designer might cost $100k+, while a developer could exceed $300k, which adds up to over $500k annually.",
              },
              {
                question: "What if I'm not happy with the results?",
                answer:
                  "If you're not satisfied, we offer unlimited revisions until you're 100% happy with the outcome.",
              },
              {
                question: "How quickly will I receive my project?",
                answer:
                  "Most requests are fulfilled within 48 hours, though complex projects may take a bit longer.",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "We don't provide refunds, but you can pause and resume our services at any time to suit your needs.",
              },
            ].map(({ question, answer }, index) => (
              <div key={index} className="py-5">
                <details className="group w-full">
                  <summary className="flex cursor-pointer list-none items-center justify-between space-x-5">
                    <span className="lg:text-md md:text-md text-white font-extralight">
                      {question}
                    </span>
                    <span className="transition duration-300 group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="pt-3">
                    <span className="group-open:animate-fadeIn description text-start leading-7 w-full md:w-4/5 text-sm font-extralight">
                      {answer}
                    </span>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="relative lg:w-1/3">
            <Image
              alt="scribble"
              loading="eager"
              width="30"
              height="50"
              decoding="async"
              data-nimg="1"
              className="w-full"
              src="/bolt.svg"
            />
            <div className="p-5 md:p-8 absolute top-0 left-0 flex flex-col items-center justify-center text-center w-full space-y-5">
              <a href="https://twitter.com/namyakhann">
                <Image
                  alt="scribble"
                  loading="eager"
                  width="30"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="w-[80px] md:w-[100px] xl:w-[150px] cursor-pointer"
                  src="/female.svg"
                />
              </a>
              <div className="flex flex-col items-center justify-center">
                <span className="lg:text-md md:text-md xl:text-md text-white font-medium ">
                  Have more questions?
                </span>
                <span className="lg:text-md md:text-md xl:text-md text-white font-medium ">
                  Book a FREE intro call.
                </span>
              </div>
              <a
                href="https://cal.com/namya/15min"
                className="rounded-xl bg-[#39FF14] text-black p-3.5 md:p-4 px-10 text-sm md:px-14 text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

"use client";
import ContainerSec from "@/components/containerSec";
import { useEffect } from "react";

export default function LandingPage() {
  return (
    <section className=" pb-30 ">
      <div className=" h-[90vh] relative">
        <img
          src="/images/banner5.jpg"
          className=" absolute left-0 -top-50 -z-20 select-none "
        />
        <h1 className=" font-Bebas text-[94px] text-white flex flex-col absolute left-[20%] translate-x-[-20%] top-[40%] translate-y-[-40%] ">
          Shah Mohammad Rumman Prince
          <span className=" text-[38px] w-180 ">
            BSS Student at the University of Dhaka Disaster Management, Climate
            Adaptation & Resilience Research
          </span>
        </h1>
      </div>
      <ContainerSec>
        <img
          src="images/sig.png"
          className=" invert-100 mx-auto my-15 w-150 rotate-40 "
        />
        <div className=" mt-20 pb-14 border-b border-gray-500 ">
          <h1 className=" font-Bebas text-[32px] text-white mb-4 ">
            Hey, I’m Shah Mohammad Rumman Prince!
          </h1>
          <div className=" grid grid-cols-2 gap-6 ">
            <p className=" text-[16px] text-white font-Supreme mt-2 ">
              <a
                href="https://du.ac.bd/undergrad/IDMVS"
                target="_blank"
                className=" text-yellow-400 "
              >
                BSS Student (Disaster Management & Vulnerability Studies),
                University of Dhaka | Disaster Risk Reduction & Climate
                Adaptation Focus
              </a>
              <br /> <br />
              I’m currently pursuing my Bachelor of Social Sciences (BSS) at the
              Institute of Disaster Management and Vulnerability Studies at the
              University of Dhaka.
              <br /> <br />
              My core goal is to contribute to interdisciplinary research and
              development in disaster risk reduction (DRR), climate change
              adaptation, and sustainable development—with a clear emphasis on
              vulnerable populations and systemic resilience. I’m especially
              interested in work that translates evidence into practical
              strategies that improve preparedness, reduce disaster risk, and
              support a more equitable future.
              <br /> <br />
              Alongside academics, I’m building strong technical foundations
              through training in research methodology, risk assessment, DRR in
              humanitarian action, GIS and spatial analysis, project management,
              and data analytics (including ‎
              <a
                href="https://www.ibm.com/products/spss-statistics"
                target="_blank"
                className=" text-yellow-400 "
              >
                SPSS/statistics
              </a>
              ‎ and{" "}
              <a
                href="https://www.python.org/"
                target="_blank"
                className=" text-yellow-400 "
              >
                Python-related learning tracks
              </a>
              ).
              <br /> <br />I also take on leadership and service roles. I
              currently serve as President of the Environment & Disaster
              Management club at Surja Sen Hall, and I work as a Research
              Assistant at the University of Dhaka. I’ve also volunteered with ‎
              <a
                href="https://bdrcs.org/youth-and-volunteers/"
                target="_blank"
                className=" text-yellow-400 "
              >
                Bangladesh Red Crescent Society (BDRCS)
              </a>
              ‎ youth activities at DU, Give Bangladesh Foundation, and
              Volunteer for Bangladesh.
              <br /> <br />
              Recognition-wise, I’ve been awarded Outstanding Mentee by{" "}
              <a
                href="https://www.aeyn.org/"
                target="_blank"
                className=" text-yellow-400 "
              >
                Asian Environmental Youth Network ‎
              </a>
              and earned{" "}
              <a
                href="https://event.unitar.org/full-catalog/becoming-climate-champion"
                className=" text-yellow-400 "
                target="_blank"
              >
                “Becoming a Climate Champion” through UNITAR
              </a>{" "}
              (among other achievements).
            </p>
            <img src="/images/prince.png" className=" w-125 ml-auto " />
          </div>
        </div>
      </ContainerSec>
    </section>
  );
}

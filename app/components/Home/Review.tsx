"use client";
import Reviews from "@/app/lib/constants/Review";
import CommonWrapper from "../layouts/CommonWrapper";
import PrimaryTitle from "../shared/PrimaryTitle";
import Star from "@/public/icons/review-star.svg";
import Image from "next/image";

const Review = () => {
  return (
    <CommonWrapper>
      <section className="space-y-8 md:space-y-12">
        <PrimaryTitle
          headingOne="Our Customers"
          headingTwo=" Says"
          subheading="Get Your Most Valueable Customers Thinkings & Feedback"
        />

        {/* REVIEW GRID START */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Reviews.map((review) => (
            <div
              key={review.id}
              className="w-full bg-white border border-primary-100 shadow-sm p-6 md:p-7 rounded-2xl space-y-4 overflow-hidden"
            >
              <div className="flex justify-between items-start">
                {/* PROFILE SECTION */}
                <div className="flex gap-x-3 items-center">
                  <Image
                    alt={review.name}
                    src={review.image}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />

                  <div>
                    <h1 className="text-lg md:text-xl font-semibold leading-snug">
                      {review.name}
                    </h1>
                    <p className="text-sm text-gray-600">{review.designation}</p>
                  </div>
                </div>

                {/* STAR SECTION */}
                <div className="flex items-center gap-x-2 bg-primary-50 rounded-xl px-3 py-1.5 shrink-0">
                  <Image
                    src={Star}
                    alt="star-icon"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="font-medium text-sm md:text-base">{review.rating}</p>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {review.review}
              </p>
            </div>
          ))}
        </div>
        {/* REVIEW GRID END */}
      </section>
    </CommonWrapper>
  );
};

export default Review;

import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-5 bg-[#F8F8F8] px-[5%] lg:px-[10%] p-[3%] gap-10 md:gap-4 mt-[5%]">
      <section className="col-span-2 h-auto flex flex-col justify-end lg:gap-7 pr-[10%]">
        <div>
          <img src="/logos/coffiebrown.png" alt="coffie" />
        </div>
        <div className="text-[#4F5665]">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </div>
        <div className="text-[#AFB5C0]">©2020CoffeeStore</div>
      </section>
      <section className="w-fit flex flex-col gap-3">
        <p className="font-semibold text-xl">Product</p>
        <p className="text-[#4F5665]">Our Product</p>
        <p className="text-[#4F5665]">Pricing</p>
        <p className="text-[#4F5665]">Locations</p>
        <p className="text-[#4F5665]">Countries</p>
        <p className="text-[#4F5665]">Blog</p>
      </section>
      <section className="w-fit flex flex-col gap-3">
        <p className="font-semibold text-xl">Engage</p>
        <p className="text-[#4F5665]">Partner</p>
        <p className="text-[#4F5665]">FAQ</p>
        <p className="text-[#4F5665]">About Us</p>
        <p className="text-[#4F5665]">Privacy Policy</p>
        <p className="text-[#4F5665]">Trens Of Service</p>
      </section>
      <section className="w-fit flex flex-col gap-3">
        <p className="font-semibold text-xl">Social Media</p>
        <div className="flex flex-wrap">
          <img src="/logos/Facebook.svg" alt="facebook" className="w-15" />
          <img src="/logos/Twitter.svg" alt="twitter" className="w-15" />
          <img src="/logos/Instagram.png" alt="instagram" className="w-15" />
        </div>
      </section>
    </footer>
  );
}
